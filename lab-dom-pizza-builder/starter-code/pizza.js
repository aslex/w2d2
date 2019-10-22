// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  // document.querySelectorAll('.mushroom').forEach(function(mushroom) {
  Array.from(document.getElementsByClassName("mushroom")).forEach(function(
    mushroom
  ) {
    if (state.mushrooms) {
      //   mushroom.style.display = "block";
      mushroom.style.visibility = "visible";
    } else {
      //   mushroom.style.display = "none";
      mushroom.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper) {
    greenPepper.style.visibility = state.greenPeppers ? "visible" : "hidden";
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
    // document.querySelector(".sauce").className = "sauce sauce-white";
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
    // document.querySelector(".sauce").className = "sauce";
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

const ingredientClasses = {
  pepperonni: "pepperonni",
  mushrooms: "mushrooms",
  greenPeppers: "green-peppers",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust"
};

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  for (const key in ingredientClasses) {
    if (state[key]) {
      document
        .querySelector(".btn-" + ingredientClasses[key])
        .classList.add("active");
    } else {
      document
        .querySelector(`.btn-${ingredientClasses[key]}`)
        .classList.remove("active");
    }
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const ul = document.querySelector(".price ul");

  //   ul.innerHTML = "";

  ul.querySelectorAll("li").forEach(function(item) {
    //parent.removeChild(elementToRemove)
    ul.removeChild(item);
  });

  let totalPrice = basePrice;

  for (const key in ingredients) {
    if (state[key] === true) {
      const ingredientPrice = ingredients[key].price;

      totalPrice += ingredientPrice;

      const li = document.createElement("li");
      li.innerText =
        "$" + ingredientPrice + " " + ingredients[key].name.toLowerCase();
      ul.appendChild(li);

      //   ul.innerHTML +=
      //     "<li>$" +
      //     ingredientPrice +
      //     " " +
      //     ingredients[key].name.toLowerCase() +
      //     "</li>";
    }
  }

  document.getElementsByTagName("strong")[0].innerText = "$" + totalPrice;

  //   removes the third li child of the ul in the element with class `controls`
  //   const parent = document.querySelector(".controls > ul ");
  //   const child = parent.getElementsByTagName("li")[2];

  //   parent.removeChild(child);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  //   if (state.pepperonni === true) state.pepperonni = false;
  //   else if (state.pepperonni === false) state.pepperonni = true;
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
