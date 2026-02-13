const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let password_el_1 = document.getElementById('password1')
let password_el_2 = document.getElementById('password2')
let num_chars_el = document.getElementById('num-chars')
let ckbx_num_el = document.getElementById('ckbx-num')
let ckbx_sym_el = document.getElementById('ckbx-sym')

function generatePassword() {
    let characters = letters
    if (ckbx_num_el.checked) {
        characters = characters.concat(numbers)
    }
    if (ckbx_sym_el.checked) {
        characters = characters.concat(symbols)
    }
    let password = ''
    for (let i = 0; i < num_chars_el.value; i++) {
        j = Math.floor(Math.random() * characters.length)
        password += characters[j]
    }
    return password
}

function passwordButton() {
    let pswd1 = generatePassword()
    let pswd2 = generatePassword()
    password_el_1.textContent = pswd1
    password_el_2.textContent = pswd2
}

function copyPassword(pswd_box) {
    let pswd = pswd_box === 1 ? password_el_1.textContent : password_el_2.textContent
    navigator.clipboard.writeText(pswd)
}