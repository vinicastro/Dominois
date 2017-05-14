var SpriteMesa = function() {
    var self = this;
    
    this.nome = "mesa";
    
    this.posicao = {
        x: 50,
        y: 50
    };
    
    this.tamanho = {
        altura: 500,
        largura: 700
    };
    
	var CalcularPosicaoPedra = function(jogada) {
		return { x: CalcularPosicaoHorizontal(jogada), y: CalcularPosicaoVertical(jogada) }
	}
	
	var CalcularPosicaoHorizontalJogadaAtual = function(jogada) {
    
		if (jogada.rotacaoSprite == RotacaoSprite.esquerda) {
			jogada.desvioSprite.y = jogada.pedra.sprite.largura * 1.5;
			jogada.desvioSprite.x = 0;
		}
		
		if (jogada.rotacaoSprite == RotacaoSprite.direita) {
			jogada.desvioSprite.y = jogada.pedra.sprite.largura/ 2;
			jogada.desvioSprite.x = jogada.pedra.sprite.altura;
		}
    
    return jogada;

	}
	
	var VerificarLimiteMesa = function(jogada) {
		// TODO:
	}
	
	var VerificarLimiteMesaDireita = function(jogada) {
		// TODO:
	}
	
	var VerificarLimiteMesaEsquerda = function(jogada) {
		// TODO:
	}
	
	var VerificarLimiteMesaSuperior = function(jogada) {
		// TODO:
	}
	
	var VerificarLimiteMesaInferior = function(jogada) {
		// TODO: 
	}
	
	var CalcularPosicaoHorizontal = function(jogada) {
		
	}
	
	var CalcularPosicaoVertical = function(jogada) {
		
	}
	
    this.JogarPrimeiraPedra = function(jogada) {
        self.JogarPedra(jogada, { x: 330, y: 250 });
    }

    this.JogarPedraEsquerda = function(jogada) {		
		self.posicaoPedraEsquerda.x = self.posicaoPedraEsquerda.x - jogada.tamanhoHorizontal;
        self.JogarPedra(jogada, self.AplicarDesvioSprite(jogada, self.posicaoPedraEsquerda));
    }
    
    this.JogarPedraDireita = function(jogada) {
		self.posicaoPedraDireita.x = self.posicaoPedraDireita.x + jogada.tamanhoHorizontal;
        self.JogarPedra(jogada, self.AplicarDesvioSprite(jogada, self.posicaoPedraDireita));
    }
	
	this.AplicarDesvioSprite = function (jogada, posicao) {
		return { x: posicao.x + jogada.desvioSprite.x, y: posicao.y + jogada.desvioSprite.y };
	}
	
	//this.CalcularPosicaoPedra = function(jogada, posicao) {		
	//	posicao = self.AplicarDesvioSprite(jogada, posicao);
	//	return posicao;
	//}
	    
    this.JogarPedra = function(jogada, posicao) {		
        jogada.pedra.sprite.phaserSprite.position.x = posicao.x;
        jogada.pedra.sprite.phaserSprite.position.y = posicao.y;
		jogada.pedra.sprite.phaserSprite.angle = jogada.rotacaoSprite;
    }
};

