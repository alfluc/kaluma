function verificarUrl() {
    // 1. Ocultar botón "Verificar" y mostrar "Nuevo Análisis"
    document.getElementById('verify-button').style.display = 'none';
    document.getElementById('reset-button-moved').style.display = 'flex'; 

    // 2. Obtener los elementos que vamos a modificar
    const urlInput = document.getElementById('url-input').value.toLowerCase().trim();
    const resultSection = document.getElementById('result-message-section');
    const messageBox = document.getElementById('safe-message-box');
    const messageIcon = document.getElementById('message-icon');
    const messageText = document.getElementById('message-text');

    // Mostrar la sección de resultado
    resultSection.style.display = 'flex';
    
    // 💡 MUY IMPORTANTE: Resetear los estilos en línea y la clase antes de aplicar la nueva
    messageBox.style.cssText = ''; 
    
    // 3. Lógica de verificación
    if (urlInput.includes("mercadolibre.com")) { 
        // CASO SITIO SEGURO/BUENA REPUTACIÓN (Verde)
        messageBox.className = 'safe-message-box';
        messageIcon.textContent = 'verified_user';
        messageText.textContent = 'Sitio Seguro - Reputación Confiable';
        
    } else if (urlInput.includes("https://mx.aliexpresss.com/")) { 
        // CASO SITIO PELIGROSO/ESTAFA (Rojo)
        messageBox.className = 'safe-message-box danger-message-box';
        messageIcon.textContent = 'warning'; 
        messageText.textContent = '¡Peligro! Alto riesgo de estafa (Verifique la URL)';

    } else {
        // CASO POR DEFECTO: Muestra el cuadro rojo de peligro 🚩
        messageBox.className = 'safe-message-box danger-message-box';
        messageIcon.textContent = 'warning'; 
        messageText.textContent = '¡Peligro! Alto riesgo de estafa (Verifique la URL)';
    }
}