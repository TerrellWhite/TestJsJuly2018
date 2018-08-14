function printMessage()
{
    x = 10;
    for (var i = 0; i <= x; i++) {
        console.log(i);
    }
    //console.log("Hello");
}
function add()
{
    var num1 = parseInt(document.getElementById("num1").value); 
    var num2 = parseInt(document.getElementById("num2").value);

    var result = num1 + num2;
    //alert(result);
    document.getElementById("result").innerText = "result =" + result;
}
var itemCount = 0;
function addToList()
{
    var itemName = document.getElementById("itemName");
    var quantity = document.getElementById("quantity");

    var row = shoppingList.insertRow(1);

    var cell1 = row.innerCell(0);
    var cell2 = row.innerCell(1);

    cell1.innerHTML = itemName;
    cell2.innerHTML = quantity;
}