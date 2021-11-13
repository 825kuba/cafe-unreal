'use strict';

// main function to display menu
const displayMenu = function (items, menu, desc = true) {
  menu.innerHTML = '';

  items.forEach(item => {
    const html = `
    <div class="menu-item">
      <div class="menu-item-name">${item.name}</div>
      <div class="menu-item-price">${item.price}</div>
      ${desc ? `<div class="menu-item-desc">${item.desc}</div>` : ``}
    </div>
`;

    menu.insertAdjacentHTML('beforeend', html);
  });
};

/////////////////////////
// FOOD
/////////////////////////

class FoodItem {
  constructor(name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
  }

  addToArray(itemType) {
    itemType.push(this);
  }
}

/////////////////////////
// FOOD- BREAKFAST
/////////////////////////

class BreakfastFoodItem extends FoodItem {
  constructor(name, price, desc) {
    super(name, price, desc);
    this.addToArray(allBreakfastFoodItems);
  }
}
const allBreakfastFoodItems = [];

const breakfast0 = new BreakfastFoodItem(
  'The breakfast',
  '15',
  'Ultimate vegan brekkie - sausages, beans, tomatos, mushrooms and toasted bread or tortilla'
);
const breakfast1 = new BreakfastFoodItem(
  'Pancakes',
  '13',
  'Sweet fruit chocolate Sweet fruit chocolate Sweet fruit chocolate'
);
const breakfast2 = new BreakfastFoodItem(
  'Waffles',
  '14',
  'Sweet banana maple syrup cinamon chocolate'
);
const breakfast3 = new BreakfastFoodItem('Burrito', '13', 'Bean rice vegies');

const breakfastFoodMenu = document.querySelector('.breakfast .menu-items');

displayMenu(allBreakfastFoodItems, breakfastFoodMenu);

/////////////////////////
// FOOD - LUNCH
/////////////////////////

class LunchFoodItem extends FoodItem {
  constructor(name, price, desc) {
    super(name, price, desc);
    this.addToArray(allLunchFoodItems);
  }
}
const allLunchFoodItems = [];

const lunch0 = new LunchFoodItem(
  'Tempeh burger',
  '14',
  'Tempeh patty, homemade dressing, veggies, cheese. Served with fries.'
);
const lunch1 = new LunchFoodItem(
  'Garden Pizza',
  '15',
  'Huge, vegetables, olives, mushrooms, huge, spicy, yummy'
);
const lunch2 = new LunchFoodItem('Pasta', '13', 'Garlic olive oil olives');
const lunch3 = new LunchFoodItem('Salad', '14', 'Veggies diet fitness hungry');
const lunch4 = new LunchFoodItem(
  'Poutine',
  '14',
  'Huge bowl of fries in a sauce'
);

const lunchFoodMenu = document.querySelector('.lunch .menu-items');

displayMenu(allLunchFoodItems, lunchFoodMenu);

/////////////////////////
// DRINKS
/////////////////////////

class DrinkItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  addToArray(itemType) {
    itemType.push(this);
  }
}

/////////////////////////
// DRINKS - HOT
/////////////////////////

class HotDrinkItem extends DrinkItem {
  constructor(name, price) {
    super(name, price);
    this.addToArray(allHotDrinkItems);
  }
}
const allHotDrinkItems = [];

const hotDrink0 = new HotDrinkItem('Reviver', '5');
const hotDrink1 = new HotDrinkItem('Black coffee', '3');
const hotDrink2 = new HotDrinkItem('White coffee', '4');
const hotDrink3 = new HotDrinkItem('Hot chocolate', '4');
const hotDrink4 = new HotDrinkItem('Tea', '3');

const hotDrinkMenu = document.querySelector('.hot-drinks .menu-items');

displayMenu(allHotDrinkItems, hotDrinkMenu, false);

/////////////////////////
// DRINKS - COLD
/////////////////////////

class ColdDrinkItem extends DrinkItem {
  constructor(name, price) {
    super(name, price);
    this.addToArray(allColdDrinkItems);
  }
}
const allColdDrinkItems = [];

const coldDrink0 = new ColdDrinkItem('Ice coffee', '4');
const coldDrink1 = new ColdDrinkItem('Ice tea', '3');
const coldDrink2 = new ColdDrinkItem('Lemonade', '4');
const coldDrink3 = new ColdDrinkItem('Beer', '7');
const coldDrink4 = new ColdDrinkItem('Mocktail', '6');

const coldDrinkMenu = document.querySelector('.cold-drinks .menu-items');

displayMenu(allColdDrinkItems, coldDrinkMenu, false);

// /////////////////////////
// // NEW ITEM
// /////////////////////////
// const newItemForm = document.querySelector('new-item-form');
// const newItemName = document.querySelector('#new-item-name');
// const newItemPrice = document.querySelector('#new-item-price');
// const newItemDesc = document.querySelector('#new-item-desc');

// const newItemBtn = document.querySelector('.new-item-btn');

// newItemBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   const newName = newItemName.value;
//   const newPrice = newItemPrice.value;
//   const newDesc = newItemDesc.value;
//   const breakfast4 = new BreakfastFoodItem(newName, newPrice, newDesc);
//   displayMenu(allBreakfastFoodItems, breakfastFoodMenu, true);
// });
