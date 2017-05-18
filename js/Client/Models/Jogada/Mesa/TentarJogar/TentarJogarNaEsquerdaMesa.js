var TentarJogarNaEsquerdaMesa = function() {}

TentarJogarNaEsquerdaMesa.prototype.Jogar(pedra, valorEsquerda) {
  return this.TentarJogarDeitada(pedra, valorEsquerda);
}

TentarJogarNaEsquerdaMesa.prototype.JogarDeitada(pedra, valorEsquerda) {
    try {
        return new TentarJogarDeitadaNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch {
        this.TentarJogarSuperior(pedra, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.JogarSuperior(pedra, valorEsquerda) {
    try {
        return new TentarJogarSuperiorNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch {
        this.TentarJogarInferior(pedra, valorEsquerda);
    }
}

TentarJogarNaEsquerdaMesa.prototype.JogarInferior(pedra, valorEsquerda) {
    try {
        return new TentarJogarInferiorNaEsquerdaMesa().Jogar(pedra, valorEsquerda);
    } catch {
        throw new Exception("Jogada inválida");
    }
}
