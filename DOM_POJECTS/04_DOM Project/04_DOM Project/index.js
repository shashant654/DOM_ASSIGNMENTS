const barbariann = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--barbarian clearfix"
);
let colorss = "#A77B06";
Array.from(barbariann).forEach((element) => {
  element.style.backgroundColor = colorss;
});


const giantt = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--giant"
);
let colorsss = "#A77B06";
Array.from(giantt).forEach((element) => {
  element.style.backgroundColor = colorsss;
});


const wizardd = document.getElementsByClassName(
  "clash-card__unit-stats clash-card__unit-stats--wizard"
);
let colorssss = "#1898F5";
Array.from(wizardd).forEach((element) => {
  element.style.backgroundColor = colorssss;
});







let val = document.querySelector(".archer");
val.innerHTML = `
<div class="clash-card__image clash-card__image--archer">
                    <img src="./assets/archer.png" alt="archer" />
                </div>
                <div class="clash-card__level clash-card__level--archer">Level 5</div>
                <div> The Archer</div>
                <div class="clash-card__unit-description">
                    The Archer is a female warrior with sharp eyes. She wears a short,
                    light green dress, a hooded cape, a leather belt and an attached
                    small pouch.
                </div>

                <div class="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
                    <div class="one-third">
                        <div class="stat">25<sup>S</sup></div>
                        <div class="stat-value">Training</div>
                    </div>

                    <div class="one-third">
                        <div class="stat">24</div>
                        <div class="stat-value">Speed</div>
                    </div>

                    <div class="one-third no-border">
                        <div class="stat">300</div>
                        <div class="stat-value">Cost</div>
                    </div>
                </div> `;


 

const archerr = document.getElementsByClassName(
    'clash-card__unit-stats clash-card__unit-stats--archer'
  );
  let clr = "#E03888";
  Array.from(archerr).forEach((element) => {
    element.style.backgroundColor = clr;
  });
  
  

  
let vall = document.querySelector(".goblin")
vall.innerHTML = ` <div class="clash-card__image clash-card__image--goblin">
<img src="./assets/goblin.png" alt="goblin" />
</div>
<div class="clash-card__level clash-card__level--goblin">Level 5</div>
<div> The Goblin</div>
<div class="clash-card__unit-description">
These pesky little creatures only have eyes for one thing: LOOT!
They are faster than a Spring Trap, and their hunger for resources
is limitless.
</div>

<div class="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
<div class="one-third">
    <div class="stat">30<sup>S</sup></div>
    <div class="stat-value">Training</div>
</div>

<div class="one-third">
    <div class="stat">32</div>
    <div class="stat-value">Speed</div>
</div>

<div class="one-third no-border">
    <div class="stat">100</div>
    <div class="stat-value">Cost</div>
</div>
</div>
</div> `;    



const goblinn = document.getElementsByClassName(
    'clash-card__unit-stats clash-card__unit-stats--goblin'
  );
  let clrr = "#4DD637";
  Array.from(goblinn).forEach((element) => {
    element.style.backgroundColor = clrr;
  });

