import './style.css';
import getMeals from './modules/getMeals.js';

const [liStarter, liVegan, livege] = document.querySelectorAll('li');
let selectedli = liStarter;

const allStarter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter';
const allvegan = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan';
const allvege = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';

liStarter.addEventListener('click', () => {
  selectedli = liStarter;
  liStarter.classList.add('selected');
  liVegan.classList.remove('selected');
  livege.classList.remove('selected');
  selectedli.textContent = 'Starter';
  livege.textContent = 'Vegeterian';
  liVegan.textContent = 'Vegan';
  getMeals(allStarter);
});

liVegan.addEventListener('click', () => {
  selectedli = liStarter;
  liStarter.classList.remove('selected');
  liVegan.classList.add('selected');
  livege.classList.remove('selected');
  selectedli.textContent = 'Vegan';
  liStarter.textContent = 'Starter';
  livege.textContent = 'Vegeterian';
  getMeals(allvegan);
});

livege.addEventListener('click', () => {
  selectedli = liStarter;
  liStarter.classList.remove('selected');
  liVegan.classList.remove('selected');
  livege.classList.add('selected');
  selectedli.textContent = 'Vegeterian';
  liStarter.textContent = 'Starter';
  liVegan.textContent = 'Vegan';
  getMeals(allvege);
});

getMeals(allStarter);