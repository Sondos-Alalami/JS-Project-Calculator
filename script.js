var  result, operator, current=0, memory=0, numberSt="";
var array=[];
var operatorIsClicked, op="";



function calculate(calc) {
   
    var ops = [{'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
           
       
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
                
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        return 'Error';
    } else {
        
        
         return (Math.round(calc[0] * 100000000) / 100000000);
        
    }
}



const calculator=document.querySelector('.calculator');
const keys = calculator.querySelector('.keys_container');

var number= document.getElementsByClassName("number");
const display=document.querySelector('.box');



    keys.addEventListener('click', e => {
        if (e.target.matches('.number')) {
         
          var key=e.target;
       
       numberSt +=key.textContent;
       
       current = parseFloat(numberSt);
       console.log(numberSt);
       console.log(current);
       display.textContent= numberSt;
       operatorIsClicked=false;
      
        }
      
    })

    keys.addEventListener('click', e => {
    if (e.target.matches('.operator')) {
               
        
        if (operatorIsClicked===false){
            
            if(current===0 && op==="/"){
            display.textContent="Error";
            alert("You are dividing by Zero !!");
            clearr();
            
            }
            
            else {
                  if (numberSt !=="") {
            array.push(current);}
             
            op= e.target.id;
            console.log(op);
            array.push(op);
            console.log(array);
            current=0;
            numberSt="";
            operatorIsClicked=true;}
            
           
           }
        else {
               display.textContent="Error";
           } 
           
        }})
     

    keys.addEventListener('click', e => {
        if (e.target.matches(".equal")){
            
            if(current===0 && op==="/"){
                display.textContent="Error";
                alert("You are dividing by Zero !!")
                clearr();
               }
                
           else if (numberSt !==""){
            array.push(current);
             
            var outcome=calculate(array);
             display.textContent=outcome;
             current=0;
             numberSt="";
             op="";
             array=[outcome];
             
             console.log(array);}
          
             
        }
         
       })

       const opp=document.getElementsByClassName("opp");


    keys.addEventListener('click', e => {
        if (e.target.matches(".opp")){
           
            if (e.target.id==="root"){

                if (numberSt==="" && array.length===1){
                var result=Math.sqrt(array[0]);
                rounded=Math.round(result * 100000000) / 100000000;
                console.log(array);
                array=[rounded];
                console.log(array);
                display.textContent=rounded;

               } 

               

               else if( numberSt !== "" && current >= 0)
               {
                   var result=Math.sqrt(current);
                   rounded=Math.round(result * 100000000) / 100000000;
                   array=[rounded];
                   current=0;
                   numberSt="";
                   console.log(current);
                   console.log(numberSt);
                   display.textContent=rounded;
               }
              else{
                display.textContent="Error";
               }

           }
           
        else if (e.target.id==="modulas"){
            if (numberSt==="" && array.length===1){
                var result=array[0]/100;
                
                
                console.log(array);
                array=[result];
                console.log(array);
                display.textContent=result;

               } 

               

               else if( numberSt !== "")
               {
                   var result=current/100;
                   
                   array=[result];
                   current=0;
                   numberSt="";
                   console.log(current);
                   console.log(numberSt);
                   display.textContent=result;
               }
              else{
                display.textContent="Error";
               }  
           }
       }})

       keys.addEventListener('click', e => {
        if (e.target.matches("#minus")){
          
            if (numberSt==="" && array.length===1){
                var result=-1*array[0];
                array=[result];
                display.textContent=result;


            }
            else if (numberSt==="" ){
                numberSt= "-";
                display.textContent= numberSt;
            }
            else if(numberSt==="-"){
                numberSt= "";
                display.textContent= numberSt;
            }
            else{
                if(current>0){
            numberSt= "-" + numberSt;
           
            current= -1*current;
            display.textContent= current;
            console.log(current);
            console.log(numberSt);}
               else{
                numberSt= numberSt.substring(1);
           
                current= -1*current;
                display.textContent= current;
                console.log(current);
                console.log(numberSt);
               }
            }
        }})
            
       

        keys.addEventListener('click', e => {

                  if (e.target.matches('.currency')) {

                   var rate, result;
                     if (e.target.id==="shekelDollar"){
                        rate=0.29293;
                        console.log(rate);}
                     else if (e.target.id==="dollarShekel"){
                        rate=3.41357;
                        console.log(rate);}
                     else if (e.target.id==="ShekelEuro"){
                            rate=0.252605;
                            console.log(rate);}
                     else {
                            rate=3.95814;
                            console.log(rate);}

                    if (numberSt==="" && array.length===1){
                         result=array[0]*rate;
                         rounded=Math.round(result * 100000000) / 100000000;
                         array=[rounded];
                         display.textContent=rounded;
                            
                        } 
                    else if (numberSt !== "" && current >= 0){
                        console.log(current);                       
                        result= current*rate;
                        rounded=Math.round(result * 100000000) / 100000000;
                        array=[rounded];
                        current=0;
                        numberSt="";
                         display.textContent=rounded;
                                              
                         } 
                    else {
                        display.textContent="Error";
                    }
                    console.log(array);               
        }})



       const clear=document.getElementById("clear");

       clear.addEventListener('click',clearr);
       function clearr(){
             display.textContent="";
            numberSt="";
            current=0;
             array=[];
             m=[];
             op="";
             operatorIsClicked=true;
             console.log("cleared");
             
           
           }


    



