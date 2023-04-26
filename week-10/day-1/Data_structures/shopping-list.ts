let shoppingList: string[] = new Array("eggs", "milk", "fish", "apple", "bread", "chicken");
function checkShoppingList(): void {
    if (shoppingList.indexOf("milk") >= 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
    if (shoppingList.indexOf("bananas") >= 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
console.log(checkShoppingList());
//dont know why it returns me undefined in terminal