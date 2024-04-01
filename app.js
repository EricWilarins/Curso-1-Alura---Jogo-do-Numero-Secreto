alert('Bem vindo ao game de adivinhação!'); // alert = mensagem '' string, sem '' inteiro, true/false - booleano, indefinida (ex: var nome).

let numeroMaximo = 10
let NumeroSecreto = parseInt(Math.random ()* numeroMaximo + 1); // parseInt = parte inteira; Math.random () = número aleatório entre 0 e 1; *100 + 1= multiplicado por 100 '3digitos' + 1 ou seja não pode ser 0
console.log(`Valor do número secreto: ${NumeroSecreto}`)
let chute;
console.log('Valor do chute: ', chute);
console.log('Resultado da comparação:', chute == NumeroSecreto);

let tentativas = 1;

//while = enquanto o chute não for igual ao número secreto

while(chute != NumeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}...`);

    if (NumeroSecreto == chute) {
       break;
    }
    else {
        if (NumeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}, tente novamente!`)
        }
        else {
            alert(`O número secreto é menor que ${chute}, tente novamente!`)
        }  
        //tentativas++;
         tentativas = tentativas + 1;
    }
}
    /*if (tentativas > 1) {
        alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}. Você acertou com ${tentativas} tentativas!`) // Template String = ${variável}
    }
    else {
        alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}. Você acertou com ${tentativas} tentativa!`)
    }*/

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'  //operador ternário - ? (pergunta) : (senão)

    alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}. Você acertou com ${tentativas} ${palavraTentativa}!`)

    console.log(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}!`);



/*if (NumeroSecreto == chute) {
    alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}!`)  // Template String = ${variável}
    console.log(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}!`)
}

else {
    alert('Você errou, tente novamente (aperte F5)')
    console.log('Valor do número secreto:', NumeroSecreto)
}*/

/*if (NumeroSecreto == chute) {
    alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto }!`)  // Template String = ${variável}
    console.log(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto }!`)
}

else {
    alert('O número secreto era ' +NumeroSecreto+ ' e você escolheu ' +chute)
}*/

/*if (NumeroSecreto == chute) {
    alert(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}!`)  // Template String = ${variável}
    console.log(`Parabéns, você acertou! O número secreto é o ${NumeroSecreto}!`)
}

else {
    if (NumeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}, tente novamente!`)
    }
    if (NumeroSecreto < chute) {
        alert(`O número secreto é menor que ${chute}, tente novamente!`)
    }*/

// ou 

 
