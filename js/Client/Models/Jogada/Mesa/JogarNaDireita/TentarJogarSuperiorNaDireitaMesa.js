var TentarJogarSuperiorNaDireitaMesa = function() {}

TentarJogarSuperiorNaDireitaMesa.prototype.Tentar(pedra, valorDireita) {
  if (!pedra.valorSuperior == valorDireita) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.RightSide, LadoPedra.Superior);
}
