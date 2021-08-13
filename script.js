async function getChars () {

  let resObj = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/');
  let apiData = await resObj.json();
  
  console.log(apiData)
  
  return apiData.results
  }
  
  let cardGrid = document.querySelector(".cardGrid");
  
  let startButton = document.querySelector("#startButton");
  
  // Mouse click
  
  // startButton.addEventListener("click", () => {
  //  loadPage();
  // }); 
  
  const rootDiv = document.querySelector('#root')
  
  getChars().then((chars) => {
    console.log(chars)
  
    chars.forEach((char) => {
      
      let containerCharDiv = document.createElement('div')
  
      let charHtml = `
      
          <h1>Name: name</h1>
          <p>Key: meaning_up:</p>
          <p>Description: desc</p>
      `
  
      containerCharDiv.innerHTML = charHtml
  
      rootDiv.append(containerCharDiv);
  
    });
  
  });
  