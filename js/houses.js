const $buttongryffindors = document.getElementById('gryffindors');
const $buttongslytherin= document.getElementById('slytherin');
const $buttonhufflepuffs = document.getElementById('hufflepuffs');
const $buttonravenclaw = document.getElementById('ravenclaw');
const $divcharacters = document.getElementById('charactershouse');
const $arrow = document.getElementById('arrow');
const $main = document.querySelector('body');
const $search = document.getElementById('search');
let $arraychar = [];

$arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

$buttongryffindors.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let gryffindors = await fetchdata('https://hp-api.onrender.com/api/characters/house/gryffindor');
    console.log(gryffindors);
    $main.style.backgroundImage = "url('../assets/img/backgryffindor.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    renderCharacters(gryffindors);
    window.scrollTo(0, 215);
    $arraychar = gryffindors;   
});
$buttongslytherin.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let slytherins = await fetchdata('https://hp-api.onrender.com/api/characters/house/slytherin');
    console.log(slytherins);
    $main.style.backgroundImage = "url('../assets/img/backslytherins.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    renderCharacters(slytherins);
    window.scrollTo(0, 215);
    $arraychar = slytherins;
    
});
$buttonhufflepuffs.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let hufflepuffss = await fetchdata('https://hp-api.onrender.com/api/characters/house/hufflepuffs');
    console.log(hufflepuffss);
    $main.style.backgroundImage = "url('../assets/img/backhufflepuffs.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    renderCharacters(hufflepuffss);
    window.scrollTo(0, 215);
    $arraychar = hufflepuffss;
});
$buttonravenclaw.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let ravenclaws = await fetchdata('https://hp-api.onrender.com/api/characters/house/ravenclaw');
    console.log(ravenclaws);
    $main.style.backgroundImage = "url('../assets/img/backravenclaw.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    renderCharacters(ravenclaws);
    window.scrollTo(0, 215);
    $arraychar = ravenclaws;
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

async function renderCharacters(characters) {
    let htmlString = '';
    numeracion = 1;
    for (let character of characters) {
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
    }
    $divcharacters.innerHTML = htmlString;
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
    $divcharacters.innerHTML = '';
    renderCharacters(filtrados);
    window.scrollTo(0, 35);
});