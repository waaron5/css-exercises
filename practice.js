const nbPetals = 9

function howMuchILoveYou(nbPetals) {
    const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let phrase = phrases[(nbPetals - 1) % 6];
    console.log(`${phrase}`);
}

// console.log(`${(nbPetals - 1) % 6}`)

howMuchILoveYou(nbPetals);