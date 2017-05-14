var MetodoMesa = function(jogada) {
    
	if (jogada.moveType == MoveType.FirstDomino) {
        jogada.MetodoMesa = jogada.mesa.sprite.JogarPrimeiraPedra;
        return jogada;
    }
    
    if (jogada.moveType == MoveType.LeftSide) {
        jogada.MetodoMesa = jogada.mesa.sprite.JogarPedraEsquerda;
        return jogada;
    }
    
    if (jogada.moveType == MoveType.RightSide) {
        jogada.MetodoMesa = jogada.mesa.sprite.JogarPedraDireita;
        return jogada;
    }
	
    return jogada;
}