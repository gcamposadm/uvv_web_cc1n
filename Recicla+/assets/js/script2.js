var imagens = document.querySelector(".tela img")
var leftbutton = document.querySelector("#esq")
var rightbutton = document.querySelector("#dir")
var desc = document.querySelector(".desc")
var navigation = document.querySelectorAll(".pontos span")
var currentimage = 0

leftbutton.addEventListener("click", ()=>{
    currentimage--

    if (currentimage < 0) {
        currentimage = navigation.length-1
    }
    switch (currentimage) {
        case 0:
            imagens.src="./assets/img/correto1.jpg"
            desc.querySelector("h1").textContent="Sacos Plásticos!"
            desc.querySelector("p").textContent="Utilize sacos de plástico para cada um dos materiais recicláveis: vidro, plástico, metal e papel."
            break;
        case 1:
            imagens.src="./assets/img/correto2.jpg"
            desc.querySelector("h1").textContent="Papéis!"
            desc.querySelector("p").textContent="Evite amassar e rasgar os papéis que seguirão para reciclagem."
            break;
        case 2:
            imagens.src="./assets/img/correto3.jpg"
            desc.querySelector("h1").textContent="Esvaziar embalagens!"
            desc.querySelector("p").textContent="Esvazie todas as embalagens a serem descartadas."
            break;
        case 3:
            imagens.src="./assets/img/correto4.jpg"
            desc.querySelector("h1").textContent="Sujeira!"
            desc.querySelector("p").textContent="Remova o excesso de sujeira do material."
            break;
        case 4:
            imagens.src="./assets/img/correto5.jpg"
            desc.querySelector("h1").textContent="Reduza o volume!"
            desc.querySelector("p").textContent="Reduza o volume do material a ser descartado."
            break;
        case 5:
             imagens.src="./assets/img/errado1.jpg"
             desc.querySelector("h1").textContent="Não misture o lixo!"
             desc.querySelector("p").textContent="Não misture lixo seco (reciclável) com lixo úmido (orgânico e comum)."
             break;
        case 6:
             imagens.src="./assets/img/errado2.jpg"
             desc.querySelector("h1").textContent="Não jogue lixo molhado!"
             desc.querySelector("p").textContent="Não faça o descarte de embalagens contendo líquidos."
             break;
        case 7:
          imagens.src="./assets/img/errado3.jpg"
             desc.querySelector("h1").textContent="Não trabalhamos com lixos especiais!"
             desc.querySelector("p").textContent="Não trabalhamos com o descarte de lixo especial, como óleo de cozinha, latas de aerossol, eletrônicos, baterias, pilhas, fios, lâmpadas e eletrodomésticos."
             break;
        case 8:
             imagens.src="./assets/img/errado4.jpg"
             desc.querySelector("h1").textContent="Não jogue lixo que não trabalhamos!"
             desc.querySelector("p").textContent="Não faça descarte de materiais distintos daqueles informados na solicitação de coleta."
             break;
        case 9:
             imagens.src="./assets/img/errado5.jpg"
             desc.querySelector("h1").textContent="Não use materiais pontiagudos!"
             desc.querySelector("p").textContent="Não deixe materiais com pontas ou partes cortantes que possam machucar o catador"
             break;
    }

    if (currentimage == 0) {
        navigation[0].classList.add('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 1) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.add('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 2) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.add('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 3) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.add('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 4) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.add('ligado')
    }
})

rightbutton.addEventListener("click", ()=>{
    currentimage++

    if (currentimage >= navigation.length) {
        currentimage = 0
    }
    switch (currentimage) {
        case 0:
            imagens.src="./assets/img/correto1.jpg"
            desc.querySelector("h1").textContent="Sacos Plásticos!"
            desc.querySelector("p").textContent="Utilize sacos de plástico para cada um dos materiais recicláveis: vidro, plástico, metal e papel."
            break;
        case 1:
            imagens.src="./assets/img/correto2.jpg"
            desc.querySelector("h1").textContent="Papéis!"
            desc.querySelector("p").textContent="Evite amassar e rasgar os papéis que seguirão para reciclagem."
            break;
        case 2:
            imagens.src="./assets/img/correto3.jpg"
            desc.querySelector("h1").textContent="Esvaziar embalagens!"
            desc.querySelector("p").textContent="Esvazie todas as embalagens a serem descartadas."
            break;
        case 3:
            imagens.src="./assets/img/correto4.jpg"
            desc.querySelector("h1").textContent="Sujeira!"
            desc.querySelector("p").textContent="Remova o excesso de sujeira do material."
            break;
        case 4:
            imagens.src="./assets/img/correto5.jpg"
            desc.querySelector("h1").textContent="Reduza o volume!"
            desc.querySelector("p").textContent="Reduza o volume do material a ser descartado."
            break;
        case 5:
             imagens.src="./assets/img/errado1.jpg"
             desc.querySelector("h1").textContent="Não misture o lixo!"
             desc.querySelector("p").textContent="Não misture lixo seco (reciclável) com lixo úmido (orgânico e comum)."
             break;
        case 6:
             imagens.src="./assets/img/errado2.jpg"
             desc.querySelector("h1").textContent="Não jogue lixo molhado!"
             desc.querySelector("p").textContent="Não faça o descarte de embalagens contendo líquidos."
             break;
        case 7:
          imagens.src="./assets/img/errado3.jpg"
             desc.querySelector("h1").textContent="Não trabalhamos com lixos especiais!"
             desc.querySelector("p").textContent="Não trabalhamos com o descarte de lixo especial, como óleo de cozinha, latas de aerossol, eletrônicos, baterias, pilhas, fios, lâmpadas e eletrodomésticos."
             break;
        case 8:
             imagens.src="./assets/img/errado4.jpg"
             desc.querySelector("h1").textContent="Não jogue lixo que não trabalhamos!"
             desc.querySelector("p").textContent="Não faça descarte de materiais distintos daqueles informados na solicitação de coleta."
             break;
        case 9:
             imagens.src="./assets/img/errado5.jpg"
             desc.querySelector("h1").textContent="Não use materiais pontiagudos!"
             desc.querySelector("p").textContent="Não deixe materiais com pontas ou partes cortantes que possam machucar o catador"
             break;
    }

    if (currentimage == 0) {
        navigation[0].classList.add('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 1) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.add('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 2) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.add('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 3) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.add('ligado')
        navigation[4].classList.remove('ligado')
    }
    if (currentimage == 4) {
        navigation[0].classList.remove('ligado')
        navigation[1].classList.remove('ligado')
        navigation[2].classList.remove('ligado')
        navigation[3].classList.remove('ligado')
        navigation[4].classList.add('ligado')
    }
})

