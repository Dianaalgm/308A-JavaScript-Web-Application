// Fetch requests and Json 

// const getCat = async () => {
//     const response = await fetch("https://api.thecatapi.com/v1/images/search");
//     response
//     const jsonData = await response.json();
//     let catImg = document.querySelector(".gato");
//     catImg.setAttribute("src", jsonData[0].url);
//     console.log(jsonData[0].url);
// };

// const getCat = async () => {
//     const apiKey = 'live_qS7GR3qeWj6V8lcQ78sUbaYZXADdnKfkq5EEBbUikyOBKgFjLUAGnANPUQolQnBk'; 
//     const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

//     try {
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Network response was not ok.");
//         }
//         const jsonData = await response.json();
//         return jsonData[0].url;
//     } catch (error) {
//         console.error("Error fetching cat:", error);
//         return null;
//     }
// };
// let catImg = document.querySelector(".gato");
// catImg.setAttribute("src", jsonData[0].url);
////////////////////////////////////////////////////////////////////////////////////////////////////////
const apiKey = 'live_qS7GR3qeWj6V8lcQ78sUbaYZXADdnKfkq5EEBbUikyOBKgFjLUAGnANPUQolQnBk'
const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

export async function getData(){
  try{
  const response = await fetch (url);
  if (!response.ok) {
    throw new Error ("Network response was not ok");
  }
  const data = await response.json();
  // console.log(data)
  const catImage = document.getElementById("cat");
  catImage.src = data[0].url ;
  catImage.alt = "Cat";
}catch(error){
  console.error("Error fetching cat image", error);
}
}
getData()