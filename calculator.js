let text = document.getElementsByClassName("cal");
let buttons = document.querySelectorAll("button");
let val=document.getElementById("value");
let cal=document.getElementById("submit");
textValue="";
for(item of buttons){
    item.addEventListener("click",(ele)=>{
        buttonText=ele.target.innerText;
        console.log(`clicked ${buttonText}`);
        
    if(buttonText=="X"){
        buttonText="*";
        textValue+=buttonText;
        text[0].value+= textValue;
    }else if(buttonText=="C"){
        textValue="";
        text[0].value=textValue;
    }else if(buttonText=="="){
        buttonText="";
    val.innerHTML=eval(text[0].value);
    console.log(eval(text[0].value));
    }
    else{
        text[0].value+=buttonText;  
    }
    
})
} 
cal.addEventListener("click",()=>{
    buttonText="";
    val.innerHTML=eval(text[0].value);
    console.log(eval(text[0].value));  
})
