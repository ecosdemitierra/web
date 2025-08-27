// =========================
// NAVBAR INTERACTIVA
// =========================
let navbar = document.getElementById("navbar");

window.onscroll = function() {
    if (window.scrollY > 100) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10px";
    }
};

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío normal del formulario

  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbzDctu1qqGOTb42l9V1ydmXnSPKCwIBG5lcTLmQUaBsDchwmtMeZp2FYJOJKvLd7Oun/exec', true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Mostrar el mensaje de éxito
      document.getElementById('mensaje-exito').style.display = 'block';

      // Limpiar los campos del formulario
      document.getElementById('formulario-contacto').reset();
    }
  };

  xhr.send(formData);
});