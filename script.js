let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click',(g)=>{
        if(g.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(g.target.innerHTML== 'AC')
        {
            string = "";
            input.value= string;
        }
        else if(g.target.innerHTML=='DEL'){
            string= string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string += g.target.innerHTML;
        input.value = string;
        }
    })
})