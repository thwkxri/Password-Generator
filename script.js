const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const copyNotifyEl = document.getElementById('copy-notify');

function generate() {
  let dictionary = '';
  if (uppercaseEl.checked) {
    dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
  }
  
  if (lowercaseEl.checked) {
    dictionary += 'qwertyuiopasdfghjklzxcvbnm';
  }

  if (numbersEl.checked) {
    dictionary += '12345678901234567890';
  }

  if (symbolsEl.checked) {
    dictionary += '!@#$%^&*()_+-={}[];<>:';
  }

  const length = lengthEl.value;

  if (length < 1 || length > 20 || dictionary.length == 0) {
    alert('Минимальная длина пароля: 1\nМаксимальная длина пароля: 20')
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const choice = Math.floor(Math.random() * dictionary.length);
    password += dictionary[choice]
  }
  
  resultEl.textContent = password;
  copyNotifyEl.style.display = 'none';
}

clipboardEl.addEventListener('click', () => {
  const textToCopy = resultEl.textContent; 
  navigator.clipboard.writeText(textToCopy);
  copyNotifyEl.style.display = 'block';
});

generateEl.addEventListener('click', generate);