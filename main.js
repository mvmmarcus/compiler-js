const fs = require("fs");

let {
  tabelaTransicaoEstados,
  chavesTabelaTransicao,
  tabelaSimbolos,
  tabelaEstadosFinais,
  tabelaAcoes,
  regrasGramatica,
  tabelaDesvios,
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

// variaveis lexico
let estadoAtual = 0;
let linhaArquivoFonte = 1;
let colunaArquivoFonte = 1;
let itemConcatenado = "";
let posicao = 0;

// variaveis sintatico
let s = 0; // estado no topo da pilha
let a = ""; // token
let t = 0;
let A = null;
let beta = "";
let tamanhoBeta = null;
let acao = "";
let stack = [0]; // pilha
let erro = null;
let run = true;

// semantico
let programaC =
  "#include <stdio.h>\ntypedef char literal[256];\nvoid main(void)\n{\n/*----Variaveis temporarias----*/\n"; // contém todo o conteúdo do arquivo programa.c
let variaveisTemporarias = "";
let expressaoTxAuxiliar = "";
let pilhaSemantico = [];
let contadorVariavelTemp = 0;

const executaRegraSemantica = (acao = "", lexicoToken, tamanhoBeta = 1) => {
  const token = lexicoToken;

  const adicionaNoTopoDaPilha = (item, pilhaSemantico, tamanhoBeta = 1) => {
    for (let index = 0; index < tamanhoBeta; index++) {
      pilhaSemantico.pop();
    }

    pilhaSemantico.push(item);
  };

  const regras = {
    R5: () => {
      programaC = programaC + "\n\n\n";
    },
    R6: () => {
      const D = token;
      const TIPO = pilhaSemantico[pilhaSemantico.length - 3];
      const id = pilhaSemantico[pilhaSemantico.length - 1];

      if (!!TIPO?.tipo) {
        adicionaNoTopoDaPilha(D, pilhaSemantico, tamanhoBeta);
        programaC = programaC + id.lexema + "\n";
      } else {
        console.log(
          `Erro: variável não declarada, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R7: () => {
      const L = token;
      const id = pilhaSemantico[pilhaSemantico.length - 1];

      if (!!id?.tipo) {
        tabelaSimbolos = tabelaSimbolos.map((item) => {
          if (item?.lexema === id.lexema) {
            return id;
          }
          return item;
        });

        adicionaNoTopoDaPilha(L, pilhaSemantico, tamanhoBeta);
        programaC = programaC + id.lexema;
      }
    },
    R8: () => {
      let TIPO = token;
      const inteiro = pilhaSemantico[pilhaSemantico.length - 1];
      TIPO.tipo = inteiro.tipo;

      adicionaNoTopoDaPilha(TIPO, pilhaSemantico, tamanhoBeta);
      programaC = programaC + "int" + " "; // conversão para sintaxe da linguagem C
    },
    R9: () => {
      let TIPO = token;
      const real = pilhaSemantico[pilhaSemantico.length - 1];
      TIPO.tipo = real.tipo;

      adicionaNoTopoDaPilha(TIPO, pilhaSemantico, tamanhoBeta);
      programaC = programaC + "double" + " "; // conversão para sintaxe da linguagem C
    },
    R10: () => {
      let TIPO = token;
      const literal = pilhaSemantico[pilhaSemantico.length - 1];
      TIPO.tipo = literal.tipo;

      adicionaNoTopoDaPilha(TIPO, pilhaSemantico, tamanhoBeta);
      programaC = programaC + TIPO.tipo + " ";
    },
    R12: () => {
      const ES = token;
      const id = pilhaSemantico[pilhaSemantico.length - 2];

      if (id?.tipo === "literal") {
        adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
        programaC = programaC + `scanf("%s", &${id.lexema});\n`;
      } else if (id?.tipo === "inteiro") {
        adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
        programaC = programaC + `scanf("%d", &${id.lexema});\n`;
      } else if (id?.tipo === "real") {
        adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
        programaC = programaC + `scanf("%lf", &${id.lexema});\n`;
      } else {
        console.log(
          `Erro: variável não declarada, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R13: () => {
      const ES = token;
      const ARG = pilhaSemantico[pilhaSemantico.length - 2];

      if (ARG?.classe === "id") {
        if (ARG?.tipo === "literal") {
          adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
          programaC = programaC + `printf("%s", ${ARG?.lexema});\n`;
        } else if (ARG?.tipo === "inteiro") {
          adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
          programaC = programaC + `printf("%d", ${ARG?.lexema});\n`;
        } else if (ARG?.tipo === "real") {
          adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
          programaC = programaC + `printf("%lf", ${ARG?.lexema});\n`;
        }
      } else {
        adicionaNoTopoDaPilha(ES, pilhaSemantico, tamanhoBeta);
        programaC = programaC + `printf(${ARG?.lexema});\n`;
      }
    },
    R14: () => {
      let ARG = token;
      const lit = pilhaSemantico[pilhaSemantico.length - 1];

      ARG = lit;
      adicionaNoTopoDaPilha(ARG, pilhaSemantico, tamanhoBeta);
    },
    R15: () => {
      let ARG = token;
      const num = pilhaSemantico[pilhaSemantico.length - 1];

      ARG = num;
      adicionaNoTopoDaPilha(ARG, pilhaSemantico, tamanhoBeta);
    },
    R16: () => {
      let ARG = token;
      const id = pilhaSemantico[pilhaSemantico.length - 1];

      if (!!id?.tipo) {
        ARG = id;
        adicionaNoTopoDaPilha(ARG, pilhaSemantico, tamanhoBeta);
      } else {
        console.log(
          `Erro: variável não declarada, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R18: () => {
      const id = pilhaSemantico[pilhaSemantico.length - 4];
      const LD = pilhaSemantico[pilhaSemantico.length - 2];

      let CMD = token;

      if (!!id?.tipo) {
        if (id?.tipo === LD?.tipo) {
          adicionaNoTopoDaPilha(CMD, pilhaSemantico, tamanhoBeta);
          programaC = programaC + `${id?.lexema} = ${LD?.lexema};\n`;
        } else {
          console.log(
            `Erro: tipos diferentes para atribuição, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
          );
        }
      } else {
        console.log(
          `Erro: variável não declarada, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R19: () => {
      const OPRD1 = pilhaSemantico[pilhaSemantico.length - 3];
      const OPRD2 = pilhaSemantico[pilhaSemantico.length - 1];
      const opm = pilhaSemantico[pilhaSemantico.length - 2];
      let LD = token;

      if (OPRD1?.tipo === OPRD2?.tipo && OPRD1?.tipo !== "literal") {
        const Tx = `T${contadorVariavelTemp}`;
        LD.lexema = Tx;
        LD.tipo = OPRD1?.tipo;

        adicionaNoTopoDaPilha(LD, pilhaSemantico, tamanhoBeta);
        programaC =
          programaC +
          `${Tx} = ${OPRD1?.lexema} ${opm?.lexema} ${OPRD2?.lexema};\n`;
        variaveisTemporarias = variaveisTemporarias + `int ${Tx};\n`;
        contadorVariavelTemp++;
      } else {
        console.log(
          `Erro: operandos com tipos incompatíveis, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R20: () => {
      let LD = token;
      const OPRD = pilhaSemantico[pilhaSemantico.length - 1];

      LD = OPRD;
      adicionaNoTopoDaPilha(LD, pilhaSemantico, tamanhoBeta);
    },
    R21: () => {
      let OPRD = token;
      const id = pilhaSemantico[pilhaSemantico.length - 1];

      if (!!id?.tipo) {
        OPRD = id;
        adicionaNoTopoDaPilha(OPRD, pilhaSemantico, tamanhoBeta);
      } else {
        console.log(
          `Erro: variável não declarada, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R22: () => {
      let OPRD = token;
      const num = pilhaSemantico[pilhaSemantico.length - 1];

      OPRD = num;
      adicionaNoTopoDaPilha(OPRD, pilhaSemantico, tamanhoBeta);
    },
    R24: () => {
      const COND = token;

      programaC = programaC + `}\n`;
      adicionaNoTopoDaPilha(COND, pilhaSemantico, tamanhoBeta);
    },
    R25: () => {
      const CAB = token;
      const EXP_R = pilhaSemantico[pilhaSemantico.length - 3];

      programaC = programaC + `if (${EXP_R?.lexema}) {\n`;
      adicionaNoTopoDaPilha(CAB, pilhaSemantico, tamanhoBeta);
    },
    R26: () => {
      const OPRD1 = pilhaSemantico[pilhaSemantico.length - 3];
      const OPRD2 = pilhaSemantico[pilhaSemantico.length - 1];
      const opr = pilhaSemantico[pilhaSemantico.length - 2];
      let EXP_R = token;

      if (OPRD1?.tipo === OPRD2?.tipo) {
        const Tx = `T${contadorVariavelTemp}`;
        EXP_R.lexema = Tx;

        adicionaNoTopoDaPilha(EXP_R, pilhaSemantico, tamanhoBeta);
        const expressaoTx = `${Tx} = ${OPRD1?.lexema} ${opr?.lexema} ${OPRD2?.lexema}`;

        if (expressaoTx === "T5 = B < 5") {
          expressaoTxAuxiliar = expressaoTx + ";";
        }

        programaC = programaC + `${expressaoTx}\n`;
        variaveisTemporarias = variaveisTemporarias + `bool ${Tx};\n`;
        contadorVariavelTemp++;
      } else {
        console.log(
          `Erro: operandos com tipos incompatíveis, linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
        );
      }
    },
    R33: () => {
      const CABR = token;
      const EXP_R = pilhaSemantico[pilhaSemantico.length - 2];

      if (!!EXP_R?.lexema) {
        programaC = programaC + `while (${EXP_R?.lexema}) do {\n`;
        adicionaNoTopoDaPilha(CABR, pilhaSemantico, tamanhoBeta);
      }
    },
    R37: () => {
      // fimrepita => fim do laço de repetição (while)
      const CP_R = token;

      programaC = programaC + `${expressaoTxAuxiliar}\n` + `}\n`;
      adicionaNoTopoDaPilha(CP_R, pilhaSemantico, tamanhoBeta);
    },
  };

  const executaRegra = regras[acao];

  if (executaRegra) {
    executaRegra();
  }
};

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
      if (token?.classe === "ERRO") break; // garantir que o sintatico não receba token do tipo erro

      a = token.classe;
      s = stack[stack.length - 1];
      if (tabelaAcoes[s][a]?.id === "s") {
        acao = tabelaAcoes[s][a]?.acao;
        t = tabelaAcoes[s][a]?.t;
        stack.push(t);

        // semantico
        pilhaSemantico.push(token);

        break;
      } else if (tabelaAcoes[s][a]?.id === "r") {
        acao = tabelaAcoes[s][a]?.acao;
        tamanhoBeta = regrasGramatica[acao]?.tamanhoBeta;
        stack = stack.slice(0, -tamanhoBeta);
        t = stack[stack.length - 1];
        A = regrasGramatica[acao]?.A;
        beta = regrasGramatica[acao]?.beta;
        if (!!tabelaDesvios[t][A]) stack.push(tabelaDesvios[t][A]);

        console.log(`${A} -> ${beta}`);

        // iniciar o semantico
        executaRegraSemantica(acao, token, tamanhoBeta);
      } else if (tabelaAcoes[s][a]?.id === "acc") {
        run = false;
        console.table(tabelaSimbolos);

        // adição das variáveis temporárias logo após o comentário: *----Variaveis temporarias----*
        programaC = programaC.replace(
          "/*----Variaveis temporarias----*/\n",
          `/*----Variaveis temporarias----*/\n${variaveisTemporarias}\n`
        );

        // fechamento do bloco main (necessário porque o inicio foi adicionado "na mão")
        programaC = programaC + "}";

        fs.writeFile("programa.c", programaC, (erro) => {
          if (erro) {
            console.log("erro ao criar o arquivo programa.c: ", erro);
            throw erro;
          }
          console.log("arquivo programa.c criado!");
        });
        break;
      } else {
        const erroAtual = tabelaAcoes[s]?.erro;
        if (erroAtual !== erro) {
          erro = erroAtual;
          console.log(
            `Erro sintatico: ${erro}, na linha: ${linhaArquivoFonte}, coluna: ${colunaArquivoFonte}`
          );
        }
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
              if (token.classe === "id") {
                insereToken(tabelaSimbolos, token);
              }

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
            if (token.classe === "id") {
              insereToken(tabelaSimbolos, token);
            }

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
