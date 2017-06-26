

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};

var li = document.createElement('li');
li.textContent='a';
document.getElementById('a').appendChild(li);
