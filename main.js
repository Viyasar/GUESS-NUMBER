function calculate(){
    var sol=parseInt(Math.floor(Math.random()*11)+1);
   var i=0;
   var j=3;
   while(i<j){
    var current=prompt("𝔼ℕ𝕋𝔼ℝ 𝕐𝕆𝕌ℝ 𝔾𝕌𝔼𝕊𝕊 ℕ𝕌𝕄𝔹𝔼ℝ ");
    if(sol==current){
        window.alert("𝕔𝕠𝕟𝕘𝕣𝕒𝕕𝕦𝕝𝕒𝕥𝕚𝕠𝕟 ,𝕪𝕠𝕦𝕣 𝕘𝕦𝕖𝕤𝕤 𝕚𝕤 𝕔𝕠𝕣𝕣𝕖𝕔𝕥...~");
        break;}
    else{ 
       
        if(current>sol){
            window.alert("𝕊𝕆ℝℝ𝕐 𝕋ℝ𝕐 𝔸𝔾𝔸𝕀ℕ , 𝕐𝕆𝕌ℝ 𝔾𝕌𝔼𝕊𝕊 𝕀𝕊 ℍ𝕀𝔾ℍ𝔼ℝ 𝕋ℍ𝔸ℕ 𝕋ℍ𝔼 ℂ𝕆ℝℝ𝔼ℂ𝕋 𝔸ℕ𝕊𝕎𝔼ℝ");
        }else if(current<sol)
        window.alert("𝕊𝕆ℝℝ𝕐 𝕋ℝ𝕐 𝔸𝔾𝔸𝕀ℕ , 𝕐𝕆𝕌ℝ 𝔾𝕌𝔼𝕊𝕊 𝕀𝕊 𝕃𝕆𝕎𝔼ℝ 𝕋ℍ𝔸ℕ 𝕋ℍ𝔼 ℂ𝕆ℝℝ𝔼ℂ𝕋 𝔸ℕ𝕊𝕎𝔼ℝ");
    }i++;
    
if(i==j){
    alert("𝕊𝕆ℝℝ𝕐 𝕐𝕆𝕌 ℍ𝔸𝕍𝔼 𝕃𝕆𝕊𝕊 𝕐𝕆𝕌ℝ 𝔸𝕃𝕃 𝕋ℍℝ𝔼𝔼 ℂℍ𝔸ℕℂ𝔼𝕊 , ℂ𝕆ℝℝ𝔼ℂ𝕋 𝕀𝕊:"+sol);
}
else{
    alert("𝔸ℕ𝕆𝕋ℍ𝔼ℝ 𝕆ℕ𝔼 ℂℍ𝔸ℕℂ𝔼 𝔽𝕆ℝ 𝕐𝕆𝕌...~");
}}

}
