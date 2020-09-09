/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// Step 1 (Part 1) - created a function component called 'menuMaker'
function menuMaker(menuArr) {
  // Step 1 (Part 2) - created the menu 
  const menu = document.createElement('div')
  const menuList = document.createElement('ul')

  // appended menuList to the menu variable and gave it a class called 'menu'
  menu.appendChild(menuList)
  menu.classList.add('menu')

  // Step 2 - using a forEach to iterate over the array creating a list item element
  // for each item in the array. And then append those items to the 'menuList'.
  menuArr.forEach(name => {
    const listItem = document.createElement('li')
    listItem.textContent = name
    menuList.appendChild(listItem)
  })

  // Step 3 - created the menu button
  const button = document.querySelector('.menu-button')

  // Step 4 - added a click event listener to the menu button. When clicked it toggles the class
  // 'menu--open' on div.menu (your div with a 'menu' class).
  button.addEventListener('click', () => document.querySelector('.menu').classList.toggle('menu--open'))
  
  // Step 5 - returning the div 'menu'
  return menu
}

// Step 6 - Using menuMaker, created a menu using the 'menuItems' array
// and append the returned menu to the header
document.querySelector('.header').appendChild(menuMaker(menuItems))