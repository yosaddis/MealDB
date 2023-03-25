import getMealDetails from './getMealDetails.js';
import hidenItems from './hideItems.js';

const populateMeals = (list) => {
  const board = document.querySelector('.main-meals-list');
  board.innerHTML = '';
  list.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;
    item.classList.add('card-food');
    item.innerHTML = `
    <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>        
        <button type="button" class="btn-recipe">Recipe</button>
        <div>        
        </div>
        <div class="btn-liked">
          Like
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;

    const btnRecipeElement = item.querySelector('.btn-recipe');

    btnRecipeElement.addEventListener('click', () => {
      getMealDetails(food.idMeal);
      hidenItems();
    });
    board.appendChild(item);
  });
};

const getMeals = async (apiLink) => {
  const request = new Request(apiLink);
  const response = await fetch(request);
  const replayJASON = await response.json();
  const replayInfo = replayJASON.meals;
  populateMeals(replayInfo);
};

export { getMeals as default };
