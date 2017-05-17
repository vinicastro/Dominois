var JogarEaquerdaOuParaBaixo = function() {

}

this.Jogar() {
 try {
  return new TentarJogarAEsquerda().Jogar();
 } catch {
  return new VirarPedraParaBaixo().Jogar();
 }
}
