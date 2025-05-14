document.addEventListener('DOMContentLoaded', () => {
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const closeBtn = document.getElementById('close');
const reopenBtn = document.getElementById('reopen');
const colorBtn = document.getElementById('color-btn');
const music = document.getElementById('bg-music');
const openSound = document.getElementById('open-sound');

// Frases aleatorias
const frases = [
    "Gracias por ser mi ejemplo y mi refugio.",
    "Tus abrazos son mi lugar favorito.",
    "Eres la razón de mi sonrisa cada día.",
    "¡Te amo más de lo que las palabras pueden decir!",
    "Siempre serás mi mayor inspiración.",
    "Tu amor es mi mayor tesoro.",
    "¡Eres la mejor mamá del mundo!"
];

function mostrarFraseAleatoria() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase-aleatoria').textContent = frase;
}

// Animación de flores flotando
function crearFloresFlotantes() {
    const flores = ["🌸", "🌷", "🌼", "🌺"];
    const contenedor = document.getElementById('flores-bg');
    contenedor.innerHTML = "";
    for (let i = 0; i < 16; i++) {
        const flor = document.createElement('span');
        flor.className = 'flor-flotante';
        flor.textContent = flores[Math.floor(Math.random() * flores.length)];
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.bottom = "-" + (Math.random() * 20 + 2) + "vh";
        flor.style.animationDuration = (10 + Math.random() * 8) + "s";
        contenedor.appendChild(flor);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    crearFloresFlotantes();
    mostrarFraseAleatoria();
    // Cambia flores cada cierto tiempo
    setInterval(crearFloresFlotantes, 12000);
});

// Abrir carta
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    letter.style.pointerEvents = 'auto';
    letter.style.opacity = '1';
    letter.style.transform = 'translateX(-50%) scale(1)';
    mostrarFraseAleatoria();
    if (music) {
        music.volume = 0.2;
        music.play();
    }
    if (openSound) {
        openSound.currentTime = 0;
        openSound.play();
    }
    reopenBtn.style.display = "none";
});

// Cerrar carta
closeBtn.addEventListener('click', () => {
    envelope.classList.remove('open');
    letter.style.pointerEvents = 'none';
    letter.style.opacity = '0';
    letter.style.transform = 'translateX(-50%) scale(0)';
    if (music) music.pause();
    reopenBtn.style.display = "inline-block";
});

// Volver a leer
reopenBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    letter.style.pointerEvents = 'auto';
    letter.style.opacity = '1';
    letter.style.transform = 'translateX(-50%) scale(1)';
    mostrarFraseAleatoria();
    if (music) {
        music.currentTime = 0;
        music.play();
    }
    if (openSound) {
        openSound.currentTime = 0;
        openSound.play();
    }
    reopenBtn.style.display = "none";
});

// Cambiar color de fondo
const colores = [
    "linear-gradient(135deg, #ffeaea 0%, #fff0f6 100%)",
    "linear-gradient(135deg, #fff0f6 0%, #ffeaea 100%)",
    "linear-gradient(135deg, #fffbe6 0%, #ffeaea 100%)",
    "linear-gradient(135deg, #e0f7fa 0%, #ffeaea 100%)"
];
let colorActual = 0;
colorBtn.addEventListener('click', () => {
    colorActual = (colorActual + 1) % colores.length;
    document.body.style.background = colores[colorActual];
});

// Modal para imágenes
document.querySelectorAll('.foto-card img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('modal-img').src = this.src;
        document.getElementById('modal-img-bg').classList.add('active');
    });
});
document.getElementById('modal-img-bg').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
});
});