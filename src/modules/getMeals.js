import getMealDetails from './getMealDetails.js';
import hidenItems from './hideItems.js';
import { addLikeToItem, getLikesToItems } from './getLikes.js';

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
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        (element) => element.item_id === food.idMeal,
      );

      btnLikedElement.innerHTML = likesReturned !== undefined
        ? `<i class="far fa-thumbs-up fa-lg"></i> ${likesReturned.likes}`
        : '<i class="far fa-thumbs-up fa-lg"></i> 0';
    };
    getLikesToItems()
      .then(printLike)
      .catch();

    btnLikedElement.addEventListener('click', () => {
      addLikeToItem(food.idMeal);
      getLikesToItems()
        .then(printLike)
        .catch();
    });

    btnRecipeElement.addEventListener('click', () => {
      getMealDetails(food.idMeal);
      hidenItems();
    });
    board.appendChild(item);
  });
};

export const mealCounter = (typeFoodSelected, count) => {
  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;
};

const getMeals = async (apiLink,menuSelected) => {
  const request = new Request(apiLink);
  const response = await fetch(request);
  const replayJSON = await response.json();
  const replayInfo = replayJSON.meals;
  mealCounter(menuSelected, replayInfo.length);
  populateMeals(replayInfo);
};



export { getMeals as default };
