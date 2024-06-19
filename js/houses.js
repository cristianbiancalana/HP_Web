const $buttongryffindors = document.getElementById('gryffindors');
const $buttongslytherin= document.getElementById('slytherin');
const $buttonhufflepuffs = document.getElementById('hufflepuffs');
const $buttonravenclaw = document.getElementById('ravenclaw');
const $divcharacters = document.getElementById('charactershouse');
const $arrow = document.getElementById('arrow');
const $main = document.querySelector('body');

$arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

$buttongryffindors.addEventListener('click', async function () {
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let gryffindors = await fetchdata('https://hp-api.onrender.com/api/characters/house/gryffindor');
    console.log(gryffindors);
    $main.style.backgroundImage = "url('../assets/img/backgryffindor.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
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
$buttongslytherin.addEventListener('click', async function () {
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let slytherins = await fetchdata('https://hp-api.onrender.com/api/characters/house/slytherin');
    console.log(slytherins);
    $main.style.backgroundImage = "url('../assets/img/backslytherins.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    for (let slytherin of slytherins) {
        let img = slytherin.image;
            const alive = slytherin.alive;
            const gender = slytherin.gener;
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
                    <h3> ${slytherin.name} </h3>
                </div>
                <div class="img-card">
                    <img src="${img}" alt="$gryffindorsr.name}">
                </div>
                <div class="details-card">
                    <ul>
                    <li>Especie: ${slytherin.species}</li>
                    <li>Casa: ${slytherin.house}</li>
                    <li>Patronus: ${slytherin.patronus}</li>
                    <li>Se encuentra vivo? ${vive}</li>
                    <li>${ocupation}: ${slytherin.actor} </li>
                    <li>Cumpleaños: ${slytherin.dateOfBirth}</li>
                    </ul>
                </div>
            </div>
            `;
            numeracion = numeracion + 1;
    }
    
});
$buttonhufflepuffs.addEventListener('click', async function () {
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let hufflepuffss = await fetchdata('https://hp-api.onrender.com/api/characters/house/hufflepuffs');
    console.log(hufflepuffss);
    $main.style.backgroundImage = "url('../assets/img/backhufflepuffs.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    for (let hufflepuffs of hufflepuffss) {
        let img = hufflepuffs.image;
            const alive = hufflepuffs.alive;
            const gender = hufflepuffs.gener;
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
                    <h3> ${hufflepuffs.name} </h3>
                </div>
                <div class="img-card">
                    <img src="${img}" alt="$gryffindorsr.name}">
                </div>
                <div class="details-card">
                    <ul>
                    <li>Especie: ${hufflepuffs.species}</li>
                    <li>Casa: ${hufflepuffs.house}</li>
                    <li>Patronus: ${hufflepuffs.patronus}</li>
                    <li>Se encuentra vivo? ${vive}</li>
                    <li>${ocupation}: ${hufflepuffs.actor} </li>
                    <li>Cumpleaños: ${hufflepuffs.dateOfBirth}</li>
                    </ul>
                </div>
            </div>
            `;
            numeracion = numeracion + 1;
    }
    
});
$buttonravenclaw.addEventListener('click', async function () {
    $divcharacters.innerHTML = "";
    numeracion = 1;
    let ravenclaws = await fetchdata('https://hp-api.onrender.com/api/characters/house/ravenclaw');
    console.log(ravenclaws);
    $main.style.backgroundImage = "url('../assets/img/backravenclaw.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    for (let ravenclaw of ravenclaws) {
        let img = ravenclaw.image;
            const alive = ravenclaw.alive;
            const gender = ravenclaw.gener;
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
                    <h3> ${ravenclaw.name} </h3>
                </div>
                <div class="img-card">
                    <img src="${img}" alt="$gryffindorsr.name}">
                </div>
                <div class="details-card">
                    <ul>
                    <li>Especie: ${ravenclaw.species}</li>
                    <li>Casa: ${ravenclaw.house}</li>
                    <li>Patronus: ${ravenclaw.patronus}</li>
                    <li>Se encuentra vivo? ${vive}</li>
                    <li>${ocupation}: ${ravenclaw.actor} </li>
                    <li>Cumpleaños: ${ravenclaw.dateOfBirth}</li>
                    </ul>
                </div>
            </div>
            `;
            numeracion = numeracion + 1;
    }
    
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