fetch('http://api.giphy.com/v1/gifs/trending?api_key=0gmFixf7pCka8hZDZscaHSaw1w5Dc0nG&limit=10', 
  // {
  //   headers: 
  //     {
  //       api_key: "0gmFixf7pCka8hZDZscaHSaw1w5Dc0nG",
  //       limit: 20
  //   }
  // }
)
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        // let img = `<img src=${gif.url}></img>`
        document.getElementById('gif-container')
        .appendChild(img)
        // .insertAdjacentHTML("beforeend", img)
      })
  })
  .catch(error => console.log(error))

  document.addEventListener('keydown', keyHandler);

  var pattern = ['o', 'z'];
  var current = 0;

  var keyHandler = function (event) {
    console.log('hello');
    console.log(event);

    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
      current = 0;
      return;
    }
  
    // Update how much of the pattern is complete
    current++;
  
    // If complete, alert and reset
    if (pattern.length === current) {
      current = 0;
      window.alert("You're amazing!");
    }
  };