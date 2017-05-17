var VirarParaBaixo = function() {

}

VirarParaBaixo.prototype.Jogar() {
 if (valorSuperior) return new VirarParaBaixoSemGirar().Jogar();
 if (valorInferior) return new VirarParaBaixoGirando().Jogar();
}
