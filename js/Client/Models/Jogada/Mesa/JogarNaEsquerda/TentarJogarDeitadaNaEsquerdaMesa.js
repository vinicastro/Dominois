var TentarJogarDeitadaNaEsquerda = function() {}

TentarJogarDeitadaNaEsquerda.prototype.Tentar(pedra, valorEsquerda) {
  if (!(pedra.valorSuperior == pedra.valorInferior && pedra.valorSuperior == valorEsquerda)) throw new Exception("Jogada inv√lida");
  return new TipoJogada(LadoMesa.Esquerda, LadoPedra.Deitada);
}
