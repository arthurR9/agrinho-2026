function verificarResposta(foiCorreta) {
    const textoResultado = document.getElementById("resultado-quiz");
    
    if (foiCorreta) {
        textoResultado.textContent = "🌱 Correto! O Plantio Direto mantém a palhada sobre o solo, protegendo contra a erosão e retendo muito mais umidade.";
        textoResultado.style.color = "#2e7d32"; // Verde para acerto
    } else {
        textoResultado.textContent = "❌ Tente novamente! Essa prática pode prejudicar o solo ou o meio ambiente.";
        textoResultado.style.color = "#c62828"; // Vermelho para erro
    }
}