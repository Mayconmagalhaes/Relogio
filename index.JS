//função carregar que chamada no html
function carregar () {
    var text = document.getElementById("text") //carrega o ID do html (texto nesse caso) para a modificação realizada segundo o codico
  
    var img = document.getElementById("Photography") //carrega o ID do html (Imagem nesse caso) para a modificação realizada segundo o codico
  
    var msg = document.getElementById("Msg")  //carrega o ID do html (texto nesse caso) para a modificação realizada segundo o codico
  
    var data = new Date()  //carrega o dia definido na maquina do usuario
  
    var hora = data.getHours() //carrega a hora definido na maquina do usuario
  
    text.innerHTML = `Agora são ${hora} horas.` //Apaga e rescreve o texto do resultado de acordo com a definição dos If(s)
  
    if (hora >= 0 && hora < 12) { //se a hora for entre 00 & 12 mudará a cor do fundo, caaregara uma imagem e uma menssagem de acordo com o horario
      //Bom Dia! ☀️
      img.src ="./assets/dia.png"
  
      document.body.style.background = "#FBF3B5" // Muda a cor do fundo 
  
      msg.innerHTML = `Bom Dia! ☀️` // carega uma menssagem
  
    } else if (hora >= 12 && hora <= 18) {  //se a hora for entre 12 & 18 mudará a cor do fundo, caaregara uma imagem e uma menssagem de acordo com o horario
      //Boa Tarde! 🌲
      img.src = "./assets/tarde.png"  // carega uma imagem
  
      document.body.style.background = "#F2673C"  // Muda a cor do fundo
  
      msg.innerHTML = `Boa Tarde! 🌲`  // carega uma menssagem
  
    } else {  //se a hora for entre 18 & 00 mudará a cor do fundo, caaregara uma imagem e uma menssagem de acordo com o horario
      hora >= 18 && hora < 0
      //Boa Noite!  🌙
      img.src = "./assets/noite.png" // carega uma imagem
  
      document.body.style.background = "#1B3160"  // Muda a cor do fundo
  
      msg.innerHTML = `Boa Noite!  🌙` // carega uma menssagem
    }
  }