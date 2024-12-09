
let shoppingListArray = [];

// function responsible for adding an item
function addItem () {
    document.getElementById("addButton").addEventListener("click", function() {
        // get input values
        const itemText = document.getElementById("itemInput").value;
        const priceText = document.getElementById("priceInput").value
        const errorText = document.getElementById("errorMessage");
        // check if both text boxes have inputs
        if (itemText === "" || priceText === "") {
            errorText.textContent = "Please enter both an item and price"
            return;
        } else errorText.textContent = "";
        // capture what item was added into the text box
        const li = document.createElement("li");
        // create 'mark as completed' checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginLeft = "10px";
        // strikes-through an item based on the change (whether it is checked or not)
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        // prints the item and price
        li.textContent = (`${itemText} - Ksh ${priceText}` );
        // add the checkbox next to the li
        li.appendChild(checkbox);
        // add it as a list item under <ul>
        document.getElementById("shoppingList").appendChild(li);
        // push to shopping list to array
        shoppingListArray.push({item: itemText, price: priceText})
        // back to default the text box goes after an item is added
        document.getElementById("itemInput").value = "";
        document.getElementById("priceInput").value = "";
        });

}
// calls function
addItem();

// function responsible for clearing all items from the list
function clearList () {
    document.getElementById("clearListButton").addEventListener("click", function() {
        const shoppingList = document.getElementById("shoppingList");
        // clear everything in the <ul> (list)
        shoppingList.innerHTML = "";
        
        // clear array as well
        shoppingListArray = [];
    });
}
// calls function
clearList();
