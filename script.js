let count = 0
let counterNumber = document.getElementById('count-text')
let saveText = document.getElementById('save-text')

function increment() {
    count = count + 1
    counterNumber.innerHTML = count
}

function save() {
    let newVar = count + ` - `
    saveText.innerHTML += newVar
    //console.log(`Button was clicked. Saved count is ${count} `)
    count = 0
    counterNumber.innerHTML = count
}