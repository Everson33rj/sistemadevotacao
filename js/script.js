// Função que controla o preenchimento das caixas de números e as fotos dos candidatos

function numeroCandidato(a){

    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')

    let fotoPresidente = document.querySelector('.fotops')
    let fotoVicePresidente = document.querySelector('.fotoviceps')
    let nomedoCandidato = document.querySelector('.nomecandidato')
    let nomedoVice = document.querySelector('.vicepresidente')
    let partidodoCandidato = document.querySelector('.partido')

    let votoNulo = document.querySelector('.votoembranco1')

    let telaRodape = document.querySelectorAll('.telarodape p')
    let telaRodape2 = document.querySelector('.telarodape')

    let classesAtivo = document.querySelectorAll('.ativo')
    
    a = Number(a)

    if(num1.textContent == 0){

        num1.textContent = a
    
    }else if(num2.textContent == 0){

        num2.textContent = a

    }

    let candidato = num1.textContent+num2.textContent
    let b = Number(candidato)

    if(num1.textContent.length != 0 && num2.textContent.length != 0){

        if(b == 22 || b == 11){
        
            if(b == 22){
    
                fotoPresidente.innerHTML = '<img src="./img/policia.jpg" alt="Foto do Presidente">'
                fotoVicePresidente.innerHTML = '<img src="./img/outropolicial.jpg" alt="Foto do Presidente">'
                nomedoCandidato.innerHTML = '<p>Nome: Polícia</p>'
                partidodoCandidato.innerHTML = '<p>Partido: Partido Liberto</p>'
                nomedoVice.innerHTML = '<p>Vice-Presidente: Outro Polícia</p>'
    
                for(let i = 0 ; i < classesAtivo.length ; i++){
                    classesAtivo[i].classList.toggle('ativo')
                }
    
            
            }else if(b == 11){
    
                fotoPresidente.innerHTML = '<img src="./img/bandido.jpg" alt="Foto do Presidente">'
                fotoVicePresidente.innerHTML = '<img src="./img/outrobandido.jpg" alt="Foto do Presidente">'
                nomedoCandidato.innerHTML = '<p>Nome: Ladrão</p>'
                partidodoCandidato.innerHTML = '<p>Partido: Partido dos Trambiqueiros</p>'
                nomedoVice.innerHTML = '<p>Vice-Presidente: Outro Ladrão</p>'
    
                for(let i = 0 ; i < classesAtivo.length ; i++){
                    classesAtivo[i].classList.toggle('ativo')
                }
            
            }
    
        }else{
            votoNulo.innerHTML = '<div class="votoembranco3"><p>Voto Nulo</p></div>'

            for(let i = 0 ; i <= telaRodape.length ; i++){
                telaRodape[i].style = 'color: black'
                telaRodape2.style = 'border-top: 2px solid #000'
            }

        }

    }
    
        let botoesaudio = document.querySelectorAll('.btnnumeros')

            for(let i = 0 ; i < botoesaudio.length ; i++){
                let audio = new Audio('./audio/tecla1.wav')
                audio.play()
            }

}

// Função que recarrega a tela da urna ao clicar no botão  "CORRIGE"

function carregamentoTela(){
    let localTela = document.querySelector('.tela')

    fetch('../tela.html').then(response2 =>{

        return response2.text()

    }).then(response3 => {

        localTela.innerHTML = response3
    }).catch(()=>{

        alert("Algo deu muito errado!")
    })

    const audioCorrige = new Audio('./audio/tecla1.wav')
    audioCorrige.play()
                
}

carregamentoTela()

// Função que controla o acionamento do botão "BRANCO"

function btnBranco(){

    let votoEmBranco = document.querySelector('.votoembranco1')

    let telaRodape = document.querySelectorAll('.telarodape p')
    let telaRodape2 = document.querySelector('.telarodape')

    let inputNumeros1 = document.querySelector('.numero1')
    let inputNumeros2 = document.querySelector('.numero2')

    votoEmBranco.innerHTML = '<div class="votoembranco2"><p>Voto em Branco</p></div>'

    const audioBranco = new Audio('./audio/tecla1.wav')
    audioBranco.play()

    for(let i = 0 ; i <= telaRodape.length ; i++){
        telaRodape[i].style = 'color: black'
        telaRodape2.style = 'border-top: 2px solid #000'
        inputNumeros1.style = 'border: 1px solid white'
        inputNumeros2.style = 'border: 1px solid white'
    }

}

// Função que controla o botão "CONFIRMA"

function btnConfirma(){

    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')

    let votoEmBranco = document.querySelector('.votoembranco2')
    let vBranco = document.querySelector('.vbrancos2')
    let branco = parseInt(vBranco.textContent)

    let vNulo = document.querySelector('.vnulos2')
    let nulo = parseInt(vNulo.textContent)
    let votoNuloConfirma = document.querySelector('.votoembranco3')

    let totalVotosCand = document.querySelector('.totalvotos')
    let candidatoUm = document.querySelector('.candidatoumum')
    let policia = parseInt(candidatoUm.textContent)
    let candidatoDois = document.querySelector('.candidatodoisdois')
    let ladrao = parseInt(candidatoDois.textContent)
    
    let porcentagemLadrao = document.querySelector('.por2').textContent
    let porcentagemLadrao2 = porcentagemLadrao = porcentagemLadrao.replace(',','.') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.

    let porcentagemPolicia = document.querySelector('.por1').textContent
    let porcentagemPolicia2 = porcentagemPolicia = porcentagemPolicia.replace(',','.') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.

    let candidato = num1.textContent + num2.textContent
    let numCandidato = parseInt(candidato)

    p1 = parseInt(candidatoUm.textContent)
    p2 = parseInt(candidatoDois.textContent)

    // Parte do código que controla a distribuição dos votos

    if(numCandidato == 22){
    
        candidatoUm.textContent = policia+1

    }else if(numCandidato == 11){

        candidatoDois.textContent = ladrao+1

    }else{

        if(votoEmBranco != undefined){

            vBranco.textContent = branco+1

        }else if(votoNuloConfirma != undefined){

            vNulo.textContent = nulo+1

        }

    }


    const audioConfirma = new Audio('./audio/confirma.wav')
    audioConfirma.play()

    carregamentoTela()
    percentagem()
    aninacaoImg()

}

//Função que controla a dimensão das imagens quando os cadidatos estão na frente com referência à porcentagem

function aninacaoImg(){

    let porcentagemTopo = document.querySelector('.porcentagemtopo')

    let porCorPol = document.querySelector('.porcent1')
    let porCorLad = document.querySelector('.porcent2') 
        
    let porcentagemLad = document.querySelector('.por2').textContent
    let porcentagemLadrao = porcentagemLad.replace(',','.') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.
    
    let porcentagemPol = document.querySelector('.por1').textContent
    let porcentagemPolicia = porcentagemPol.replace(',','.') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.


        if(porcentagemPolicia > 50){

            porCorPol.style = 'color: yellow'
            
        }else{
            
            porCorPol.style = 'color: rgb(255, 255, 255)'
            
        }
        
        if(porcentagemLadrao > 50){
             
            porCorLad.style = 'color: yellow'      
            
        }else{

            porCorLad.style = 'color: rgb(255, 255, 255)'

        }

}

//Função que controla o cálculo das porcentagens

function percentagem() {

    let percent1 = document.querySelector('.por1')
    let percent2 = document.querySelector('.por2')
    let totalVotosValidos = document.querySelector('.totalvotos')

    let candidatoUm = document.querySelector('.candidatoumum')
    let candidatoDois = document.querySelector('.candidatodoisdois')

    let p1 = parseInt(candidatoUm.textContent)
    let p2 = parseInt(candidatoDois.textContent)

    let pp1 = (p1/(p1+p2))*100
    let pp2 = (p2/(p1+p2))*100
    
    totalVotosValidos.textContent = p1+p2

    if(totalVotosValidos.textContent%1 == 0){
        
        percent1.textContent = parseFloat(pp1.toFixed(2))
        percent2.textContent = parseFloat(pp2.toFixed(2))

        if(percent1.textContent.length == 4){

            percent1.textContent = `${percent1.textContent}0`           

        }else if(percent1.textContent.length == 2){

            percent1.textContent = `${percent1.textContent}.00`

        }else{

        }        
        
        if(percent2.textContent.length == 4){

            percent2.textContent = `${percent2.textContent}0`

        }else if(percent2.textContent.length == 2){

            percent2.textContent = `${percent2.textContent}.00`            

        }else{

        }        

    }else{

    }

    percent1.textContent = percent1.textContent.replace('.',',')
    percent2.textContent = percent2.textContent.replace('.',',')

}


//Função que aplica os votos automaticamente

/*function quantidadeDeVotos(){

    let quantvotos = document.querySelector('.quantvotos')
    let play = document.querySelector('.quantvotosbtn')
    let pause = document.querySelector('.pausevotos')
    let bonequinhoBarra = document.querySelector('.bonequinho')
    let porcentagemBarra = document.querySelector('.porcentagembarra')
    
    

    pause.innerHTML = '<img src="./img/btnpause.png" alt="">'
    play.innerHTML = '<img src="./img/btnplay2.png" alt="">'
    
    
    var intervalo = setInterval(() => {
        
        let barraProgresso = document.querySelector('.barra2')    
        let totalVotosCand = document.querySelector('.totalvotos')
        let porcentagemLadrao = document.querySelector('.por2').textContent
        let porcentagemLadrao2 = porcentagemLadrao = porcentagemLadrao.replace(',','') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.

        let porcentagemPolicia = document.querySelector('.por1').textContent
        let porcentagemPolicia2 = porcentagemPolicia = porcentagemPolicia.replace(',','') //Código para formatação com pontos, para não entrar em conflito com as condições aplicadas abaixo.

        let limiteVotos = 18552
        
        let num1 = document.querySelector('.numero1')
        let num2 = document.querySelector('.numero2')
        
        if(totalVotosCand.textContent%1 == 0){
            
            num1.textContent = 2
            num2.textContent = 2
            
            btnConfirma()
            let bar = (totalVotosCand.textContent/limiteVotos)*100

            porcentagemBarra.textContent = `${parseInt(bar)}%`

            if(porcentagemPolicia2 > porcentagemLadrao2){
                                
                barraProgresso.style = `width: ${bar}%; background-color: #00c44f;`
                    
            }else{

                barraProgresso.style = `width: ${bar}%; background-color: #ff4a4a;`

            }
            

            
            if(bar == 100){
                
                bonequinhoBarra.innerHTML = '<img src="./img/running.png" alt="">'
                quantvotos.innerHTML = '<div class="quantvotosbtn"><img src="./img/btnplay.png" alt=""></div><div class="pausevotos" onclick="pauseVotos()"><img src="./img/btnpause.png" alt=""></div><div type="button" value="Reset" class="resetbtn" onclick="resetGeral()"><img src="./img/btnstop.png" alt=""></div>'

            }
            
        }      

        if(totalVotosCand.textContent == limiteVotos){
            
            clearInterval(intervalo)
            
        }
        
        pause.addEventListener('click', ()=>{
            
            clearInterval(intervalo)
            pause.innerHTML = '<img src="./img/btnpause2.png" alt="">'
            play.innerHTML = '<img src="./img/btnplay.png" alt="">'
            
        })

    },);

    
}


function resetGeral(){

    location.reload()
}*/