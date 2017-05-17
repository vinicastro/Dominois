vim TentarJogarEsquerda = function() {

}

this.TentarJogarEsquerda {
  var pos = new JogarEsquerda.Jogar();
  if (pos.x < limiteMesaX) throw new Exception("Pos invalida");
  return pos;
}
