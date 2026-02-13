const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const passwordLength = 10

let password_el_1 = document.getElementById('password1')
let password_el_2 = document.getElementById('password2')

function generatePassword() {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
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