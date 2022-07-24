
var searched = document.getElementById("apiReturn");

function searchedGame(query) {
    const url = `https://steam2.p.rapidapi.com/search/${query}/page/1`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3578c7131cmshc9b6f560358462ap140906jsna7ea811bc316',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(jsonData => {
            // traverse the "element/array of information searched. In this case element returns all the array solutions but just the title with .title"
            // Need to get it to show reviews and link to the website in addition to the title it is showing now
           renderResults(jsonData);
            console.log(jsonData);
         });
        
}
// This function was created to attach to the UL with ID resultsList, "foreach" result create a li and show the "innertext" as the result
function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";
    results.forEach(result => {
        const element = document.createElement("li");
        element.innerText = result.title;
        const element1 = document.createElement("p");
        element.innerText = result.reviewSummary;
        list.appendChild(element);
        element.appendChild(element1);

    });

}

let searchTimeoutToken = 0;

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
// If I dont click on another key for 350 miliseconds the search will start
        clearTimeout(searchTimeoutToken);

        if(searchFieldElement.value.trim().length === 0) {
            return;
        }

        searchTimeoutToken = setTimeout(() => {
        searchedGame(searchFieldElement.value);
        }, 350);
    };
}

