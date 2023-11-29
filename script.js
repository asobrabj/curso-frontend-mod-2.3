const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclasRs = document.querySelector('.rest')
const display = document.querySelector('.display')
const ton = document.getElementById('ton')
const tcl = document.getElementById('tcl')
const tigual = document.getElementById('t=')
import { divisao, multiplicacao, soma, subtracao } from './actions.js'

let sinal = false
let decimal = false

teclasNum.forEach(elem => {
  elem.addEventListener('click', evento => {
    sinal = false
    console.log(display.innerHTML)

    if (evento.target.innerHTML == ',') {
      if (!decimal) {
        decimal = true
        if (display.innerHTML == 0) {
          display.innerHTML = '0,'
        } else {
          display.innerHTML += evento.target.innerHTML
          console.log(display.innerHTML.length)
        }
      }
    } else {
      if (display.innerHTML == 0) {
        display.innerHTML = ''
      }
      if (display.innerHTML.length < 10) {
        display.innerHTML += evento.target.innerHTML
        console.log(display.innerHTML.length)
      }
    }
  })
})

teclasOp.forEach(elem => {
  elem.addEventListener('click', evt => {
    let operatorExist = false
    const operators = ['+', '-', '*', '/']
    for (const i of display.innerHTML) {
      if (operators.includes(i)) operatorExist = true
    }
    if (!sinal) {
      sinal = true
      if (!operatorExist) {
        if (!display.innerHTML.includes(['+', '-', '*', '/'])) {
          if (display.innerHTML == 0) {
            display.innerHTML = ''
          }
          if (evt.target.innerHTML == 'x' && display.innerHTML.length < 10) {
            display.innerHTML += '*'
          } else {
            if (display.innerHTML.length < 10) {
              display.innerHTML += evt.target.innerHTML
            }
          }
        }
      }
    }
  })
})

tcl.addEventListener('click', evt => {
  sinal = false
  decimal = false
  display.innerHTML = ''
  display.innerHTML = 0
})

tigual.addEventListener('click', evt => {
  const operators = ['+', '-', '*', '/']
  let operator = ''
  let operation = []
  let result = 0
  for (const i of display.innerHTML) {
    if (operators.includes(i)) {
      operator = i
      operation = display.innerHTML.split(i)
    }
  }

  switch (operator) {
    case '+':
      result = soma(operation[0], operation[1])
      break
    case '-':
      result = subtracao(operation[0], operation[1])
      break
    case '*':
      result = multiplicacao(operation[0], operation[1])
      break
    case '/':
      result = divisao(operation[0], operation[1])
      break
  }

  sinal = false
  decimal = false
  display.innerHTML = result
})
