let amazon = document.getElementById('amazon-finds');
let italy = document.getElementById('italy-trip');
let phone = document.getElementById('phone');

document.getElementById('button-next').onclick = function() {
  if (amazon.style.display === 'flex') {
    amazon.style.display = 'none';
    italy.style.display = 'flex';
  }
  else if (italy.style.display === 'flex') {
    italy.style.display = 'none';
    phone.style.display = 'flex';
  }
  else if (phone.style.display === 'flex') {
    phone.style.display = 'none';
    amazon.style.display = 'flex';
  }
};

let fullScreenBtn = document.getElementById('button-full-screen');
let Tscreen = document.getElementById('t-websites-iframe');
let closeBtn = document.getElementById('button-close');

let Tamazon = document.getElementById('t-amazon-finds');
let Titaly = document.getElementById('t-italy-trip');
let Tphone = document.getElementById('t-phone');

fullScreenBtn.onclick = function() {
  Tscreen.style.display = 'flex';
  if (amazon.style.display === 'flex') {
    Tamazon.style.display = 'flex';
  }
  else if (italy.style.display === 'flex') {
    Titaly.style.display = 'flex';
  }
  else if (phone.style.display === 'flex') {
    Tphone.style.display = 'flex';
  }
};

closeBtn.onclick = function() {
  Tscreen.style.display = 'none';
  Tamazon.style.display = 'none';
  Titaly.style.display = 'none';
  Tphone.style.display = 'none';
};