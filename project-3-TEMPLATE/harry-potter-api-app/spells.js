const spellsApp = {};

spellsApp.apiKey = `$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy`;

spellsApp.endpoint = `https://www.potterapi.com/v1/spells`;

spellsApp.getSpells = () => {
    $.ajax({
        url: spellsApp.endpoint,
        method: `GET`,
        dataType: `json`,
        data: {
            key: spellsApp.apiKey
        }
    }).then(function(response) { //spells instead of resS
        spellsApp.castSpells(response) // this transfers the API data to the spellsApp.castSpells function bellow.
    });
}

spellsApp.castSpells = (spellsArray) => {
    for (let i = 0; i < spellsArray.length; i++) {
        $('.spellbook')
            .append(`<h2>${spellsArray[i].spell}<span>(${spellsArray[i].type})</span></h2>`)
            .append(`<p>${spellsArray[i].effect}</p>`);
    }
}



$(document).ready(function(){
    spellsApp.getSpells() // this is the init ex spellsApp.init()
});

