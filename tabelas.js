const tabelaTransicaoEstados = [
  /* 0  */ {
    D: 1,
    '"': 7,
    L: 9,
    "{": 10,
    eof: 12,
    "<": 13,
    ">": 16,
    "=": 18,
    "+": 19,
    "-": 19,
    "/": 19,
    "*": 19,
    "(": 20,
    ")": 21,
    ";": 22,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": 0,
    "\n": 0,
  },
  /* 1  */ {
    D: 1,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": 2,

    ".*": null,
    ".*": null,
    e: 4,
    E: 4,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 2  */ {
    D: 3,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 3  */ {
    D: 3,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: 4,
    E: 4,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 4  */ {
    D: 6,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": 5,
    "-": 5,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 5  */ {
    D: 6,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 6  */ {
    D: 6,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 7  */ {
    D: 7,
    '"': 8,
    L: 7,
    "{": 7,
    eof: null,
    "<": 7,
    ">": 7,
    "=": 7,
    "+": 7,
    "-": 7,
    "/": 7,
    "*": 7,
    "(": 7,
    ")": 7,
    ";": 7,
    ".": 7,
    ".*": 7,
    e: 7,
    E: 7,
    _: 7,
    "}": 7,
    " ": 7,
    "\n": null,
  },
  /* 8  */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 9  */ {
    D: 9,
    '"': null,
    L: 9,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: 9,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 10 */ {
    D: 10,
    '"': 10,
    L: 10,
    "{": 10,
    eof: null,
    "<": 10,
    ">": 10,
    "=": 10,
    "+": 10,
    "-": 10,
    "/": 10,
    "*": 10,
    "(": 10,
    ")": 10,
    ";": 10,
    ".": 10,
    ".*": 10,
    e: 10,
    E: 10,
    _: 10,
    "}": 11,
    " ": 10,
    "\n": null,
  },
  /* 11 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 12 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 13 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": 15,
    "=": 15,
    "+": null,
    "-": 14,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 14 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 15 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 16 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": 17,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 17 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 18 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 19 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 20 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 21 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 22 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
  /* 23 */ {
    D: null,
    '"': null,
    L: null,
    "{": null,
    eof: null,
    "<": null,
    ">": null,
    "=": null,
    "+": null,
    "-": null,
    "/": null,
    "*": null,
    "(": null,
    ")": null,
    ";": null,
    ".": null,
    ".*": null,
    e: null,
    E: null,
    _: null,
    "}": null,
    " ": null,
    "\n": null,
  },
];

const tabelaEstadosFinais = [
  { estado: 1, classe: "num" },
  { estado: 3, classe: "num" },
  { estado: 6, classe: "num" },
  { estado: 8, classe: "lit" },
  { estado: 9, classe: "id" },
  { estado: 11, classe: "comentario" },
  { estado: 12, classe: "eof" },
  { estado: 13, classe: "opr" },
  { estado: 14, classe: "rcb" },
  { estado: 15, classe: "opr" },
  { estado: 16, classe: "opr" },
  { estado: 17, classe: "opr" },
  { estado: 18, classe: "opr" },
  { estado: 19, classe: "opm" },
  { estado: 20, classe: "ab_p" },
  { estado: 21, classe: "fc_p" },
  { estado: 22, classe: "pt_v" },
];

const tabelaErrosPorEstado = [
  { estado: 0, mensagem: "Caracter não pertence ao alfabeto" },
  { estado: 2, mensagem: "Necessário digito após o ponto" },
  { estado: 4, mensagem: "Necessário dígito ou sinal após exponencial" },
  { estado: 5, mensagem: "Necessário digito após o sinal" },
  { estado: 7, mensagem: "Necessário fechar aspas" },
  { estado: 10, mensagem: "Necessário fechar chaves" },
  {
    estado: null,
    mensagem: "Caracter não leva a nenhum estado de transição",
  },
];

const tabelaSimbolos = [
  { classe: "inicio", lexema: "inicio", tipo: "inicio" },
  { classe: "varinicio", lexema: "varinicio", tipo: "varinicio" },
  { classe: "varfim", lexema: "varfim", tipo: "varfim" },
  { classe: "escreva", lexema: "escreva", tipo: "escreva" },
  { classe: "leia", lexema: "leia", tipo: "leia" },
  { classe: "se", lexema: "se", tipo: "se" },
  { classe: "entao", lexema: "entao", tipo: "entao" },
  { classe: "fimse", lexema: "fimse", tipo: "fimse" },
  { classe: "repita", lexema: "repita", tipo: "repita" },
  { classe: "fimrepita", lexema: "fimrepita", tipo: "fimrepita" },
  { classe: "fim", lexema: "fim", tipo: "fim" },
  { classe: "inteiro", lexema: "inteiro", tipo: "inteiro" },
  { classe: "literal", lexema: "literal", tipo: "literal" },
  { classe: "real", lexema: "real", tipo: "real" },
];

const chavesTabelaTransicao = [
  "D",
  '"',
  "L",
  "{",
  "eof",
  "<",
  ">",
  "=",
  "+",
  "-",
  "/",
  "*",
  "(",
  ")",
  ";",
  ".",
  "e",
  "E",
  "_",
  "}",
  " ",
  "\n",
];

const regrasGramatica = {
  R1: {
    A: "P'",
    beta: "P",
    tamanhoBeta: 1,
  },
  R2: {
    A: "P",
    beta: "inicio V A",
    tamanhoBeta: 3,
  },
  R3: {
    A: "V",
    beta: "varincio LV",
    tamanhoBeta: 2,
  },
  R4: {
    A: "LV",
    beta: "D LV",
    tamanhoBeta: 2,
  },
  R5: {
    A: "LV",
    beta: "varfim pt_v",
    tamanhoBeta: 2,
  },
  R6: {
    A: "D",
    beta: "TIPO L pt_v",
    tamanhoBeta: 3,
  },
  R7: {
    A: "L",
    beta: "id",
    tamanhoBeta: 1,
  },
  R8: {
    A: "TIPO",
    beta: "inteiro",
    tamanhoBeta: 1,
  },
  R9: {
    A: "TIPO",
    beta: "real",
    tamanhoBeta: 1,
  },
  R10: {
    A: "TIPO",
    beta: "literal",
    tamanhoBeta: 1,
  },
  R11: {
    A: "A",
    beta: "ES A",
    tamanhoBeta: 2,
  },
  R12: {
    A: "ES",
    beta: "leia id pt_v",
    tamanhoBeta: 3,
  },
  R13: {
    A: "ES",
    beta: "escreva ARG pt_v",
    tamanhoBeta: 3,
  },
  R14: {
    A: "ARG",
    beta: "lit",
    tamanhoBeta: 1,
  },
  R15: {
    A: "ARG",
    beta: "num",
    tamanhoBeta: 1,
  },
  R16: {
    A: "ARG",
    beta: "id",
    tamanhoBeta: 1,
  },
  R17: {
    A: "A",
    beta: "CMD A",
    tamanhoBeta: 2,
  },
  R18: {
    A: "CMD",
    beta: "id rcb LD pt_v",
    tamanhoBeta: 4,
  },
  R19: {
    A: "LD",
    beta: "OPRD opm OPRD",
    tamanhoBeta: 3,
  },
  R20: {
    A: "LD",
    beta: "OPRD",
    tamanhoBeta: 1,
  },
  R21: {
    A: "OPRD",
    beta: "id",
    tamanhoBeta: 1,
  },
  R22: {
    A: "OPRD",
    beta: "num",
    tamanhoBeta: 1,
  },
  R23: {
    A: "A",
    beta: "COND A",
    tamanhoBeta: 2,
  },
  R24: {
    A: "COND",
    beta: "CAB CP",
    tamanhoBeta: 2,
  },
  R25: {
    A: "CAB",
    beta: "se ab_p EXP_R fc_p entao",
    tamanhoBeta: 5,
  },
  R26: {
    A: "EXP_R",
    beta: "OPRD opr OPRD",
    tamanhoBeta: 3,
  },
  R27: {
    A: "CP",
    beta: "ES CP",
    tamanhoBeta: 2,
  },
  R28: {
    A: "CP",
    beta: "CMD CP",
    tamanhoBeta: 2,
  },
  R29: {
    A: "CP",
    beta: "COND CP",
    tamanhoBeta: 2,
  },
  R30: {
    A: "CP",
    beta: "fimse",
    tamanhoBeta: 1,
  },
  R31: {
    A: "A",
    beta: "R A",
    tamanhoBeta: 2,
  },
  R32: {
    A: "R",
    beta: "CABR CPR",
    tamanhoBeta: 2,
  },
  R33: {
    A: "CABR",
    beta: "repita ab_p EXP_R fc_p",
    tamanhoBeta: 4,
  },
  R34: {
    A: "CPR",
    beta: "ES CPR",
    tamanhoBeta: 2,
  },
  R35: {
    A: "CPR",
    beta: "CMD CPR",
    tamanhoBeta: 2,
  },
  R36: {
    A: "CPR",
    beta: "COND CPR",
    tamanhoBeta: 2,
  },
  R37: {
    A: "CPR",
    beta: "fimrepita",
    tamanhoBeta: 1,
  },
  R38: {
    A: "A",
    beta: "fim",
    tamanhoBeta: 1,
  },
};

const tabelaAcoes = {
  0: {
    inicio: { id: "s", acao: "S2", t: 2 },
    erro: "Espera-se inicio",
  },
  1: {
    eof: { id: "acc", acao: "Acc" },
    erro: "Espera-se eof",
  },
  2: {
    varinicio: { id: "s", acao: "S4", t: 4 },
    erro: "Espera-se varinicio",
  },
  3: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    repita: { id: "s", acao: "S17", t: 17 },
    fim: { id: "s", acao: "S10", t: 10 },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  4: {
    varfim: { id: "s", acao: "S20", t: 20 },
    inteiro: { id: "s", acao: "S22", t: 22 },
    real: { id: "s", acao: "S23", t: 23 },
    literal: { id: "s", acao: "S24", t: 24 },
    erro: "Espera-se varfim, inteiro, real ou literal",
  },
  5: {
    eof: { id: "r", acao: "R2" },
    erro: "Espera-se eof",
  },
  6: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    repita: { id: "s", acao: "S17", t: 17 },
    fim: { id: "s", acao: "S10", t: 10 },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  7: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    repita: { id: "s", acao: "S17", t: 17 },
    fim: { id: "s", acao: "S10", t: 10 },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  8: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    repita: { id: "s", acao: "S17", t: 17 },
    fim: { id: "s", acao: "S10", t: 10 },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  9: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    repita: { id: "s", acao: "S17", t: 17 },
    fim: { id: "s", acao: "S10", t: 10 },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  10: {
    eof: { id: "r", acao: "R38" },
    erro: "Espera-se eof",
  },
  11: {
    id: { id: "s", acao: "S29", t: 29 },
    erro: "Espera-se id",
  },
  12: {
    id: { id: "s", acao: "S33", t: 33 },
    lit: { id: "s", acao: "S31", t: 31 },
    num: { id: "s", acao: "S32", t: 32 },
    erro: "Espera-se id, lit ou num",
  },
  13: {
    rcb: { id: "s", acao: "S34", t: 34 },
    erro: "Espera-se rcb",
  },
  14: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimse: { id: "s", acao: "S39", t: 39 },
    erro: "Espera-se id, leia, escreva, se ou fimse",
  },
  15: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimrepita: { id: "s", acao: "S44", t: 44 },
    erro: "Espera-se id, leia, escreva, se ou fimrepita",
  },
  16: {
    ab_p: { id: "s", acao: "S45", t: 45 },
    erro: "Espera-se ab_p",
  },
  17: {
    ab_p: { id: "s", acao: "S46", t: 46 },
    erro: "Espera-se ab_p",
  },
  18: {
    id: { id: "r", acao: "R3" },
    leia: { id: "r", acao: "R3" },
    escreva: { id: "r", acao: "R3" },
    se: { id: "r", acao: "R3" },
    repita: { id: "r", acao: "R3" },
    fim: { id: "r", acao: "R3" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  19: {
    varfim: { id: "s", acao: "S20", t: 20 },
    inteiro: { id: "s", acao: "S22", t: 22 },
    real: { id: "s", acao: "S23", t: 23 },
    literal: { id: "s", acao: "S24", t: 24 },
    erro: "Espera-se varfim, inteiro, real ou literal",
  },
  20: {
    pt_v: { id: "s", acao: "S48", t: 48 },
    erro: "Espera-se pt_v",
  },
  21: {
    id: { id: "s", acao: "S50", t: 50 },
    erro: "Espera-se id",
  },
  22: {
    id: { id: "r", acao: "R8" },
    erro: "Espera-se id",
  },
  23: {
    id: { id: "r", acao: "R9" },
    erro: "Espera-se id",
  },
  24: {
    id: { id: "r", acao: "R10" },
    erro: "Espera-se id",
  },
  25: {
    eof: { id: "r", acao: "R11" },
    erro: "Espera-se eof",
  },
  26: {
    eof: { id: "r", acao: "R17" },
    erro: "Espera-se eof",
  },
  27: {
    eof: { id: "r", acao: "R23" },
    erro: "Espera-se eof",
  },
  28: {
    eof: { id: "r", acao: "R31" },
    erro: "Espera-se eof",
  },
  29: {
    pt_v: { id: "s", acao: "S51", t: 51 },
    erro: "Espera-se pt_v",
  },
  30: {
    pt_v: { id: "s", acao: "S52", t: 52 },
    erro: "Espera-se pt_v",
  },
  31: {
    pt_v: { id: "r", acao: "R14" },
    erro: "Espera-se pt_v",
  },
  32: {
    pt_v: { id: "r", acao: "R15" },
    erro: "Espera-se pt_v",
  },
  33: {
    pt_v: { id: "r", acao: "R16" },
    erro: "Espera-se pt_v",
  },
  34: {
    id: { id: "s", acao: "S55", t: 55 },
    num: { id: "s", acao: "S56", t: 56 },
    erro: "Espera-se id ou num",
  },
  35: {
    id: { id: "r", acao: "R24" },
    leia: { id: "r", acao: "R24" },
    escreva: { id: "r", acao: "R24" },
    se: { id: "r", acao: "R24" },
    fimse: { id: "r", acao: "R24" },
    repita: { id: "r", acao: "R24" },
    fimrepita: { id: "r", acao: "R24" },
    fim: { id: "r", acao: "R24" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  36: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimse: { id: "s", acao: "S39", t: 39 },
    erro: "Espera-se id, leia, escreva, se ou fimse",
  },
  37: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimse: { id: "s", acao: "S39", t: 39 },
    erro: "Espera-se id, leia, escreva, se ou fimse",
  },
  38: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimse: { id: "s", acao: "S39", t: 39 },
    erro: "Espera-se id, leia, escreva, se ou fimse",
  },
  39: {
    id: { id: "r", acao: "R30" },
    leia: { id: "r", acao: "R30" },
    escreva: { id: "r", acao: "R30" },
    se: { id: "r", acao: "R30" },
    fimse: { id: "r", acao: "R30" },
    repita: { id: "r", acao: "R30" },
    fimrepita: { id: "r", acao: "R30" },
    fim: { id: "r", acao: "R30" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  40: {
    id: { id: "r", acao: "R32" },
    leia: { id: "r", acao: "R32" },
    escreva: { id: "r", acao: "R32" },
    se: { id: "r", acao: "R32" },
    repita: { id: "r", acao: "R32" },
    fim: { id: "r", acao: "R32" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  41: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimrepita: { id: "s", acao: "S44", t: 44 },
    erro: "Espera-se id, leia, escreva, se ou fimrepita",
  },
  42: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimrepita: { id: "s", acao: "S44", t: 44 },
    erro: "Espera-se id, leia, escreva, se ou fimrepita",
  },
  43: {
    id: { id: "s", acao: "S13", t: 13 },
    leia: { id: "s", acao: "S11", t: 11 },
    escreva: { id: "s", acao: "S12", t: 12 },
    se: { id: "s", acao: "S16", t: 16 },
    fimrepita: { id: "s", acao: "S44", t: 44 },
    erro: "Espera-se id, leia, escreva, se ou fimrepita",
  },
  44: {
    id: { id: "r", acao: "R37" },
    leia: { id: "r", acao: "R37" },
    escreva: { id: "r", acao: "R37" },
    se: { id: "r", acao: "R37" },
    repita: { id: "r", acao: "R37" },
    fim: { id: "r", acao: "R37" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  45: {
    id: { id: "s", acao: "S55", t: 55 },
    num: { id: "s", acao: "S56", t: 56 },
    erro: "Espera-se id, ou num",
  },
  46: {
    id: { id: "s", acao: "S55", t: 55 },
    num: { id: "s", acao: "S56", t: 56 },
    erro: "Espera-se id, ou num",
  },
  47: {
    id: { id: "r", acao: "R4" },
    leia: { id: "r", acao: "R4" },
    escreva: { id: "r", acao: "R4" },
    se: { id: "r", acao: "R4" },
    repita: { id: "r", acao: "R4" },
    fim: { id: "r", acao: "R4" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  48: {
    id: { id: "r", acao: "R5" },
    leia: { id: "r", acao: "R5" },
    escreva: { id: "r", acao: "R5" },
    se: { id: "r", acao: "R5" },
    repita: { id: "r", acao: "R5" },
    fim: { id: "r", acao: "R5" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  49: {
    pt_v: { id: "s", acao: "S66", t: 66 },
    erro: "Espera-se pt_v",
  },
  50: {
    pt_v: { id: "r", acao: "R7" },
    erro: "Espera-se pt_v",
  },
  51: {
    id: { id: "r", acao: "R12" },
    leia: { id: "r", acao: "R12" },
    escreva: { id: "r", acao: "R12" },
    se: { id: "r", acao: "R12" },
    fimse: { id: "r", acao: "R12" },
    repita: { id: "r", acao: "R12" },
    fimrepita: { id: "r", acao: "R12" },
    fim: { id: "r", acao: "R12" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  52: {
    id: { id: "r", acao: "R13" },
    leia: { id: "r", acao: "R13" },
    escreva: { id: "r", acao: "R13" },
    se: { id: "r", acao: "R13" },
    fimse: { id: "r", acao: "R13" },
    repita: { id: "r", acao: "R13" },
    fimrepita: { id: "r", acao: "R13" },
    fim: { id: "r", acao: "R13" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  53: {
    pt_v: { id: "s", acao: "S67", t: 67 },
    erro: "Espera-se pt_v",
  },
  54: {
    pt_v: { id: "r", acao: "R20" },
    opm: { id: "s", acao: "S68", t: 68 },
    erro: "Espera-se pt_v ou opm",
  },
  55: {
    pt_v: { id: "r", acao: "R21" },
    opm: { id: "r", acao: "R21" },
    fc_p: { id: "r", acao: "R21" },
    opr: { id: "r", acao: "R21" },
    erro: "Espera-se pt_v, opm, escreva, fc_p ou opr",
  },
  56: {
    pt_v: { id: "r", acao: "R22" },
    opm: { id: "r", acao: "R22" },
    fc_p: { id: "r", acao: "R22" },
    opr: { id: "r", acao: "R22" },
    erro: "Espera-se pt_v, opm, escreva, fc_p ou opr",
  },
  57: {
    id: { id: "r", acao: "R27" },
    leia: { id: "r", acao: "R27" },
    escreva: { id: "r", acao: "R27" },
    se: { id: "r", acao: "R27" },
    fimse: { id: "r", acao: "R27" },
    repita: { id: "r", acao: "R27" },
    fimrepita: { id: "r", acao: "R27" },
    fim: { id: "r", acao: "R27" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  58: {
    id: { id: "r", acao: "R28" },
    leia: { id: "r", acao: "R28" },
    escreva: { id: "r", acao: "R28" },
    se: { id: "r", acao: "R28" },
    fimse: { id: "r", acao: "R28" },
    repita: { id: "r", acao: "R28" },
    fimrepita: { id: "r", acao: "R28" },
    fim: { id: "r", acao: "R28" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  59: {
    id: { id: "r", acao: "R29" },
    leia: { id: "r", acao: "R29" },
    escreva: { id: "r", acao: "R29" },
    se: { id: "r", acao: "R29" },
    fimse: { id: "r", acao: "R29" },
    repita: { id: "r", acao: "R29" },
    fimrepita: { id: "r", acao: "R29" },
    fim: { id: "r", acao: "R29" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  60: {
    id: { id: "r", acao: "R34" },
    leia: { id: "r", acao: "R34" },
    escreva: { id: "r", acao: "R34" },
    se: { id: "r", acao: "R34" },
    repita: { id: "r", acao: "R34" },
    fim: { id: "r", acao: "R34" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  61: {
    id: { id: "r", acao: "R35" },
    leia: { id: "r", acao: "R35" },
    escreva: { id: "r", acao: "R35" },
    se: { id: "r", acao: "R35" },
    repita: { id: "r", acao: "R35" },
    fim: { id: "r", acao: "R35" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  62: {
    id: { id: "r", acao: "R36" },
    leia: { id: "r", acao: "R36" },
    escreva: { id: "r", acao: "R36" },
    se: { id: "r", acao: "R36" },
    repita: { id: "r", acao: "R36" },
    fim: { id: "r", acao: "R36" },
    erro: "Espera-se id, leia, escreva, se, repita ou fim",
  },
  63: {
    fc_p: { id: "s", acao: "S69", t: 69 },
    erro: "Espera-se fc_p",
  },
  64: {
    opr: { id: "s", acao: "S70", t: 70 },
    erro: "Espera-se opr",
  },
  65: {
    fc_p: { id: "s", acao: "S71", t: 71 },
    erro: "Espera-se fc_p",
  },
  66: {
    varfim: { id: "r", acao: "R6" },
    inteiro: { id: "r", acao: "R6" },
    real: { id: "r", acao: "R6" },
    literal: { id: "r", acao: "R6" },
    erro: "Espera-se varfim, inteiro, real ou literal",
  },
  67: {
    id: { id: "r", acao: "R18" },
    leia: { id: "r", acao: "R18" },
    escreva: { id: "r", acao: "R18" },
    se: { id: "r", acao: "R18" },
    fimse: { id: "r", acao: "R18" },
    repita: { id: "r", acao: "R18" },
    fimrepita: { id: "r", acao: "R18" },
    fim: { id: "r", acao: "R18" },
    erro: "Espera-se id, leia, escreva, se, fimse, repita, fimrepita ou fim",
  },
  68: {
    id: { id: "s", acao: "S55", t: 55 },
    num: { id: "s", acao: "S56", t: 56 },
    erro: "Espera-se id, ou num",
  },
  69: {
    entao: { id: "s", acao: "S73", t: 73 },
    erro: "Espera-se entao",
  },
  70: {
    id: { id: "s", acao: "S55", t: 55 },
    num: { id: "s", acao: "S56", t: 56 },
    erro: "Espera-se id, ou num",
  },
  71: {
    id: { id: "r", acao: "R33" },
    leia: { id: "r", acao: "R33" },
    escreva: { id: "r", acao: "R33" },
    se: { id: "r", acao: "R33" },
    fimrepita: { id: "r", acao: "R33" },
    erro: "Espera-se id, leia, escreva, se ou fimrepita",
  },
  72: {
    pt_v: { id: "r", acao: "R19" },
    erro: "Espera-se pt_v",
  },
  73: {
    id: { id: "r", acao: "R25" },
    leia: { id: "r", acao: "R25" },
    escreva: { id: "r", acao: "R25" },
    se: { id: "r", acao: "R25" },
    fimse: { id: "r", acao: "R25" },
    erro: "Espera-se id, leia, escreva, se ou fimse",
  },
  74: {
    fc_p: { id: "r", acao: "R26" },
    erro: "Espera-se fc_p",
  },
};

const tabelaDesvios = {
  0: {
    P: 1,
  },
  2: {
    V: 3,
  },
  3: {
    A: 5,
    ES: 6,
    CMD: 7,
    COND: 8,
    CAB: 14,
    R: 9,
    CABR: 15,
  },
  4: {
    LV: 18,
    D: 19,
    TIPO: 21,
  },
  6: {
    A: 25,
    ES: 6,
    CMD: 7,
    COND: 8,
    CAB: 14,
    R: 9,
    CABR: 15,
  },
  7: {
    A: 26,
    ES: 6,
    CMD: 7,
    COND: 8,
    CAB: 14,
    R: 9,
    CABR: 15,
  },
  8: {
    A: 27,
    ES: 6,
    CMD: 7,
    COND: 8,
    CAB: 14,
    R: 9,
    CABR: 15,
  },
  9: {
    A: 28,
    ES: 6,
    CMD: 7,
    COND: 8,
    CAB: 14,
    R: 9,
    CABR: 15,
  },
  12: {
    ARG: 30,
  },
  14: {
    ES: 36,
    CMD: 37,
    COND: 38,
    CAB: 14,
    CP: 35,
  },
  15: {
    ES: 41,
    CMD: 42,
    COND: 43,
    CAB: 14,
    CPR: 40,
  },
  19: {
    LV: 47,
    D: 19,
    TIPO: 21,
  },
  21: {
    L: 49,
  },
  34: {
    LD: 53,
    OPRD: 54,
  },
  36: {
    ES: 36,
    CMD: 37,
    COND: 38,
    CAB: 14,
    CP: 57,
  },
  37: {
    ES: 36,
    CMD: 37,
    COND: 38,
    CAB: 14,
    CP: 58,
  },
  38: {
    ES: 36,
    CMD: 37,
    COND: 38,
    CAB: 14,
    CP: 59,
  },
  41: {
    ES: 41,
    CMD: 42,
    COND: 43,
    CAB: 14,
    CPR: 60,
  },
  42: {
    ES: 41,
    CMD: 42,
    COND: 43,
    CAB: 14,
    CPR: 61,
  },
  43: {
    ES: 41,
    CMD: 42,
    COND: 43,
    CAB: 14,
    CPR: 62,
  },
  45: {
    OPRD: 64,
    EXP_R: 63,
  },
  46: {
    OPRD: 64,
    EXP_R: 65,
  },
  68: {
    OPRD: 72,
  },
  70: {
    OPRD: 74,
  },
};

module.exports = {
  tabelaTransicaoEstados,
  tabelaSimbolos,
  tabelaEstadosFinais,
  tabelaErrosPorEstado,
  chavesTabelaTransicao,
  regrasGramatica,
  tabelaAcoes,
  tabelaDesvios,
};
