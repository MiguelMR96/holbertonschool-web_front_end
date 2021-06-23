function changeMode(size, weight, transform, background, color) {

  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let para = document.createElement('p');
  let node = document.createTextNode('Welcome Holberton!');
  para.appendChild(node);
  document.body.appendChild(para);

  let button1 = document.createElement('BUTTON');
  let buttonNode1 = document.createTextNode('Spooky');
  button1.appendChild(buttonNode1);
  document.body.appendChild(button1);

  let button2 = document.createElement('BUTTON');
  let buttonNode2 = document.createTextNode('Dark mode');
  button2.appendChild(buttonNode2);
  document.body.appendChild(button2);

  let button3 = document.createElement('BUTTON');
  let buttonNode3 = document.createTextNode('Scream mode');
  button3.appendChild(buttonNode3);
  document.body.appendChild(button3);

  button1.onclick = function() {
    spooky();
  }

  button2.onclick = function() {
    darkMode();
  }

  button3.onclick = function() {
    screamMode();
  }
}

main();
