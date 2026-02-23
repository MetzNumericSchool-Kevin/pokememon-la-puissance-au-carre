// 1. Votre banque d'images (12 éléments au total)
const banqueImages = ['🍎', '🍌', '🍇', '🍓', '🍒', '🥝', '🍍', '🍑', '🍋', '🍉', '🍏', '🍐'];

function preparerJeuMemory(images, nbPaires) {
    // A. Sélectionner 6 images aléatoires dans la banque
    const selection = [...images]
        .sort(() => Math.random() - 0.5)
        .slice(0, nbPaires);

    // B. Créer les paires (on duplique chaque image)
    // On ajoute un ID unique pour pouvoir les manipuler dans le DOM plus tard
    let cartes = [...selection, ...selection].map((img, index) => ({
        id: index,
        content: img,
        matched: false
    }));

    // C. Mélanger les 12 cartes pour le plateau de jeu
    cartes = cartes.sort(() => Math.random() - 0.5);

    // D. Optionnel : Attribuer des coordonnées X/Y si vous ne gérez pas ça en CSS Grid
    return cartes.map((carte, i) => ({
        ...carte,
        x: (i % 4) + 1, // Colonne 1 à 4
        y: Math.floor(i / 4) + 1 // Ligne 1 à 3
    }));
}

const plateauDeJeu = preparerJeuMemory(banqueImages, 6);
console.table(plateauDeJeu);