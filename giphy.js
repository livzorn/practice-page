gifs = fetch('api.giphy.com/v1/gifs/trending', {
    api_key: "UMSlO0tTl75tAQ8B7LoIIRDR9pq0J9Kq",
    limit: 20
})
  .then(response => response.json())
  .then(data => console.log(data));

gifs.map((gif) => {
    document.getElementById("gif-container").insertAdjacentHTML("beforeend", gif);
})
