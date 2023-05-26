'use strict'

const kittenOneListElement= `<li class="card" class="js_siames"><article>`          
const kittenOneImage= `<img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />`
const kittenOneName=`<h3 class="card_title">Anastacio</h3>`
const kittenOneRace=`<h4 class="card_race">Siamés</h4>`
const kittenOneDesc=`<p class="card_description">Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.</p></li></article>`
const kittenOne = kittenOneListElement+kittenOneImage+kittenOneName+kittenOneRace+kittenOneDesc           


const kittenTwoListElement=`<li class="card"><article>`
const kittenTwoImage= `<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat"/>`
const kittenTwoName=`<h3 class="card_title">Fiona</h3>`
const kittenTwoRace=`<h4 class="card_race">Sphynx</h4>`
const kittenTwoDesc=`<p class="card_description">Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.</p></li></article>`;
const kittenTwo = kittenTwoListElement+kittenTwoImage+kittenTwoName+kittenTwoRace+kittenTwoDesc;

const kittenThreeListElement=`<li class="card"><article>`
const kittenThreeImage= `<img class="card_img"src="https://dev.adalab.es/maine-coon-cat.webp"alt="maine-coon-cat"/>`
const kittenThreeName= `<h3 class="card_title">Cielo</h3>`
const kittenThreeRace=`<h4 class="card_race">Maine Coon</h4>`
const kittenThreeDesc=`<p class="card_description">Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.</p></li><article>`;
const kittenThree = kittenThreeListElement+kittenThreeImage+kittenThreeName+kittenThreeRace+kittenThreeDesc;

document.querySelector(".js-list").innerHTML= kittenOne + kittenTwo + kittenThree;
const list=kittenOne + kittenTwo + kittenThree;



const buttonSearch = document.querySelector(".js-button-search") 
buttonSearch.addEventListener("click", (event)=> {
event.preventDefault();
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

const raceSearchText= document.querySelector('.js-search-race');
raceSearchText = input_search_race.value;



if( kittenOneDesc .includes(descrSearchText) )
    
    {document.querySelector(".js-list").innerHTML= kittenOne ;
};
if( kittenTwoDesc .includes(descrSearchText) )
    
    {document.querySelector(".js-list").innerHTML= kittenTwo ;
};
if( kittenThreeDesc .includes(descrSearchText) )
    
    {document.querySelector(".js-list").innerHTML= kittenThree ;
};
if( kittenOneRace .includes() )
    
    {document.querySelector(".js-list").innerHTML= kittenThree ;}
})

