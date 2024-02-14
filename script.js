onload = () => {
  document.body.classList.remove("container");
  escribirTexto();
};


const texto = "El mejor tipo de amor es aquel que despierta el alma y nos inspira a más, nos enciende el corazón y nos trae paz a la mente, te prometo que estaremos juntos hasta VIEJITOS !!";
const velocidad = 70;
const titulo = document.getElementById('titulo');

function escribirTexto() {
  let index = 0;
  const intervalo = setInterval(function() {
    titulo.textContent += texto[index];


    index++;
    if (index === texto.length) {
      clearInterval(intervalo);
    }
  }, velocidad);
}

