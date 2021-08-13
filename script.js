async function getChars (url) {

  //let resObj = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/');
  let response = await fetch(url);
  let data = await response.json();
  
  //console.log(apiData)
  
  return data
}
  
let cardGrid = document.querySelector(".cardGrid");
  
let startButton = document.querySelector(".btn");
  
  // Mouse click
  
startButton.addEventListener("click", () => {
  loadPage();
}); 

function loadPage() {
  getChars('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3').then(async (data) => {
    for (const card of data.cards) {
      await getChars(card.url).then((cardData) => {
      //  console.log(data)
      //})
      console.log(data)
    }
  })


  
}
  
  const rootDiv = document.querySelector('#root')
  
  
  

 class Card {
  constructor(name, meaning_up, name_short, desc) {
    this.name = name;
    this.meaning_up = meaning_up;
    this.name_short = name_short;
    this.desc = desc;
    this.id = 1000
  }
}