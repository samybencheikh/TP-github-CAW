document.addEventListener('DOMContentLoaded', function() {
    // Étape 1 : Identifier les murs du labyrinthe
    const walls = document.querySelectorAll('.boundary');

    // Étape 4 : Ajouter des écouteurs d'événements
    walls.forEach(wall => {
        wall.addEventListener('mouseover', function() {
            // Étape 5: Changer la couleur du mur au survol
            wall.style.backgroundColor = 'red';
        });

        wall.addEventListener('mouseout', function() {
            // Restaurer la couleur d'origine lorsque la souris quitte le mur
            wall.style.backgroundColor = ''; // Cela réinitialise la couleur à celle définie dans la feuille de style CSS
        });
    });
});
