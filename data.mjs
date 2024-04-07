// button function

// const notCuteBttn = document.getElementById("not");

// notCuteBttn.addEventListener("click", //function name)
// function changeCatImg()=> {
// }

//moved this to main.js
// document.addEventListener("DOMContentLoaded", () => {
//     const notButton = document.querySelector(".not");
//     notButton.addEventListener("click", () => {
//         changeCatImage();
//     });
// });

export async function changeCatImage() {
    const apiKey = 'live_qS7GR3qeWj6V8lcQ78sUbaYZXADdnKfkq5EEBbUikyOBKgFjLUAGnANPUQolQnBk'; 
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        const catImage = document.getElementById("cat");
        catImage.src = data[0].url;
        catImage.alt = "Cat";
    } catch (error) {
        console.error("Error fetching cat image:", error);
    }
}