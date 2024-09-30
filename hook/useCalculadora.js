import { useState } from 'react';

const initialState = {
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false,
};

export const useCalculadora = () => {
  const [state, setState] = useState(initialState);

  const addDigito = (d) => {
    let { valorTela, resultado, ponto, operado } = state;

    if (['+', '-', '/', '*'].includes(d)) {
      ponto = false;
    }

    if (d === '.' && !ponto) {
      ponto = true;
      operado = false;
    } else if (d === '.' && ponto) {
      return;
    }

    if (['+', '-', '/', '*'].includes(d) && operado) {
      valorTela = resultado.toString();
      resultado = 0;
    }

    valorTela += d;
    setState({ ...state, valorTela, resultado, operado: false, ponto });
  };

  const limparTela = () => setState(initialState);

  const opera = (d) => {
    let { valorTela } = state;

    if (d === 'AC') {
      limparTela();
      return;
    }

    if (d === 'BS') {
      valorTela = valorTela.slice(0, -1);
      setState({ ...state, valorTela });
      return;
    }

    try {
      const resultado = eval(valorTela);
      setState({ ...state, resultado, operado: true });
    } catch {
      setState({ ...state, resultado: 'Operação Inválida', operado: true });
    }
  };

  return { state, addDigito, limparTela, opera };
};
