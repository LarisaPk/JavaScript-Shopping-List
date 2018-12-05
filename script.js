/* -creating variables for Name and question in prompt
-adding Name and some greeting text to the page 
*/

var myName = "";//creates variable for the name input used in prompt  

do {
        myName = prompt("What is your name?");// asks for the name until user insert in into the prompt field
    } 
 while (myName == ""||myName == null) // do so while name is not given or user pressed Cancel button

    // when user insert the name into the prompt field greeting is printed on the screen
    document.getElementById("greeting").innerHTML = "Hello "+ myName +"! </br> Please, add items and their quantity </br>to your shopping list";
 
function addToList() {// function that adds shopping items to the list
   
   var item = document.getElementById("itemName").value; //sets variable and gets value from the input field id="itemName"
   var quantity = document.getElementById("itemQuantity").value; //sets variable and gets value from the select id="itemQuantity"
   var f= document.body.children[1].children[0]; // assignd input field to variable f
   //var s = document.body.children[1].children[1].value; // assigns value of select input field to variable s
    if (item!="" && quantity!=""&& item!="Write item's name here") { // validates for emptiness(and "Write item's name here" text can not be a shopping item). If fields are not emplty - shopping item will be added to the list.
    
       var text = item  +" "+ quantity+ " kpl/kg/l"; // sets variable and cteates text for the shopping list
       var textnode = document.createTextNode(text); //creates a text node
       var node = document.createElement("li"); // create <li> node
       node.appendChild(textnode); //Appends the text to <li>
       document.getElementById("shoppingList").appendChild(node) //Appends <li> to <ol> with id="shoppingList"
       var box= document.createElement("INPUT");// creates input element
       box.setAttribute("type", "checkbox");// sets checkbox atrubutes to the input element created
       node.appendChild(box);//assigns checkbox to <li> element
       f.style.borderColor="#ccc";//chenges input field boder color to normal
       document.body.children[1].children[1].style.borderColor="#ccc";////chenges input select field boder color to normal
       box.style.float="right" //positiones all checkboxes on the right side of the li. 
       box.style.width="20px" ;//changes width of the checkbox to 20px
       box.style.height="20px";//changes height of the box to 20px
       box.style.margin="0px"//sets margin to 0
       }
// if quantity field is empty - alart will say "You forgot to insert quantity" and field will turn red. 
    if (item!=""&&item!="Write item's name here" && quantity==""){
       alert("You forgot to insert quantity"); 
       document.body.children[1].children[1].style.borderColor="red"; 
       f.style.borderColor="#ccc";//chenges input field boder color to normal 
    }
// if item's name field is empty - alart will say "You forgot to insert item's name" and field will turn red. also "Write item's name here" appears in the field    
    if ((item==""||item=="Write item's name here") && quantity!="" ) {
        alert("You forgot to insert item's name"); 
        f.style.borderColor="red";//changes input field border color to red
        var help = document.getElementById("itemName").value="Write item's name here"// writes into the field for item name "Write item's name here"
        document.body.children[1].children[1].style.borderColor="#ccc";//chenges input select field boder color to normal
    }
// if quantity field is empty and item's name field is empty  - alart will say ""You forgot to insert item's name and quantity"" and fields will turn red. also "Write item's name here" apears in the field   
   if ((item=="" || item=="Write item's name here")&& quantity=="")  {
       alert("You forgot to insert item's name and quantity"); // alert will pop up
       document.body.children[1].children[1].style.borderColor="red"; // changes input quantity field border color to red
       f.style.borderColor="red";//changes input field border color to red
       var help = document.getElementById("itemName").value="Write item's name here"// writes into the field for item name "Write item's name here"
    }
     
}

var timer; // sets timer variable
function startInt(){ // function that changes greeting to "Name here is your shopping list" text, 6s after user clicks on button "add to shopping list"
   timer=window.setTimeout(newGreeting, 6000);   // sets timeout, newGreeting function will work in 6 s. 
}
function newGreeting(){ // function used in timer. sets new innerHTML to into greeting
    document.getElementById("greeting").innerHTML=myName+ ", here is your shopping list"
}

function deleteItem(){ //function that deletes items if boxes was checked
    var x = document.body.children[2].childElementCount;//sets variable, counts number of children of <ol> and assigns this numbet to the variable x
     for (i=0; i<x; i++) {// checks all <li> from the beginning till the end
        
        if (document.body.children[2].children[i].children[0].checked==true) {//if it finds <li> with box checked
        document.body.children[2].removeChild(document.body.children[2].children[i]);//  it deletes the <li>
        i--;// decreases i variable by 1 so next round it will start again from the same one (same child number needed to be checked if item was deleted and new one moved to it's place)
        x = document.body.children[2].childElementCount;//checks again how many children left and assings number to x variable
        console.log(x);// logs x value to the console
        }
        else {//if box is not checked - continues checking the next item in the list
        continue;} 
    }
}
// deletes all the items from the list
function deleteAllItems(){
    var x = document.body.children[2].childElementCount;//sets variable, counts number of children of <ol> and assigns this numbet to the variable x
    for (i=0; i<x; i++){
    document.body.children[2].removeChild(document.body.children[2].children[i]);//  it deletes the first <li> element
        i--;// decreases i variable by 1 so next round it will start again from the 0
        x = document.body.children[2].childElementCount;//checks again how many children left and assings number to x variable
    }
}
// asks for confirmation if user wants to delete all items. When pressed OK- items will be deleted. When Cancel- items will not be deleted.
function confirmation(){
    var c = confirm("Are you sure that you want to delete all items?")// pop up with confirmation message appears
    if (c==true){
       return deleteAllItems();// of pressed OK deletes all items
    }
    else {// if pressed cansel returnes false
       return false;
    }
}

function hideFields(){// hides and shows back input fields dependind on the situation
    var r = document.body.children[4].value;
    if (r=="ready"){// checks if valuse if ready function will hide the input fields
    document.getElementById("shoppingForm").style.display="none";// hides the fields
    document.body.children[4].value = "show";//changes the button valuse to "show
    document.body.children[4].innerHTML="Show input fields"//change the text in the button to "show input fields"
    }
    if (r=="show"){// if button value is "show" function will show the hidden input fields
      document.getElementById("shoppingForm").style.display="block";// showing the input fields
     document.body.children[4].value = "ready";//chanes button value to ready
     document.body.children[4].innerHTML="List is ready"// changes text in the button to "list is ready
    }
}