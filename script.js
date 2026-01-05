const text = "Python Developer & Vibe Coder";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 120);
  }
}

typingEffect();

