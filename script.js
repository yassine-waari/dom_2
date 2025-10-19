document.addEventListener("DOMContentLoaded", function(){
  // Select elements from the HTML
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  changeColorBtn.addEventListener("click",function(){
    const newcolor = getRandomColor();
    colorBox.style.backgroundColor = newcolor ;
  }); 
});


 function  getRandomColor(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor ;
  }