function checkAge(){
    let inp = document.getElementById('vot_inp');
    let res = document.getElementById('res');
    if(inp.value >= 18 && inp.value <= 100){
        res.innerHTML = "You are Eligible";
        res.style.color = "green";
    }else if(inp.value < 18 && inp.value >=10){
        res.innerHTML = "Not Eligible(You are votting age is soon !)";
        res.style.color = "orange";
    }else if(inp.value >= 1 && inp.value < 10){
        res.innerHTML = "Not Eligible(You are too young !)";
        res.style.color = "pink";
    }else if(inp.value > 100){
        res.innerHTML = "You are Eligible(Need special permission !)";
        res.style.color = "blue";
    }else{
        res.innerHTML = "Enter valid Age !";
        res.style.color = "red";
    }
}