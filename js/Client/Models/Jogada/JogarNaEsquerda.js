var TentarJogarNaEsquerda = function(pedra, mesa) {
  this.pedra = pedra;
  this.mesa = mesa;
}

TentarJogarNaEsquerda.prototype.Jogar() {
  return this.TentarNaoGirar();
}

TentarJogarNaEsquerda.protype.TentarNaoGirar() {
  try {
    return new TentarDeitar().Jogar();
  } catch {
    return this.TentarValorInferior().Jogar();
  }
}

TentarJogarNaEsquerda.TentarValorInferior() {
  try {
    return new TentarValorInferior().Jogar()
  } catch {
    return this.TentarValorSuperior();
  }
}

TentarValorSuperior() {
  try {
    return new TentarValorSuperior().Jogar();
  } catch {
    throw new Exception("Jogada inv√lida");
  }
}
