const $buttongryffindors = document.getElementById('gryffindors');
const $buttongslytherin= document.getElementById('slytherin');
const $buttonhufflepuffs = document.getElementById('hufflepuffs');
const $buttonravenclaw = document.getElementById('ravenclaw');
const $divcharacters = document.getElementById('charactershouse');

$buttongryffindors.addEventListener('click', async function () {
    numeracion = 1;
    let gryffindors = await fetchdata('https://hp-api.onrender.com/api/characters/house/gryffindor');
    console.log(gryffindors);
    for (let gryffindor of gryffindors) {
        let img = gryffindor.image;
            const alive = gryffindor.alive;
            const gender = gryffindor.gener;
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
            $divcharacters.innerHTML += `
            <div class="card" id="card">
                <div class="header-card">
                    <span> <strong> # ${numeracion}</strong> </span>
                    <h3> ${gryffindor.name} </h3>
                </div>
                <div class="img-card">
                    <img src="${img}" alt="$gryffindorsr.name}">
                </div>
                <div class="details-card">
                    <ul>
                    <li>Especie: ${gryffindor.species}</li>
                    <li>Casa: ${gryffindor.house}</li>
                    <li>Patronus: ${gryffindor.patronus}</li>
                    <li>Se encuentra vivo? ${vive}</li>
                    <li>${ocupation}: ${gryffindor.actor} </li>
                    <li>Cumpleaños: ${gryffindor.dateOfBirth}</li>
                    </ul>
                </div>
            </div>
            `;
            numeracion = numeracion + 1;
    }
    
});
$buttongslytherin.addEventListener('click', function() {
    console.log('Botón 2 presionado');
});
$buttonhufflepuffs.addEventListener('click', function() {
    console.log('Botón 3 presionado');
});
$buttonravenclaw.addEventListener('click', function() {
    console.log('Botón 4 presionado');
});

async function fetchdata(url) {
    
    try {
        let response = await fetch(url);
        if (response) {
            let data = await response.json();
            console.log(data);
            return data;
        }
            
    } catch (error) {
        console.log('Error al obtener datos de la API')
    }
}