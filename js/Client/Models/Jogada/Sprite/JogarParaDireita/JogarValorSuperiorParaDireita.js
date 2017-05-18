var JogarValorSuperiorParaDireita = function() {}

JogarValorSuperiorParaDireita.prototype.Jogar(pedra) {
 return new JogadaSprite
  (
    pedra.sprite.spritePhaser.position.x + pedra.sprite.altura,
    pedra.sprite.speitePhaser.position.y + pedra.sprite.largura,
    RotacaoSprite.DuzentosESetenta
  );
}
