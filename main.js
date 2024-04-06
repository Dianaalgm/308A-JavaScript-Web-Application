//module that is linked to HTML
// Main File for Classes and Functions/imports

// document.getElementById("start").addEventListener("click", testRequest);

let catScore = 0;
let catPoints = document.querySelector(".score1");
catPoints.innerHTML = catScore;

import {getData} from './main2.mjs'


// const apiKey = 'live_qS7GR3qeWj6V8lcQ78sUbaYZXADdnKfkq5EEBbUikyOBKgFjLUAGnANPUQolQnBk'
// const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

// async function getData(){
//   try{
//   const response = await fetch (url);
//   if (!response.ok) {
//     throw new Error ("Network response was not ok");
//   }
//   const data = await response.json();
//   // console.log(data)
//   const catImage = document.getElementById("cat");
//   catImage.src = data[0].url ;
//   catImage.alt = "Cat";
// }catch(error){
//   console.error("Error fetching cat image", error);
// }

