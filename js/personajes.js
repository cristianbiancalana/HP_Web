const $divc = document.getElementById("grid");
let numeracion = 1;
const $arrow = document.getElementById('arrow');
const $search = document.getElementById('search');
let $arraychar = [];

$arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});


fetch('https://hp-api.onrender.com/api/characters')
    .then((resp) => {
        return resp.json();
    }).then((characters) => {
        $arraychar = characters;
        renderCharacters($arraychar);
        window.scrollTo(0, 35);
    });

function renderCharacters(characters) {
    let htmlString = '';
    numeracion = 1;
    characters.forEach(character => {
        let img = character.image;
        const alive = character.alive;
        const gender = character.gener;
        if (img === "") {
            img = "../assets/img/photonotfound.webp";
        }
        const vive = alive ? "Si, aún vive" : "No :(";
        const ocupation = gender === "male" ? "Actor" : "Actriz";
        
        htmlString += `
        <div class="card" id="card">
            <div class="header-card">
                <span> <strong> # ${numeracion}</strong> </span>
                <h3> ${character.name} </h3>
            </div>
            <div class="img-card">
                <img src="${img}" alt="${character.name}">
            </div>
            <div class="details-card">
                <ul>
                <li>Especie: ${character.species}</li>
                <li>Casa: ${character.house}</li>
                <li>Patronus: ${character.patronus}</li>
                <li>Se encuentra vivo? ${vive}</li>
                <li>${ocupation}: ${character.actor} </li>
                <li>Cumpleaños: ${character.dateOfBirth}</li>
                </ul>
            </div>
        </div>
        `;
        numeracion++;
    });
    $divc.innerHTML = htmlString;
}
$search.addEventListener('input', function () {
    const array = $search.value.toLocaleLowerCase();
    const filtrados = $arraychar.filter(character => {
        return character.name.toLowerCase().includes(array) ||
                character.house.toLowerCase().includes(array) ||
                character.species.toLowerCase().includes(array) ||
                character.actor.toLowerCase().includes(array) ||
                String(character.dateOfBirth).includes(array);
    });

    numeracion = 1;
    $divc.innerHTML = '';
    renderCharacters(filtrados);
    window.scrollTo(0, 35);
});