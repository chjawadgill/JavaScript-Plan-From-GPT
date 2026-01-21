  const toggleButton = document.getElementById("themeToggle");

  toggleButton.addEventListener("click", function () {
    // Check current background color
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  });

let boxes = document.querySelectorAll(".box");

let turn0 = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box)=>{
box.addEventListener("click", () => {
console.log("box was clicked");
box.innerText = "X";
if (turn0){
  box.innerText = "0";
  turn0 = false;
}
  else{
    box.innerText = 'X';
    turn0 = true;
  }
  box.disabled = true;
  checkwinner();
})
})

const checkwinner = () => {
     for (let pattern of winpatterns ){
      let val1 = boxes[pattern[0]].innerText;
      let val2 = boxes[pattern[1]].innerText;
      let val3 = boxes[pattern[2]].innerText;

      if (val1 !="" && val2 != "" && val3 != ""){
        if (val1 === val2 && val2 === val3) {
          console.log (`Winner is ${val1}`);
        }
      }

    
}
}