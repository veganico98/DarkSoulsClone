window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("background").classList.add("loaded");
    }, 100); // Pequeno atraso para garantir que o CSS inicial seja aplicado
});