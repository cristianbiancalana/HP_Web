const $divc = document.getElementById("grid");
let numeracion = 1;
const $arrow = document.getElementById('arrow');

$arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

fetch('https://hp-api.onrender.com/api/characters')
    .then((resp) => {
        return resp.json();
    }).then((characters) => {
        console.log(characters);
        characters.forEach(character => {
            let img = character.image;
            const alive = character.alive;
            const gender = character.gener;
            if (img === "") {
                img = "../assets/img/photonotfound.webp";
            }
            if (alive) {
                vive = "Si, aún vive ";
            } else {
                vive = "No :(";
            }
            if (gender==="male") {
                ocupation = "Actor";
            } else{
                ocupation = "Actriz";
            }
            $divc.innerHTML += `
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
            numeracion = numeracion + 1;
        });
    });