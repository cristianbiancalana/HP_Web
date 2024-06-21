const $buttongryffindors = document.getElementById('gryffindors');
const $buttongslytherin= document.getElementById('slytherin');
const $buttonhufflepuffs = document.getElementById('hufflepuffs');
const $buttonravenclaw = document.getElementById('ravenclaw');
const $divcharacters = document.getElementById('charactershouse');
const $arrow = document.getElementById('arrow');
const $main = document.querySelector('body');
const $search = document.getElementById('search');
let deschouse = document.getElementById('deschouse');
let $arraychar = [];

$arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

$buttongryffindors.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    deschouse.innerHTML = "";
    numeracion = 1;
    let gryffindors = await fetchdata('https://hp-api.onrender.com/api/characters/house/gryffindor');
    console.log(gryffindors);
    $main.style.backgroundImage = "url('../assets/img/backgryffindor.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    deschouse.innerHTML = getGryffindorDescription();
    renderCharacters(gryffindors);
    window.scrollTo(0, 215);
    $arraychar = gryffindors;   
});
$buttongslytherin.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    deschouse.innerHTML = "";
    numeracion = 1;
    let slytherins = await fetchdata('https://hp-api.onrender.com/api/characters/house/slytherin');
    console.log(slytherins);
    $main.style.backgroundImage = "url('../assets/img/backslytherins.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    deschouse.innerHTML = getSlytherinDescription();
    renderCharacters(slytherins);
    window.scrollTo(0, 215);
    $arraychar = slytherins;
    
});
$buttonhufflepuffs.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    deschouse.innerHTML = "";
    numeracion = 1;
    let hufflepuffss = await fetchdata('https://hp-api.onrender.com/api/characters/house/hufflepuffs');
    console.log(hufflepuffss);
    $main.style.backgroundImage = "url('../assets/img/backhufflepuffs.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    deschouse.innerHTML = getHufflepuffDescription();
    renderCharacters(hufflepuffss);
    window.scrollTo(0, 215);
    $arraychar = hufflepuffss;
});
$buttonravenclaw.addEventListener('click', async function () {
    $search.value = "";
    $divcharacters.innerHTML = "";
    deschouse.innerHTML = "";
    numeracion = 1;
    let ravenclaws = await fetchdata('https://hp-api.onrender.com/api/characters/house/ravenclaw');
    console.log(ravenclaws);
    $main.style.backgroundImage = "url('../assets/img/backravenclaw.jpg')";
    $main.style.backgroundSize = "cover";
    $main.style.backgroundPosition = "center";
    $main.style.backgroundRepeat = "repeat";
    deschouse.innerHTML = getRavenclawDescription();
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

function getGryffindorDescription() {
    return `
    <div class="descri">
      <h2>Gryffindor</h2>
      <p>Gryffindor fue fundada por Godric Gryffindor, un gran mago honorable y valiente nacido en Godric's Hollow, el mismo pueblo que Harry y Albus Dumbledore.
        De esta casa han salido magos muy honorables tales como Harry Potter, Hermione Granger, Minerva McGonagall, Ronald Weasley, Neville Longbottom y Albus Dumbledore.
      </p>
      <br>
      <ul class="caracteristicas">
        <li>Características: coraje y valentía. Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. 
          Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. 
        </li>
        <br>
        <li>
          Reliquia más preciada: su espada , aunque también está el Sombrero Seleccionador, que es el sombrero de Godric Gryffindor.
        </li>            
      </ul>
      <br>
      
      <h2>Veamos sus personajes:</h2>
    </div>`;
}

function getSlytherinDescription() {
    return `
    <div class="descri">
      <h2>Slytherin</h2>
      <p>Slytherin fue fundada por Salazar Slytherin, un mago astuto y ambicioso. 
        Los miembros de esta casa son conocidos por su determinación, ingenio y recursos.
        Han salido magos como Severus Snape, Draco Malfoy, Bellatrix Lestrange y Lord Voldemort.
      </p>
      <br>
      <ul class="caracteristicas">
        <li>Características:ambición, astucia y determinación. Un miembro de Slytherin es capaz de hacer lo que sea necesario para lograr sus objetivos. Son inteligentes, ingeniosos y tienden a ser líderes natos.
        </li>
        <br>
        <li>
            Reliquia más preciada: el guardapelo de Salazar Slytherin.
        </li>
      </ul>
      <br>
      <h2>Veamos sus personajes:</h2>
    </div>`;
}

function getHufflepuffDescription() {
    return `
    <div class="descri">
      <h2>Hufflepuff</h2>
      <p>Hufflepuff fue fundada por Helga Hufflepuff, una maga conocida por su paciencia, trabajo duro y lealtad.
        Los miembros de esta casa son justos, leales y no temen al trabajo duro.
        Entre sus miembros más destacados están Newt Scamander, Cedric Diggory, y Nymphadora Tonks.
      </p>
      <br>
      <ul class="caracteristicas">
        <li>Características: justicia, lealtad y trabajo duro. Un miembro de Hufflepuff valora la amistad, la honestidad y siempre está dispuesto a ayudar a los demás.
          No buscan la gloria, sino que prefieren trabajar en equipo y contribuir de manera positiva.
        </li>
        <br>
        <li>
          Reliquia más preciada: la copa de Helga Hufflepuff.
        </li>
      </ul>
      <br>
      <h2>Veamos sus personajes:</h2>
    </div>`;
}

function getRavenclawDescription() {
    return `
    <div class="descri">
      <h2>Ravenclaw</h2>
      <p>Ravenclaw fue fundada por Rowena Ravenclaw, una bruja extremadamente sabia y creativa.
        Los miembros de esta casa son conocidos por su inteligencia, sabiduría y amor por el aprendizaje.
        Entre sus miembros más destacados están Luna Lovegood, Cho Chang y Filius Flitwick.
      </p>
      <br>
      <ul class="caracteristicas">
        <li>Características: inteligencia, creatividad y sabiduría. Un miembro de Ravenclaw valora el conocimiento, la lógica y siempre busca aprender algo nuevo.
          Son pensadores críticos y a menudo destacan en áreas académicas.
        </li>
        <br>
        <li>
          Reliquia más preciada: la diadema de Rowena Ravenclaw.
        </li>
      </ul>
      <br>
      <h2>Veamos sus personajes:</h2>
    </div>`;
}
