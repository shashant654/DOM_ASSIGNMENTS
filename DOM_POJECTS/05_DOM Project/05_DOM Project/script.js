let btn = document.querySelector(".nav-center")
btn.innerHTML = `
<div class="nav-header">
<a href="index.html" class="nav-logo">
    <img src="./img/logo.svg" alt="Simply Recipes" />
</a>
</div>
<div class="nav-links">
<a href="index.html" class="nav-link"> home </a>
<a href="index.html" class="nav-link"> about </a>
<a href="index.html" class="nav-link"> tags </a>
<a href="index.html" class="nav-link"> recipes </a>
</div>
<div>
<a href="index.html" class="btn"> contact </a>
</div>

<div>
<a href="index.html" class="btn"> Pro Subscription </a>
</div>
`;

let listt = document.querySelector(".tags-container")
listt.innerHTML = `
<h4 class="text-r">recipes</h4>
<div>
    <a href="#"> Veg (1)</a>
    <a href="#"> Non-Veg (2)</a>
    <a href="#"> Breakfasts (3)</a>
    <a href="#"> Starters (4)</a>
    <a href="#"> Desserts (5)</a>
    <a href="#"> Beverages (6)</a>
    <a href="#"> Chinese (7)</a>
</div>
`;

let recipe = document.querySelector(".recipe-gallery")
recipe.innerHTML = `
<div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-1.jpeg" class="recipe-img" />
                        <h5 class="recipe-name">Chicken</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 30min</p>
                    </a>
                </div>
                <div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-2.jpeg" class="recipe-img " />
                        <h5 class="recipe-name">Paneer</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 25min</p>
                    </a>
                </div>
                <div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-3.jpeg" class="recipe-img " />
                        <h5 class="recipe-name">Tomato Soup</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 5min</p>
                    </a>
                </div>
                <div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-4.jpeg" class="recipe-img " />
                        <h5 class="recipe-name">Chocolate Cake</h5>
                        <p class="recipe-disp">Prep : 20min | Cook : 45min</p>
                    </a>
                </div>
                <div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-5.jpeg" class="recipe-img " />
                        <h5 class="recipe-name">Hakka Noodles</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 30min</p>
                    </a>
                </div>

                <div class="card">
                <a href="#">
                    <h5 class="recipe-name">add 6th Card here</h5>
                </a>
            </div>
`;




const recipe_text_color = document.getElementsByClassName('recipe-text');
  let  clr = "#8D3DAF";
  Array.from(recipe_text_color).forEach((element) => {
    element.style.color = clr;
  });
  
  