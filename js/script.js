var jogadorUmX = [0, 0, 0, 0, 0];
var jogadorUmY = [0, 0, 0, 0, 0];
var jogadorDoisX = [0, 0, 0, 0, 0];
var jogadorDoisY = [0, 0, 0, 0, 0];
var pontos = {
    'X':0,
    'O':0
}
var vez = 'jogadorUm'
function jogar(x, y){
    function winnerVerification(){
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
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo()
            }
            
        }
        if (x == 2){
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
        if (x == 3){
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
        if (y == 2){
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
        if (y == 3){
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
            if (document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
        }
        else if (x == 1 && y == 1){
            if (document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
        }
        else if (x == 3 && y == 1){
            if (document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`1,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
        }
        else if (x == 3 && y == 3){
            if (document.getElementById(`2,2`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`1,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
        }
        else if (x == 2 && y == 2){
            if (document.getElementById(`1,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
            else if (document.getElementById(`1,1`).innerHTML == document.getElementById(`${x},${y}`).innerHTML && document.getElementById(`3,3`).innerHTML == document.getElementById(`${x},${y}`).innerHTML){
                pontos[elemento] += 1
                document.getElementById(`pontos${elemento}`).innerHTML = `${elemento}-${pontos[elemento]}`
                reiniciarJogo() 
            }
        }
    }
    if (vez == 'jogadorUm'){
        if (document.getElementById(`${x},${y}`).innerHTML == ''){
            for (let i = 0; i < jogadorUmX.length; i++){
                if (jogadorUmX[i] == 0){
                    jogadorUmX[i] = x;
                    jogadorUmY[i] = y;
                    vez = 'jogadorDois'
                    document.getElementById(`${x},${y}`).innerHTML = 'X'
                    document.getElementById('vez').innerHTML = 'Vez do: O'
                    document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
                    document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
                    winnerVerification()
                    break;
                }    
            }
        }
        else if (document.getElementById(`${x},${y}`).innerHTML == 'X' || document.getElementById(`${x},${y}`).innerHTML == 'O') {
            alert('Jogue em um lugar vazio')
            document.getElementById('vez').innerHTML = 'Vez do: X'
            vez = 'jogadorUm'
        }
        
        
    }
    else if (vez == 'jogadorDois'){
        if (document.getElementById(`${x},${y}`).innerHTML == ''){
            for (let i = 0; i < jogadorDoisX.length; i++){
                if (jogadorDoisX[i] == 0){
                    jogadorDoisX[i] = x;
                    jogadorDoisY[i] = y;
                    vez = 'jogadorUm'
                    document.getElementById(`${x},${y}`).innerHTML = 'O'
                    document.getElementById('vez').innerHTML = 'Vez do: X'
                    document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
                    document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
                    winnerVerification()
                    break;
                }    
            }
        }
        else if (document.getElementById(`${x},${y}`).innerHTML == 'X' || document.getElementById(`${x},${y}`).innerHTML == 'O') {
            alert('Jogue em um lugar vazio')
            document.getElementById('vez').innerHTML = 'Vez do: O'
            vez = 'jogadorDois'
        }
    }
}
function reiniciarJogo(){
    for (let i = 1; i <= 3; i++){
        for (let j = 1; j <= 3; j++){
            document.getElementById(`${i},${j}`).innerHTML = ''
        }
    }
    jogadorUmX = [0, 0, 0, 0, 0];
    jogadorUmY = [0, 0, 0, 0, 0];
    jogadorDoisX = [0, 0, 0, 0, 0];
    jogadorDoisY = [0, 0, 0, 0, 0];
    document.getElementById('vez').innerHTML = 'Vez do: X'
    document.getElementById('templateX').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 1);'
    document.getElementById('templateO').style.cssText = 'border-bottom: 2px solid rgba(21, 0, 80, 0);'
    vez = 'jogadorUm';
}
