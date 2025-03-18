export function maiorNumero(lista) {
  let maior = lista[0];

  if (lista.length === 0 || !Array.isArray(lista)) {
    return null;
  }

  for (let i = 0; i < lista.length; i++) {
    if (maior < lista[i]) {
      maior = lista[i];
    }
  }
  return maior;
}

export function verificarParOuImpar(numero) {
  if (typeof numero === "string") {
    return null;
  }

  if (numero % 2 !== 0) {
    return "Ímpar";
  } else {
    return "Par";
  }
}

export function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";

    case 2:
      return "Segunda-feira";

    case 3:
      return "Terça-feira";

    case 4:
      return "Quarta-feira";

    case 5:
      return "Quinta-feira";

    case 6:
      return "Sexta-feira";

    case 7:
      return "Sábado";
    default:
      return "Número inválido";
  }
}

export function somarLista(lista) {
  let soma = 0;

  if (lista.length === 0) {
    return 0;
  }

  if (!Array.isArray(lista)) {
    return null;
  }

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

export function contarPalavras(string) {
  if (typeof string !== "string") {
    return null;
  }

  let palavras = string.trim().split(/\s+/);

  return palavras[0] === "" ? 0 : palavras.length;
}

export function atualizarPropriedade(objeto, propriedade, valor) {
  objeto[propriedade] = valor;
  return objeto;
}

export function listarChaves(objeto) {
  if (typeof objeto !== "object" || objeto === null) {
    return null;
  }
  return Object.keys(objeto);
}

export function saudacaoPorHora(numero) {
  if (numero < 0 || numero > 23) {
    return "Hora inválida!";
  } else if (numero >= 0 && numero <= 11) {
    return "Bom dia!";
  } else if (numero >= 12 && numero <= 17) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}