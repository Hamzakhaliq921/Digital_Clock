
const clock=document.getElementById('clock')
customtime=null
let zeroTime = false;
let stopclock=false;
setInterval(()=>{

      if (stopclock) return; 
     if(zeroTime){
        clock.innerHTML=customtime.toLocaleTimeString([],{hour12:false})
        customtime.setSeconds(customtime.getSeconds() + 1);
    return;
     }
  const date=new Date
   if(customtime===null){
       clock.innerHTML=date.toLocaleTimeString()
   }
   
   else{
    clock.innerHTML=customtime.toLocaleTimeString()
    customtime.setSeconds(customtime.getSeconds()+1)
   }
   

},1000)

function setTime(){
   const h=parseInt(document.getElementById('h').value)
    const m=parseInt(document.getElementById('m').value)
    const s=parseInt(document.getElementById('s').value)
    if(h<0||h>23||isNaN(h)||m<0||m>59||isNaN(m)||s<0||s>59||isNaN(s) ){
        alert('Enter Valid Time');
        return;
    }
    customtime=new Date
    customtime.setHours(h,m,s,0)
      
}
function ResetTime(){
customtime=null;
zeroTime=false
}
function setZeroTime(){
    zeroTime=true
    customtime = new Date();
  customtime.setHours(0, 0, 0, 0);
}
function resume(){
   stopclock=false
}
function stop(){
    stopclock=true
}