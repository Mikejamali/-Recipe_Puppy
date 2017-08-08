let container = document.getElementById("container");
let button = document.querySelector("button")
let stuff = document.querySelectorAll(".recipecontainer")
let getInit = {
  method: "get",
  mode: "no-cors",
}

fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3")

  .then(function(response) {
      if (response.status !== 200) {
        console.log("response status", response.status);
        return;
      }

      response.json().then(function(data) {
        console.log("Here is the data:", data.results);
        for (var i = 0; i < 8; i++) {

          let template = "";
          template = `
            <img src=${data.results[i].thumbnail}>
            <p>${data.results[i].title}</p>
            `;
            stuff[i].innerHTML = template;
        }
      });
    }
  )
  
  .catch(function(error) {
    console.log("Fetch Error :-S", error);
  });
