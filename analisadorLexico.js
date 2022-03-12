const fs = require("fs");

const {
  tabelaTransicaoEstados,
  chavesTabelaTransicao,
  tabelaSimbolos,
  tabelaEstadosFinais,
  actionSyntaticAnalyzer,
  gramaticRules,
  goToSyntaticAnalyzer,
} = require("./tabelas");

const {
  verificaLetra,
  verificaQuebraDeLinha,
  verificaConcatenacao,
  verificaDigito,
  buscaProximoCaracter,
  buscaEstadoFinal,
  buscaToken,
  insereToken,
  buscaCaracterAnterior,
  verificaAlfabeto,
  verificaExponencial,
  buscaErro,
  geraToken,
} = require("./utilitarios");

const codigoFonte = fs.readFileSync("./codigoFonte.txt", "utf8");

// lexical variables
let estadoAtual = 0;
let linhaArquivoFonte = 1;
let colunaArquivoFonte = 1;
let itemConcatenado = "";
let posicao = 0;

// syntatic variables
let s = 0; // estado no topo da pilha
let a = ""; // token
let t = 0;
let A = null;
let beta = "";
let betaSize = null;
let action = "";
let stack = [0]; // pilha
let run = true;

// ler cada caracter do codigo fonte
for (let i = 0; i < codigoFonte.length + 1; i++) {
  posicao = i;
  let token = {
    classe: "",
    lexema: "",
    tipo: null,
  };
  const caracter = codigoFonte[i];
  if (caracter) {
    token = scanner(caracter);
    colunaArquivoFonte++;
  } else {
    token = scanner("eof");
  }

  if (token) {
    while (run === true) {
      // console.log({ token });

      a = token.classe;
      s = stack[stack.length - 1];
      if (actionSyntaticAnalyzer[s][a]?.id === "s") {
        action = actionSyntaticAnalyzer[s][a]?.action;
        t = actionSyntaticAnalyzer[s][a]?.t;
        stack.push(t);
        break;
      } else if (actionSyntaticAnalyzer[s][a]?.id === "r") {
        action = actionSyntaticAnalyzer[s][a]?.action;
        betaSize = gramaticRules[action]?.betaLenght;
        stack = stack.slice(0, -betaSize);
        t = stack[stack.length - 1];
        A = gramaticRules[action]?.A;
        beta = gramaticRules[action]?.beta;

        if (!!goToSyntaticAnalyzer[t][A])
          stack.push(goToSyntaticAnalyzer[t][A]);

        console.log(`${A} -> ${beta}`);
      } else if (actionSyntaticAnalyzer[s][a]?.id === "acc") {
        // action = actionSyntaticAnalyzer[s][a]?.action;
        // console.log(`${gramaticRules?.R1?.A} -> ${gramaticRules?.R1?.beta}`);
        run = false;
        break;
      } else {
        const error = actionSyntaticAnalyzer[s]?.err;
        console.log(
          `syntatic error: ${error}, coluna: ${colunaArquivoFonte}, linha: ${linhaArquivoFonte}`
        );
        break;
      }
    }
  }
}

// validar tokens
function scanner(caracter) {
  let proximoEstado = null;
  const proximoCaracter = buscaProximoCaracter(posicao, codigoFonte) || "eof";
  const caracterAnterior = buscaCaracterAnterior(posicao, codigoFonte);

  if (verificaAlfabeto(caracter) === false) {
    estadoAtual = 0;
    itemConcatenado += caracter;

    const erro = buscaErro(
      estadoAtual,
      itemConcatenado,
      linhaArquivoFonte,
      colunaArquivoFonte
    );

    itemConcatenado = "";

    return erro;
  } else if (
    verificaLetra(caracter) &&
    verificaExponencial(caracter, caracterAnterior) === false
  ) {
    proximoEstado = tabelaTransicaoEstados[estadoAtual]["L"];
  } else if (verificaDigito(caracter)) {
    proximoEstado = tabelaTransicaoEstados[estadoAtual]["D"];
  } else {
    const verificaChaveTabelaTransicao =
      chavesTabelaTransicao.includes(caracter);

    if (verificaChaveTabelaTransicao === true) {
      proximoEstado = tabelaTransicaoEstados[estadoAtual][caracter];
    } else {
      // .* -> identifica qualquer caracter dentro do alfabeto que não seja uma chave da tabela de transicao
      proximoEstado = tabelaTransicaoEstados[estadoAtual][".*"];
    }
  }

  const podeConcatenar = verificaConcatenacao(caracter, estadoAtual);

  if (proximoEstado !== null) {
    if (podeConcatenar === true) {
      itemConcatenado += caracter;

      let estadoProximoCaracter = null;

      if (verificaAlfabeto(proximoCaracter)) {
        if (
          verificaLetra(proximoCaracter) &&
          verificaExponencial(proximoCaracter, caracter) === false
        ) {
          estadoProximoCaracter = tabelaTransicaoEstados[proximoEstado]["L"];
        } else if (verificaDigito(proximoCaracter)) {
          estadoProximoCaracter = tabelaTransicaoEstados[proximoEstado]["D"];
        } else {
          const verificaChaveTabelaTransicao =
            chavesTabelaTransicao.includes(proximoCaracter);

          if (verificaChaveTabelaTransicao === true) {
            estadoProximoCaracter =
              tabelaTransicaoEstados[proximoEstado][proximoCaracter];
          } else {
            // .* -> identifica qualquer caracter dentro do alfabeto que não seja uma chave da tabela de transicao
            estadoProximoCaracter = tabelaTransicaoEstados[proximoEstado][".*"];
          }
        }

        // verificar se o lexema concatenado forma um token apenas quando o estado do proximo caracter levar para um estado nulo
        if (estadoProximoCaracter === null) {
          const estadoFinal = buscaEstadoFinal(
            tabelaEstadosFinais,
            proximoEstado // estado que o caracter atual leva
          );
          let token = buscaToken(tabelaSimbolos, itemConcatenado);

          // verificar se existe estado final para o caracter atual
          if (estadoFinal) {
            if (token) {
              // verificar se o token já está inserido na tabela de simbolos

              itemConcatenado = "";
              estadoAtual = 0;

              return token;
            } else {
              token = geraToken(estadoFinal, itemConcatenado);

              itemConcatenado = "";
              estadoAtual = 0;

              // reconhecer e ignorar o token quando classe é comentario
              if (token.classe === "comentario") return;

              // inserir na tabela de simbolos se token id
              if (token.classe === "id") insereToken(tabelaSimbolos, token);

              return token;
            }
          } else {
            const erro = buscaErro(
              proximoEstado,
              itemConcatenado,
              linhaArquivoFonte,
              colunaArquivoFonte
            );

            if (erro) {
              estadoAtual = 0;
              itemConcatenado = "";

              return erro;
            }
          }
        }
      } else {
        const estadoFinal = buscaEstadoFinal(tabelaEstadosFinais, estadoAtual);
        let token = buscaToken(tabelaSimbolos, itemConcatenado);

        // verificar se o lexema concatenado forma um token quando o proximo caracter não pertence ao alfabeto
        if (estadoFinal) {
          if (token) {
            // verificar se o token já está inserido na tabela de simbolos

            itemConcatenado = "";
            estadoAtual = 0;

            return token;
          } else {
            token = geraToken(estadoFinal, itemConcatenado);

            itemConcatenado = "";
            estadoAtual = 0;

            // reconhecer e ignorar o token quando classe é comentario
            if (token.classe === "comentario") return;

            // inserir na tabela de simbolos se classe id e já não estiver inserido
            if (token.classe === "id") insereToken(tabelaSimbolos, token);

            return token;
          }
        }
      }
    }

    // aumentar o numero de linha quando reconhecer quebra linha
    if (verificaQuebraDeLinha(caracter)) {
      linhaArquivoFonte += 1;
      colunaArquivoFonte = 0;
      proximoEstado = 0;
    }

    estadoAtual = proximoEstado;
  } else {
    itemConcatenado += caracter;

    const erro = buscaErro(
      proximoEstado,
      itemConcatenado,
      linhaArquivoFonte,
      colunaArquivoFonte
    );

    if (erro) {
      estadoAtual = 0;
      itemConcatenado = "";

      return erro;
    }
  }
}
