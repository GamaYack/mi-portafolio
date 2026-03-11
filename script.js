// 1. Desplazamiento suave al hacer clic en el botón
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// 2. Efecto Parallax suave para la imagen de fondo (Hero)
document.addEventListener("mousemove", function(e) {
    const img = document.querySelector("#hero-img");
    if(img) {
        let x = (window.innerWidth - e.pageX * 2) / 100;
        let y = (window.innerHeight - e.pageY * 2) / 100;
        img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }
});

// 3. Efecto de aparición (Fade-in) para los elementos de la galería
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";
    observer.observe(item);
});

// Validación básica del formulario
const formulario = document.querySelector('.contact-form');
if(formulario) {
    formulario.addEventListener('submit', function(e) {
        const nombre = formulario.querySelector('input[name="nombre"]').value;
        if(nombre.length < 3) {
            e.preventDefault();
            alert("Por favor, introduce un nombre válido.");
        } else {
            console.log("Formulario enviado con éxito por " + nombre);
        }
    });
}