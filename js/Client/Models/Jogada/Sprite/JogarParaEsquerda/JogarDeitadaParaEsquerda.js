var JogarDeitadaParaEsquerda = function() {}

JogarDeitadaParaEsquerda.prototype.Jogar(ultimaPedra) {
  return new Posicao
  (
    ultimaPedra.sprite.spritePhaser.position.x - ultimaPedra.sprite.largura,
    ultimaPedra.sprite.spritePhaser.position.y - ultimaPedra.sprite.largura,
    Rotacao.Zero
  );
}
