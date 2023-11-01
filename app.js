"use strict"; 

function p1 (){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  
  const setBg = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
      p1.innerHTML = "#" + randomColor;
    }
    
    genNew.addEventListener("click", setBg);
    setBg();
}

p1();

