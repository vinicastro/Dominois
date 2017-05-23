var JogarDeitadaParaCima = function() {}

JogarDeitadaParaCima.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + (pedra.sprite.largura*1.5),
    pedra.sprite.spritePhaser.position.y - (pedra.sprite.altura),
    Rotacao.Noventa
  );
}
