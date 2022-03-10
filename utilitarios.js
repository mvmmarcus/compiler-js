const { tabelaErrosPorEstado } = require("./tabelas");

const verificaEspaco = (caracter) => {
  const espaco = " ";
  return espaco.includes(caracter);
};

const verificaQuebraDeLinha = (caracter) => {
  const quebraLinha = "\n";
  return quebraLinha.includes(caracter);
};

const verificaDigito = (caracter) => {
  const digito = "0123456789";
  return digito.includes(caracter);
};

const verificaLetra = (caracter) => {
  const letra = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letra.includes(caracter);
};

const verificaDemaisCaracteres = (caracter) => {
  const demaisCaracteres = ".,;:!?'*+-_/(){}[]<>=\"\\";
  return demaisCaracteres.includes(caracter);
};

const verificaEof = (caracter) => {
  const eof = "eof";
  return eof.includes(caracter);
};

const verificaExponencial = (caracterAtual, caracterAnterior) => {
  const Ee = "Ee";

  return Ee.includes(caracterAtual) && verificaDigito(caracterAnterior);
};

const verificaConcatenacao = (caracter, estadoAtual) => {
  return (
    (verificaEspaco(caracter) === false &&
      verificaQuebraDeLinha(caracter) === false) ||
    estadoAtual !== 0
  );
};

const buscaProximoCaracter = (posicaoAtual, codigoFonte) => {
  return codigoFonte[posicaoAtual + 1];
};

const buscaCaracterAnterior = (posicaoAtual, codigoFonte) => {
  return codigoFonte[posicaoAtual - 1];
};

const buscaEstadoFinal = (tabelaEstadosFinais, estado) => {
  return tabelaEstadosFinais.find((item) => item.estado === estado);
};

const buscaToken = (tabelaSimbolos, lexema) => {
  return tabelaSimbolos.find((item) => item.lexema === lexema);
};

const buscaErro = (estado, lexema, linha, coluna) => {
  const erro = tabelaErrosPorEstado.find((item) => item.estado === estado);

  console.log(
    `ERRO LEXICO - ${erro.mensagem}, linha ${linha}, coluna ${coluna}`
  );

  return {
    classe: "ERRO",
    lexema: lexema,
    tipo: null,
  };
};

const insereToken = (tabelaSimbolos, token) => {
  tabelaSimbolos.push(token);
};

const geraToken = (estado, lexema) => {
  const tipos = {
    num: estado.classe === "num" && lexema.includes(".") ? "real" : "inteiro",
    lit: "literal",
    id: null,
  };

  token = {
    classe: estado.classe,
    lexema: lexema,
    tipo: tipos[estado.classe] || null,
  };

  return token;
};

// sendo usado para conseguir identificar caracteres que a linguagem não reconhece
const verificaAlfabeto = (caracter) => {
  return (
    verificaLetra(caracter) ||
    verificaDigito(caracter) ||
    verificaEspaco(caracter) ||
    verificaQuebraDeLinha(caracter) ||
    verificaDemaisCaracteres(caracter) ||
    verificaEof(caracter)
  );
};

module.exports = {
  verificaEspaco,
  verificaDigito,
  verificaLetra,
  verificaQuebraDeLinha,
  verificaConcatenacao,
  verificaExponencial,
  buscaProximoCaracter,
  verificaAlfabeto,
  insereToken,
  buscaEstadoFinal,
  buscaToken,
  buscaCaracterAnterior,
  buscaErro,
  geraToken,
};
