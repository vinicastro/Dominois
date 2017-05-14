// Require SpriteMesa
// Require Jogada
// Require MontarJogada/*

var Mesa = function() {
	var self = this;
	
    this.sprite = new SpriteMesa();
    this.ultimaJogada = null;
	
	this.valorPonta = {
		esquerda: null,
		direita: null
	}
	
	this.AtualizarValorPonta = function(jogada) {		
		if (jogada.valorEsquerdaMesa != null) {
			self.valorPonta.esquerda = jogada.valorEsquerdaMesa;
		}
        if (jogada.valorDireitaMesa != null) {
			self.valorPonta.direita = jogada.valorDireitaMesa;
		}
	}
	
	this.JogarPrimeiraPedra = function(jogada) {
		self.pedras.esquerda.push(jogada.pedra);
		self.pedras.direita.push(jogada.pedra);
	}

	this.JogarPedraEsquerda = function(jogada) {		
		self.pedras.esquerda.push(jogada.pedra);
	}

	this.JogarPedraDireita = function(jogada) {
		self.pedras.direita.push(jogada.pedra);
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
    var baseJogada = {pedra: pedra, moveType: moveType, mesa: this, jogadaAnterior: this.ultimaJogada };
    var jogada = new Jogada(MetodoSpriteMesa(MetodoMesa(RotacaoPedra(ValoresMesa(baseJogada)))));
    
    jogada.EfetuarJogada();
	this.ultimaJogada = jogada;
}