let randomNumber1 = Math.floor(Math.random() * 6) + 1

    let randomDiceImagem = 'dice' + randomNumber1 + '.png'

      let randomImagemSource = 'img/' + randomDiceImagem 

          let imagem1 = document.querySelectorAll('img')[0]

              imagem1.setAttribute('src', randomImagemSource)




           let randomNumber2 = Math.floor(Math.random() * 6) + 1

        let randomImagemSource2 = 'img/dice' + randomNumber2 + '.png'

     document.querySelectorAll('img')[1].setAttribute('src', randomImagemSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou'

}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou'
    
}else{
    document.querySelector('h1').innerHTML = 'empate'
}

