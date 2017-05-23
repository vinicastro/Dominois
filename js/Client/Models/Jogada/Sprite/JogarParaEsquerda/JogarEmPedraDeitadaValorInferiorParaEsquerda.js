var JogarDeitadaParaEsquerda = function() {}

JogarEmPedraDeitadaValorInferiorParaEsquerda.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x - ultimaPedra.sprite.largura,
    pedra.sprite.spritePhaser.position.y - (ultimaPedra.sprite.altura*0.5),
    Rotacao.Noventa
  );
}
