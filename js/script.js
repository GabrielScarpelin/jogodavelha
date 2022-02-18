
let vezJogador = 'jogadorUm'
pontos = {
    'X': 0,
    'O': 0
}
function velha(){ //Função que verifica se deu velha
    let contador = 0;
    for (let i = 1; i <= 3; i++){
        for (let j = 1; j <= 3; j++){
            if (document.getElementById(`${i},${j}`).innerHTML != ''){
                contador++
            }
        }
    }
    if (contador == 9){
        reiniciarJogo()
    }
}

function winnerVerification(x,y){
    let elemento = document.getElementById(`${x},${y}`).innerHTML
    var contagem = 0
    if (x == 1){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${x},${i}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento]++
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }
        
    }
    else if (x == 2){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${x},${i}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }
        
    }
    else if (x == 3){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${x},${i}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento]++
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }   
    }
    contagem = 0;
    if (y == 1){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${i},${y}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }
        
    }
    else if (y == 2){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${i},${y}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }
        
    }
    else if (y == 3){
        for (let i = 1; i <= 3; i++){
            let verificacao = document.getElementById(`${i},${y}`).innerHTML
            if (verificacao == elemento){
                contagem++
            }
        }
        if (contagem == 3){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo()
        }   
    }
    if (x == 1 && y == 3){
        if ((document.getElementById(`${x},${y}`).innerHTML == document.getElementById('2,2').innerHTML && document.getElementById(`${x},${y}`).innerHTML == document.getElementById(`3,1`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
        else {
            
        }
    }
    else if (x == 1 && y == 1){
        if ((document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
    }
    else if (x == 3 && y == 1){
        if ((document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`1,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
    }
    else if (x == 3 && y == 3){
        if ((document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`1,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
    }
    else if (x == 2 && y == 2){
        if ((document.getElementById(`1,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
        else if ((document.getElementById(`1,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML) && document.getElementById(`${x},${y}`).innerHTML != ''){
            pontos[elemento] += 1
            document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
            reiniciarJogo() 
        }
    }
}
function jogar(x, y){
    if (vezJogador == 'jogadorUm'){ //Verifica de quem é a vez
        if (document.getElementById(`${x},${y}`).innerHTML === ''){ //Verifica se o local para jogar está vazio, se sim joga
            vezJogador = 'jogadorDois'
            document.getElementById(`${x},${y}`).innerHTML = 'X'
            document.getElementById('vez').innerHTML = 'Vez do: O'
            document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
            document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
            winnerVerification(x,y)
        }    
        else if (document.getElementById(`${x},${y}`).innerHTML == 'X' || document.getElementById(`${x},${y}`).innerHTML == 'O') { //Verifica se tem já jogaram lá, se sim pede para jogar novamente
            alert('Jogue em um lugar vazio')
            document.getElementById('vez').innerHTML = 'Vez do: X'
            vezJogador = 'jogadorUm'
        }
    }
    else if (vezJogador == 'jogadorDois'){
        if (document.getElementById(`${x},${y}`).innerHTML == ''){
            vezJogador = 'jogadorUm'
            document.getElementById(`${x},${y}`).innerHTML = 'O'
            document.getElementById('vez').innerHTML = 'Vez do: X'
            document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
            document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
            winnerVerification(x,y)
        }    
        else if (document.getElementById(`${x},${y}`).innerHTML == 'X' || document.getElementById(`${x},${y}`).innerHTML == 'O') {
            alert('Jogue em um lugar vazio')
            document.getElementById('vez').innerHTML = 'Vez do: O'
            vezJogador = 'jogadorDois'
        }
    }
    velha()
}

function reiniciarJogo(){ //Função do botão de reiniciar o jogo
    for (let i = 1; i <= 3; i++){ //Loop para limpar todos os quadrados
        for (let j = 1; j <= 3; j++){
            document.getElementById(`${i},${j}`).innerHTML = ''
        }
    }
    document.getElementById('vez').innerHTML = 'Vez do: X'
    document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
    document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
    vezJogador = 'jogadorUm';
}
function scoreReset(){ //Função para resetar o placar
    reiniciarJogo()
    pontos['X'] = 0;
    pontos['O'] = 0;
    document.getElementById('pontosX').innerHTML = 'X-0'
    document.getElementById('pontosO').innerHTML = 'O-0'
}
