function calculate(){
    var sol=parseInt(Math.floor(Math.random()*11)+1);
   var i=0;
   var j=3;
   while(i<j){
    var current=prompt("ENTER YOUR GUESS NUMBER");
    if(sol==current){
        window.alert("CONGRADULATION,YOUR GUESS IS CORRECT ");
        break;}
    else{ 
       
        if(current>sol){
            window.alert("SORRY TRY AGAIN,YOUR GUESS IS HIGHER THAN THE CORRECT ANSWER");
        }else if(current<sol)
        window.alert("SORRY TRY AGAIN,YOUR GUESS IS LOWER THAN THE CORRECT ANSWER");
    }i++;
    
if(i==j){
    alert("SORRY YOU HAVE LOSS YOUR ALL THREE CHANCES,CORRECT....~");
}
else{
    alert("ANOTHER ONE CHANCE FOR YOU...~");
}}

}
