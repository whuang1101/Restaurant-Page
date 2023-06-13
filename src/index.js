import './style.css';
import food from "./food.jpg"
import { menu as menuDiv} from './menu';
import {contact as contactDiv} from "./contact";



//making each element that needs to be added on the screen.
const content = document.createElement("div");
const body = document.querySelector("body");
content.setAttribute("id","content");
const header = document.createElement("div");
header.classList.add("header");
const mainContent = document.createElement("div");
mainContent.classList.add("main-content")
const footer = document.createElement("div");
footer.classList.add("footer")

//creating the header
//Header - creating title
const title = document.createElement("h1")
title.textContent = "Darrell's Dog Gone Good Diner";
title.classList.add("title");

//Header - creating tab bar
const tabBar = document.createElement("div");
tabBar.className ="tab-bar";
const home = document.createElement("div");
home.className = "home";
home.classList.add("underline")
home.textContent = "Home";
const menu = document.createElement("div");
menu.textContent = "Menu"
menu.className = "menu"
const contact = document.createElement("div");
contact.textContent = "Contact"
contact.className = "contact";


// Where everything is put together
body.append(content);

//The three main sections
content.append(header);
content.append(mainContent);
content.append(footer)

//Fixed Header
header.append(title);
header.append(tabBar);
tabBar.append(home);
tabBar.append(menu);
tabBar.append(contact);

//Main Content-Creating the home page
const mainScreen = document.createElement("div");
mainScreen.className = "main-screen";
mainContent.append(mainScreen);
const bestRestaurant = document.createElement("div");
bestRestaurant.textContent = "Best food in all of North Florida!";
mainScreen.append(bestRestaurant)
const restaurantImage = document.createElement("img");
restaurantImage.src = "https://lh3.googleusercontent.com/p/AF1QipOL4wvLxO2B9_GbS42gLJAyV3fvzFoZmvU_MsAu=s1360-w1360-h1020";
restaurantImage.alt = "A picture of the restaurant";
restaurantImage.classList.add("restaurant-image");
const founded = document.createElement("div");
founded.textContent = "Founded in 2016";
const order = document.createElement("div");
order.textContent = "Order Now!"
mainScreen.append(restaurantImage);
mainScreen.append(founded);
mainScreen.append(order);

//Make Footer
const copyRightText = document.createElement("div");
copyRightText.textContent = "Copyright © 2023 whuang1101";
copyRightText.className = "copyright"
footer.append(copyRightText);
const mainMenu = menuDiv();
mainMenu.classList.add("hide");
mainContent.append(mainMenu);


const mainContact = contactDiv();
mainContact.classList.add("hide");
mainContent.append(mainContact);
// Making the tab bar work
menu.addEventListener("click",() => {
    mainScreen.classList.add("hide");
    mainMenu.classList.remove("hide");
    home.classList.remove("underline");
    menu.classList.add("underline");
    contact.classList.remove("underline")
    mainContact.classList.add("hide");
})
home.addEventListener("click",() => {
    mainScreen.classList.remove("hide");
    mainMenu.classList.add("hide");
    home.classList.add("underline");
    menu.classList.remove("underline");
    contact.classList.remove("underline");
    mainContact.classList.add("hide");
})
contact.addEventListener("click", () => {
    menu.classList.remove("underline");
    home.classList.remove("underline");
    contact.classList.add("underline");
    mainMenu.classList.add("hide");
    mainScreen.classList.add("hide");
    mainContact.classList.remove("hide");
})