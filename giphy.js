gifs = fetch('api.giphy.com/v1/gifs/trending', {
    api_key: "0gmFixf7pCka8hZDZscaHSaw1w5Dc0nG",
    limit: 20
})
  .then(response => response.json())
  .then(data => console.log(data));

gifs.map((gif) => {
    document.getElementById("gif-container").insertAdjacentHTML("beforeend", gif);
})
