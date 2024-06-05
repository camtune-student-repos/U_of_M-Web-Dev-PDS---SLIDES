/* Declaring and itializing Fruits Array */
let fruits = ["Apples", "Peaches", "Pears", "Oranges"];

/* When page loads function is called. Displaying the elements
of array in the HTML element with ID "fruits" */
function LoadFruits() {
    document.getElementById("fruits").innerHTML = fruits;
};

/* With a button event function is called. Promting you
to add your favorite fruit thern adding this element to the array. */
function myFunction() {
 var fruit = prompt("What is your favorite fruit?"); 
 /* add this fruit to whole array 
Becuase you are using a varibale here and not hard coding the number.
Your program will work no matter how many elements
  */
 fruits[fruits.length] = fruit;
 document.getElementById("fruits").innerHTML= fruits;


/* To add to your array your need:
1. The array name
2. Give it an index - easiet way to add to an array is
just use the length of itself... array.length*/


  