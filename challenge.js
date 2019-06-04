window.setInterval(increment, 1000)

const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const submitButton = document.getElementById('comment-form')[1]
let i = 0
const l = {}

plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', love)
pause.addEventListener('click', pauseGame)
submitButton.addEventListener('click', stopReload)
submitButton.addEventListener('click', addComment)

function pauseGame() {
    i ++
    if (i % 2 == 0) {
        plus.addEventListener('click', increment)
        minus.addEventListener('click', decrement)
        heart.addEventListener('click', love)
        submitButton.addEventListener('click', addComment)
        pause.innerHTML = "pause"
    }
    else {
        plus.removeEventListener('click', increment)
        minus.removeEventListener('click', decrement)
        heart.removeEventListener('click', love)
        submitButton.removeEventListener('click', addComment)
        pause.innerHTML = "resume"
    }
}

function increment() {
   let counterNumber = parseInt(document.getElementById("counter").innerHTML, 10) 
   counterNumber ++
   document.getElementById("counter").innerHTML = counterNumber
}

function decrement() {
    let counterNumber = parseInt(document.getElementById("counter").innerHTML, 10) 
    counterNumber --
    document.getElementById("counter").innerHTML = counterNumber
}

function stopReload() {
    event.preventDefault()
}

function addComment() {
    let newElement = document.createElement('li')
    document.body.appendChild(newElement)
    const comment = document.getElementById('comment-form')[0].value
    newElement.innerHTML = comment
}

function love () {
    const number = document.getElementById("counter").innerHTML
    if (l[number]) {
        l[number]++
        const element = document.getElementById(number)
        element.innerHTML = `${number} has ${l[number]} likes`
    }
    else {
        l[number] = 1
        let newElement = document.createElement('li')
        newElement.setAttribute('id', number)
        document.body.appendChild(newElement)
        newElement.innerHTML = `${number} has 1 like`
    }
}