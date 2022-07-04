
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
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


