/*********    TASK 01 ***********/ 

// function closr(addFirst){
//     return function(addSecond){
//         console.log(addFirst + addSecond)
//     }
// }
// let innerClosrFun = closr(5);
// innerClosrFun(5);


/*********    TASK 02 ***********/ 

// function searchArray(arr, val) {
    
//       // Base case: if the array is empty, return false
//       if (arr.length === 0) {
//         return false;
//       }
      
//       // Check if the first element of the array is equal to the value
//       if (arr[0] === val) {
//         return true;
//       }
      
//       // Recursive case: call the function with the rest of the array
//       return searchArray(arr.slice(1), val);
     
//     }
//     let arr = [1, 2, 3, 4, 5];
//     let val = 4;
//     if (searchArray(arr, val)) {
//       console.log("Value found!");
//     } else {
//       console.log("Value not found.");
//     }
        
/*********    TASK 03 ***********/

// function addParagraph() {
//   // create a new paragraph element
//   const newParagraph = document.createElement("p");
//   let userInp = prompt("Enter any thing !.....")

//   // set the text content of the new paragraph element
//   newParagraph.textContent = userInp;

//   // get the body element of the document
//   const body = document.querySelector("body");

//   // add the new paragraph element to the body element
//   body.appendChild(newParagraph);
// }
// addParagraph();
// addParagraph();

/*********    TASK 04 ***********/ 

// let list = document.getElementById("list")
// function addList(text){
//   let newList = document.createElement("li")
//   newList.textContent = text;
//   list.append(newList)
// }
// addList("hello zeeshan")
// addList("hello ")

/*********    TASK 05 ***********/

function addParaStyle(element , col){
  let elements = document.getElementById("elements").getElementsByTagName(element)
  for(let i = 0; i < elements.length;i++){
  elements[i].style.color = col;

  }
}
addParaStyle('p','green')
addParaStyle('h1','blue')
addParaStyle('h2','orange')
addParaStyle('h3','cadetBlue')
addParaStyle('h4','purple')
addParaStyle('h5','red')


/*********    TASK 06 ***********/ 

/*********    TASK 07 ***********/ 

/*********    TASK 08 ***********/ 