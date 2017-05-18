var TentarJogarDeitadaNaDireitaMesa = function() {}

TentarJogarDeitadaNaDireitaMesa.prototype.Tentar(pedra, valorDireita) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorDireita)) throw new Exception("Jogada inválida");
  return new JogadaMesa(MoveType.RightSide, LadoPedra.Deitada);
}
