// Require SpriteMesa
// Require Jogada
// Require MontarJogada/*

var Mesa = function() {
	var self = this;
	
    this.sprite = new SpriteMesa();
	
	this.valorPonta = {
		esquerda: null,
		direita: null
	}

    this.pedras = {
        esquerda: [],
        direita: [],
    }	
}

Mesa.prototype.VerificarMovimentosPossiveisParaPedra = function(pedra) {
    
    var movimentosPossiveis = [];
 
    if (this.pedrasJogadas.length == 0) {
        movimentosPossiveis.push(MoveType.FirstDomino);
        return movimentosPossiveis;
    }
    
    if ((pedra.valorSuperior == this.valorEsquerda) ||
        (pedra.valorInferior == this.valorEsquerda)) {
            movimentosPossiveis.push(MoveType.LeftSide);
    }
    
    if ((pedra.valorSuperior == this.valorDireita) ||
        (pedra.valorInferior == this.valorDireita)) {
            movimentosPossiveis.push(MoveType.RightSide);
    }
    
    if (movimentosPossiveis.length == 0) {
        movimentosPossiveis.push(MoveType.NoMove);
    }

    return movimentosPossiveis;
}

Mesa.prototype.JogarPedra = function(pedra, moveType) {
    if (moveType.FirstDomino) {

    }

    var jogadaMesa = new TentarJogarMesa().Jogar(pedra, this, moveType);
    var jogadaSprite = null;

    // TODO: Montar jogadas sprite e chamar
}


Mesa.prototype.Jogar = function(pedra, jogadaMesa) {		
	// TODO: Lógica para mesa
}

Mesa.prototype.JogarPrimeiraPedra = function(pedra) {
	// TODO: Lógica para primeira pedra
}

