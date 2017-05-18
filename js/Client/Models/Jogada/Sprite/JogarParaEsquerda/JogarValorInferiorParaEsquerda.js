var JogarValorInferiorParaEsquerda = function() {}

JogarValorInferiorParaEsquerda.prototype.Jogar(pedra) {
 return new JogadaSprite
 (
    pedra.sprite.phaserSprite.position.x - pedra.sprite.largura,
    pedra.sprite.phaserSprite.position.y + pedra.sprite.altura,
    RotacaoSprite.DuzentosESetenta
 );
}
