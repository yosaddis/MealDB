import { mealCounter } from '../modules/getMeals.js';
import { countComment } from '../modules/getComment.js';

beforeAll(() => {
	document.body.innerHTML = `  
 <div class="container">
		<header>
			<div class="logo">
				<h1>Eat healthy</h1>
			</div>
			<nav class="nav-bar">
				<ul class="nav-bar-list">
					<li class="selected">Starter</li>
					<li>Vegan</li>
					<li>Vegeterian</li>
				</ul>
			</nav>
		</header>
		<main class="main-meals-list">
		</main>
		<footer>
			<h4>&copy; 2023 healthy meal website</h4>
		</footer>
	</div>
  `;
});
describe('Check meal count', () => {
	test('Value should be Starter (4) ', () => {
		const starterElement = document.querySelector('li');
		mealCounter(starterElement, 4);
		expect(starterElement.textContent).toEqual('Starter (4)');
	});
});

describe('Test comment count', () => {
	test('comment count should display Comments (3)', () => {
		const container = document.querySelector('.main-meals-list');
		container.innerHTML = `<h3>Comments</h3>
    <div><span>New comment 1</span></div>
    <div><span>New comment 2</span></div>
    <div><span>New comment 3</span></div>`;
		const title = document.querySelector('h3');
		const array = document.querySelectorAll('span');

		countComment(array, title);

		expect(title.innerHTML).toEqual('Comments (3)');
	});
});