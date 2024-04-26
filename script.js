// script.js
document.getElementById("btnRedBlue").addEventListener("click", function() {
    showGameInfo("Red/Blue", "RedBlue.jpg", "Released in 1996, Pokémon Red and Blue are the first Pokémon games for the Game Boy. They introduced the world to the Pokémon franchise.");
});

document.getElementById("btnYellow").addEventListener("click", function() {
    showGameInfo("Yellow", "Yellow.jpg", "Pokémon Yellow is an enhanced version of Pokémon Red and Blue, released in 1998. It features Pikachu as the player's starter Pokémon.");
});

document.getElementById("btnGoldSilver").addEventListener("click", function() {
    showGameInfo("Gold/Silver", "GoldSilver.jpg", "Released in 1999, Pokémon Gold and Silver introduced the second generation of Pokémon and added new features to the game.");
});

// Add more event listeners for other games

function showGameInfo(title, thumbnail, description) {
    document.getElementById("gameInfo").innerHTML = `
        <h2>${title}</h2>
        <img src="${thumbnail}" alt="${title} Cover Art" width="200">
        <p>${description}</p>
    `;
}
