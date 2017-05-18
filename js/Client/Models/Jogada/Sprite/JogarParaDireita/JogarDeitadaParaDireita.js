var JogarDeitadaParaDireita = function() {}

JogarDeitadaParaDireita.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + pedra.sprite.altura,
    pedra.sprite.spritePhaser.position.y - pedra.sprite.largura,
    Rotacao.NaoRotacionar
  );
}
