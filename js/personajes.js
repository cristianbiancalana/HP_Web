const $divc = document.getElementById("grid");

fetch('https://hp-api.onrender.com/api/characters')
    .then((resp) => {
        return resp.json();
    }).then((characters) => {
        console.log(characters);
        characters.forEach(character => {
            $divc.innerHTML += `
                <div>
                    <h4>${character.name}</h4>
                </div>
            
            `;
        });
    });

