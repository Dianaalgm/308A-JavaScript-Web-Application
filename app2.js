// Fetch requests and Json 

const getCat = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonData = await response.json();
    let catImg = document.querySelector(".meow");
    catImg.setAttribute("src", jsonData[0].url);
    console.log(jsonData[0].url);
};
