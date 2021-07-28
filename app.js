let mycursor = document.querySelector(".cursor");
let shape = document.querySelector(".shapes div");
let focus = document.querySelector(".intro-text h3");
let presentation = document.querySelector(".presentation");
let svg = document.querySelector(".svg");


focus.addEventListener("mouseover", () => {
    shape.classList.add('shapegrow');
    presentation.classList.add('presentation-change');
    mycursor.classList.add('hovered');
    svg.classList.add('svg1');
    document.querySelector(".hover").style.opacity = '0';
  document.querySelector(".hover").style.cursor = 'none';
  
  });
  focus.addEventListener("mouseleave", () => {
    shape.classList.remove('shapegrow');
    presentation.classList.remove('presentation-change');
    mycursor.classList.remove('hovered');
    svg.classList.remove('svg1');
     document.querySelector(".hover").style.opacity = '1';
  });
