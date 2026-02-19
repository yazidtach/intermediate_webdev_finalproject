// On attend que le DOM soit chargé pour éviter les erreurs d'élément non trouvé
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calculate-btn');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const resultDisplay = document.getElementById('result');

    // Vérification de l'existence des éléments (évite les TypeErrors)
    if (btn && input1 && input2 && resultDisplay) {
        btn.addEventListener('click', () => {
            // Conversion explicite en nombre avec Number() ou parseFloat()
            const val1 = Number(input1.value);
            const val2 = Number(input2.value);

            // Gestion des cas où l'entrée n'est pas un nombre (NaN)
            if (isNaN(val1) || isNaN(val2)) {
                resultDisplay.textContent = "Erreur : Veuillez entrer des chiffres valides.";
                return;
            }

            const total = val1 + val2;
            resultDisplay.textContent = `Résultat : ${total}`;
        });
    } else {
        console.error("Un ou plusieurs éléments HTML sont manquants dans le DOM.");
    }
});
