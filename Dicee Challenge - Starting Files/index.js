/*function dado1() {
  const randomNumber1 = Math.random()
  randomNumber1 = randomNumber1 * 6
  randomNumber1 = Math.floor(randomNumber1) + 1

  if (dado1 == 1) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice1.png')
  }
  if (dado1 == 2) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice2.png')
  }
  if (dado1 == 3) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice3.png')
  }
  if (dado1 == 4) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice4.png')
  }
  if (dado1 == 5) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice5.png')
  } else {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice6.png')
  }
  return dado1
}

function dado2() {
  const randomNumber2 = Math.random()
  randomNumber2 = randomNumber1 * 6
  randomNumber2 = Math.floor(randomNumber2) + 1
  console.log(randomNumber2)
  if (dado2 == 1) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice1.png')
  }
  if (dado2 == 2) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice2.png')
  }
  if (dado2 == 3) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice3.png')
  }
  if (dado2 == 4) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice4.png')
  }
  if (dado2 == 5) {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice5.png')
  } else {
    document.querySelector('.img2').setAttribute('src', '/Dicee Challenge - Starting Files/images/dice6.png')
  }
}

*/

var imageOne = document.querySelector('.img1')
var imageTwo = document.querySelector('.img2')
var text = document.querySelector('.text')

var button = document.querySelector('.btn')

button.addEventListener('click', game)

function game() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1)
  var randomNumber2 = Math.floor(Math.random() * 6 + 1)

  imageOne.setAttribute('src', './images/dice' + randomNumber1 + '.png')
  imageTwo.setAttribute('src', './images/dice' + randomNumber2 + '.png')

  if (randomNumber1 === randomNumber2) {
    window.alert("No winner. It's a draw.")
  } else if (randomNumber1 > randomNumber2) {
    window.alert('Player One wins!')
  } else {
    window.alert('Player Two wins!')
  }
}
