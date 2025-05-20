let lampOnOff = document.getElementById('lamp-on-off');

let lamp = document.getElementById('lamp');
let insideLamp = document.getElementById('inside-lamp');

let body = document.getElementById('body');

lampOnOff.onclick = function() {
  if (lamp.style.boxShadow === 'none') {
    lamp.style.transition = '0.25s'
    lamp.style.boxShadow = '0 0 1000px rgb(208, 218, 63), 0 0 300px rgb(208, 218, 63), 0 0 500px rgba(208, 218, 63, 0.39)'
    insideLamp.style.boxShadow = '0 0 100px rgb(248, 255, 208)'
    body.style.filter = 'brightness(180%)'
  }
  else {
    lamp.style.transition = '0.25s'
    lamp.style.boxShadow = 'none'
    insideLamp.style.boxShadow = 'none'
    body.style.transition = '1s'
    body.style.filter = 'brightness(100%)'
  };
}; 

let lightDark = document.getElementById('light-dark');
let outsideLamp = document.getElementById('outside-lamp');

lightDark.onclick = function() {
  if (body.style.backgroundColor === 'rgb(13, 17, 23)') {
    body.style.backgroundColor = 'rgb(201, 201, 201)'
    body.style.transition = '0.5s'
    outsideLamp.style.transition = '0.5s'
    outsideLamp.style.backgroundColor = 'rgb(134, 134, 134)'
  }
  else if (body.style.backgroundColor === 'rgb(201, 201, 201)') {
    body.style.backgroundColor = 'rgb(13, 17, 23)'
    body.style.transition = '0.5s'
    outsideLamp.style.transition = '0.5s'
    outsideLamp.style.backgroundColor = 'rgb(13, 17, 23)'
  };
};