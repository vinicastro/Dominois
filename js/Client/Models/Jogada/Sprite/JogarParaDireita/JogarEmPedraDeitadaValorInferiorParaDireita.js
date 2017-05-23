var JogarEmPedraDeitadaValorInferiorParaDireita = function() {}

JogarDeitadaParaDireita.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + pedra.sprite.largura,
    pedra.sprite.spritePhaser.position.y + (pedra.sprite.altura*0.5),
    Rotacao.DuzentosESetenta
  );
}
