import './style.css';
import getMeals from './modules/getMeals.js';

const [liStarter, liVegan, livege] = document.querySelectorAll('li');
let menuSelected = liStarter;

const allStarter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter';
const allvegan = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan';
const allvege = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';

liStarter.addEventListener('click', () => {
  menuSelected = liStarter;
  liStarter.classList.add('selected');
  liVegan.classList.remove('selected');
  livege.classList.remove('selected');
  menuSelected.textContent = 'Starter';
  livege.textContent = 'Vegeterian';
  liVegan.textContent = 'Vegan';
  getMeals(allStarter, menuSelected);
});

liVegan.addEventListener('click', () => {
  menuSelected = liVegan;
  liStarter.classList.remove('selected');
  liVegan.classList.add('selected');
  livege.classList.remove('selected');
  menuSelected.textContent = 'Vegan';
  liStarter.textContent = 'Starter';
  livege.textContent = 'Vegeterian';
  getMeals(allvegan, menuSelected);
});

livege.addEventListener('click', () => {
  menuSelected = livege;
  liStarter.classList.remove('selected');
  liVegan.classList.remove('selected');
  livege.classList.add('selected');
  menuSelected.textContent = 'Vegeterian';
  liStarter.textContent = 'Starter';
  liVegan.textContent = 'Vegan';
  getMeals(allvege, menuSelected);
});

getMeals(allStarter, menuSelected);