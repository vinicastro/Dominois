var JogarValorInferiorParaCima = function() {}

JogarValorInferiorParaCima.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.y - (pedra.sprite.altura),
    Rotacao.CentoEOitenta
  );
}
