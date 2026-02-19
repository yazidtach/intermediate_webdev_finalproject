// Attendre que le DOM soit chargé
window.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn'); // ou l'ID de ton bouton

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            // Récupération et conversion explicite en nombres (Évite les TypeErrors et erreurs de calcul)
            const principal = Number(document.getElementById('principal').value);
            const rate = Number(document.getElementById('rate').value);
            const time = Number(document.getElementById('time').value);

            // Vérification simple (optionnelle mais recommandée)
            if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
                console.error("Veuillez entrer des nombres valides pour le capital, le taux et la durée.");
                return;
            }

            // Exemple de calcul d'intérêt simple
            const interest = (principal * rate * time) / 100;
            
            const resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.textContent = `Intérêt : ${interest}`;
            }
        });
    }
});
