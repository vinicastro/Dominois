var JogarValorSuperiorParaBaixo = function() {}

JogarValorSuperiorParaBaixo.prototype.Jogar(pedra) {
  return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.y + (pedra.sprite.altura),
    Rotacao.NaoRotacionar
  );
}
