let btn = document.getElementById('btn');
let clear = document.getElementById('clear');
const age = parseInt(document.getElementById('age').value);
const height = parseInt(document.getElementById('height').value);
const weight = document.getElementById('weight').value;
const result = document.getElementById('result')

btn.addEventListener('click',()=>{
      console.log(age,height,weight)
    let height_status = false,weight_status=false;
    if(height === '' || isNaN(height) || (height<=0)){
        document.getElementById('height-error').innerHTML = "positive numbers only"
    }else{
        document.getElementById('height-error').innerHTML = ""
        height_status=true;
    }
    if(weight === '' || isNaN(weight) || (weight<=0)){
        document.getElementById('weight-error').innerHTML = "positive numbers only"
    }else{
        document.getElementById('weight-error').innerHTML = ""
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight /((height*height)/10000));

        if(bmi <= 16){
            result.innerHTML = "severe thinness"
        }else if(bmi>16 && bmi<=17){
            result.innerHTML = "Moderate thinness"
        }else if(bmi>17 && bmi<=18.5){
            result.innerHTML = "Mild thinness"
        }else if(bmi>18.5 && bmi<=25){
            result.innerHTML = "normal"
        }else if(bmi>25 && bmi<=30){
            result.innerHTML = "overweight"
        }else if(bmi>30 && bmi<=35){
            result.innerHTML = "obese class1 "
        }else if(bmi>35 && bmi<=40){
            result.innerHTML = "obese class2 "
        }else{
            result.innerHTML = "obese class3 "
        }

    }
})

clear.addEventListener('click',()=>{
    age.innerHTML ='';
    weight.innerHTML='';
    height.innerHTML=''
})