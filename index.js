let countEl = document.getElementById("count-el") 

let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count 
}

// save() that logs out the count when the save button is clicked
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}