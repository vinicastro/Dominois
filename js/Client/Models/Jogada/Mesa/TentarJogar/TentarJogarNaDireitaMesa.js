var TentarJogarNaDireitaMesa = function() {}

TentarJogarNaDireitaMesa.prototype.Jogar(pedra, valorDireita) {
  return this.TentarJogarDeitada(pedra, valorDireita);
}

TentarJogarNaDireitaMesa.prototype.JogarDeitada(pedra, valorDireita) {
    try {
        return new TentarJogarDeitadaNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch {
        this.TentarJogarSuperior(pedra, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.JogarSuperior(pedra, valorDireita) {
    try {
        return new TentarJogarSuperiorNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch {
        this.TentarJogarInferior(pedra, valorDireita);
    }
}

TentarJogarNaDireitaMesa.prototype.JogarInferior(pedra, valorDireita) {
    try {
        return new TentarJogarInferiorNaDireitaMesa().Jogar(pedra, valorDireita);
    } catch {
        throw new Exception("Jogada inválida");
    }
}
