var altura = 0
var largura = 0
var vidas = 1
var tempo = 15;

function ajustaPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaPalco()

var VjCronometro = setInterval(function(){
	tempo --
	if(tempo < 0){
		clearInterval(VjCronometro);
		clearInterval(criarMosquito);
		window.location.href = "vitoria.html"
		
	}
	else{
		document.getElementById('meuCronometro').innerHTML = tempo;

	}
}, 1000);

function posRandomica(){

    if(document.getElementById('tempoMosquito')){
		document.getElementById('tempoMosquito').remove()

		if(vidas > 3){
			window.location.href = "FinalJogo.html"
		} else {
			document.getElementById('v' + vidas).src="img/coracao_vazio.png"
    		vidas++
		}
	}

	var posx = Math.floor(Math.random()*largura)-90
	var posy = Math.floor(Math.random()*altura)-90

	posx = posx < 0?0:posx
	posy = posy < 0?0:posy

	console.log(posx,posy)

	var mosquito = document.createElement('img')
	mosquito.src = 'img/mosca.png'
	document.body.appendChild(mosquito)
	mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio()
	mosquito.style.left = posx + 'px'
	mosquito.style.top = posy + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'tempoMosquito'
	console.log(ladoAleatorio())

	mosquito.onclick=function(){
    	this.remove()
	}

}

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0: 
            return 'mosq01'
        case 1: 
            return 'mosq02'
        case 2: 
            return 'mosq03'
    }
}

function ladoAleatorio(){
    var invert = Math.floor(Math.random() * 2)

    switch(invert){
        case 0: 
            return 'ladoA'
        case 1: 
            return 'ladoB'
    }
}