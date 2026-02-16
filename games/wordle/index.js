const words = ["hello", "train", "model", "happy", "smile", "stain", "press", "knife", "utter", "shout", "dance"]

const secret_word = words[Math.floor(Math.random() * words.length)]

const debug_word = document.getElementById("word-debug")

debug_word.textContent = secret_word