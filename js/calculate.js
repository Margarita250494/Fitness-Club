let button = document.getElementById('btn');

button.addEventListener('click',() =>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status = false, weight_status = false;

    if(height==="" || isNaN(height) || (height <= 0)){
        alert('Please provide a valid height');
    }
    else{
        height_status = true;
    }
    if(weight==="" || isNaN(weight) || (weight <= 0)){
        alert('Please provide a valid weight');
    }
    else{
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi <18.5){
            result.innerHTML = "Underweight: " + bmi;
        }
        else if(bmi>=18.5 && bmi <=24.9){
            result.innerHTML = "Healthy: " + bmi;
        }
        else if(bmi>=25 && bmi <=29.9){
            result.innerHTML = "Overweight: " + bmi;
        }
        else{
            result.innerHTML = "Obese: " + bmi;
        }
    }
    else{
        alert('The form has errors');
        result.innerHTML = "";
    }
})