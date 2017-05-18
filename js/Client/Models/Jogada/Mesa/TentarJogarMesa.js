var TentarJogar = function() {}

TentarJogar.prototype.Jogar(pedra, mesa, moveType) {
    if (moveType.LeftSide) return new TentarJogarNaEsquerda(pedra, mesa.valorPonta.esquerda);
    if (moveType.RightSide) return new TentarJogarNaDireita(pedra, mesa.valorPonta.direita);
}
