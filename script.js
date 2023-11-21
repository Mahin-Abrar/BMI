let slider1 = document.getElementById("myRange1");       // capturing the values of the sliders 
let output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {                            // adding eventlistener oninput for the type=range;
  output1.innerHTML = this.value;
  updateBMI();
  statu();
}

let slider2 = document.getElementById("myRange2");
let output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  updateBMI();
  statu();
}

let emoji=document.getElementById("demo4"); /// function to calculate the bmi and setting it to only 2 decimals after.
let target=document.getElementById("demo3");
function updateBMI() {
    let weight = parseFloat(output1.innerHTML);
    let height = parseFloat(output2.innerHTML);
    let bmi = weight/(height*height);
    target.innerHTML = bmi.toFixed(2);
  }

function statu(){              //function withif else statement for display of emoji and bmi status
    if (target.innerHTML<18.5){
        emoji.innerHTML="Underweight 🤢";
    }else if(18.5<=target.innerHTML && target.innerHTML<=24.9){
        emoji.innerHTML="Normalweight 🥳";
    }else if (25<=target.innerHTML && target.innerHTML<30){
        emoji.innerHTML="Overweight 🍕";
    }else{
        emoji.innerHTML="Obese 🐘";
    }
}

  
//   Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
