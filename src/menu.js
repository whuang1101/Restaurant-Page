import "./menu_style.css";
function makeMenuItem (foodName, foodPrice,foodIngredients,mainMenu){
    const firstItem = document.createElement("div");
    firstItem.classList.add("menu-items");
    const firstFood = document.createElement("div");
    firstFood.classList.add("split");
    const firstName = document.createElement("div");
    const firstPrice = document.createElement("div");   
    firstName.textContent = foodName;
    firstPrice.textContent = foodPrice;
    firstFood.append(firstName);
    firstFood.append(firstPrice);
    firstItem.append(firstFood);
    const firstIngredients = document.createElement("div");
    firstIngredients.textContent = foodIngredients;
    firstIngredients.classList.add("ingredients");
    firstItem.append(firstIngredients);
    mainMenu.append(firstItem);
}
function menu (){
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");
    const breakfast = document.createElement("div");
    breakfast.textContent = "Breakfast";
    breakfast.className = "breakfast";
    mainMenu.append(breakfast);
    makeMenuItem("Egg & Cheese Breakfast Sandwich","$2.75","Eggs, Cheese, and Croissant",mainMenu);
    makeMenuItem("Eggs","$4.50","Two (2) eggs served with toast. Your choice of grits, hash browns or home fries.",mainMenu);
    makeMenuItem("Two Egg Omelet with Toast","$6.49","With your choice of 2 (2): cheese, tomatoes, ham sausage, bacon, onion, mushrooms, green peppers, salsa. Choose your choice of home fries, hash browns or grits.",mainMenu);
    makeMenuItem("2 Eggs Any Way","$5.99","Toast and your choice of bacon or sausage and choice of potato or grits, toast and your beverage.",mainMenu);
    makeMenuItem("Darrell's \"Famous\" Scramble Cheese Eggs with Toast", "$5.49", "Your choice of grits, hash browns or home fries.",mainMenu);
    return mainMenu;
}

export {menu};

