

let inputBox = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');



// console.log(buttons)

buttons.forEach((button)=>{
    // console.log(button.innerText)

    button.addEventListener("click",(event)=>{
        // console.log(button.innerText)
        // console.log(event.target.innerHTML);
        
        if(event.target.innerHTML == 'AC')
        {
            inputBox.value = "";
            
        }
        else if(event.target.innerHTML == "=")
        {
            inputBox.value=eval(inputBox.value)
        }
        else{
            inputBox.value += event.target.innerHTML; 
        }
    })
})