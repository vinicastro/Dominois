var TentarJogarSuperiorNaEsquerda = function() {}

TentarJogarSuperiorNaEsquerda.prototype.Jogar(pedra, valorEsquerda) {
  if (pedra.valorSuperior != valorEsquerda) throw new Exception("Jogada Inv√lida");
  return new Jogada(LadoMesa.Esquerda, LadoPedra.Superior);
}
