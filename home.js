//naming conventions is not properly handle because it my first project!
  //select all html elements

    const scoretable=document.getElementById('selectball'); 
    const ball=document.getElementById('ball'); 
    const yorkercall=document.getElementById('yorkercall'); 
    const lengthcall=document.getElementById('lengthcall');
    const shortcall=document.getElementById('shortcall');
    const hit=document.getElementById("hit");
    const bowl=document.getElementById("bowl");
    const bo =document.getElementById("bo");
    const hruns =document.getElementById("hruns");
    const hwikt =document.getElementById("hwikt");
    const remainingball =document.getElementById("remainingball");
    const bat =document.getElementById("bat");
    const bats =document.getElementById("bats");
    const bowlsman =document.getElementById("ballsman");
    const batsmans =document.getElementById("batsman");
    const flip =document.getElementById("flip");
    const flipt =document.getElementById("flipt");
    const heads =document.getElementById("heads");
    const tails =document.getElementById("tails");
    const cointossms =document.getElementById("cointossms");
    const bowlingani =document.getElementById("blls");
    const bowlinganilength =document.getElementById("ballsman");
    const start =document.getElementById("start");
    const cont =document.getElementById("cont");
    const ingdiv =document.getElementById("cointoss1");
    const head =document.getElementById("head");
    const startsecin =document.getElementById("startsecin");
    const cont2 =document.getElementById("cont2");
    const ingdiv2=document.getElementById("start1bowl");
    const head2=document.getElementById("head2");
    const startsecin3 =document.getElementById("startsecin3");
    const cont3 =document.getElementById("cont3");
    const ingdiv3=document.getElementById("start1bat");
    const head3=document.getElementById("head3");
    const startsecin2 =document.getElementById("startsecin2");
    const startnumber =document.getElementById("startnumber");
    const bowlingbt=document.getElementById("bowlingbt");
    const cointosss=document.getElementById("cointosss");
    const playern=document.getElementById("player1");
    const playerr=document.getElementById("player2");

//code lines for toss
//this is followed by 0 or 1 probality

    cointosss.style.display="flex";
    cointoss()

    function cointoss() {
       
      flipt.addEventListener("click",()=>{   
             heads.style.display="flex";
             tails.style.display="flex";
             //giving value of 01 and get these number by math.import method
             probality=("1010")
             computer=("1010")
             var coin=probality.charAt((Math.floor(Math.random()*4)))
             var computer=computer.charAt((Math.floor(Math.random()*4)))
       
     
         heads.addEventListener("click",()=>{
             heads.style.display="none";
             tails.style.display="none";
             if (coin==1) {
             flip.textContent="HEAD"
             cointossms.style.display="flex"
             flip.style.left="40%"
             flip.style.paddingLeft="40px"
             flip.style.paddingRight="40px"       
             cointossms.textContent="you won and choose batt or bowl "
             bowlingbt.style.display="flex"
             battingbt.style.display="flex"     
            }

               else if(coin==0){
                    if(computer==1){
                      flip.textContent="TAIL"
                      cointossms.style.display="flex"
                      cointossms.textContent="computer choose to batting"
                      bowlingbt.style.display="flex"
                      }
                     else{
                       flip.textContent="TAIL"
                       cointossms.style.display="flex"
                       cointossms.textContent="computer choose to bowling"
                       battingbt.style.display="flex"
                      }
                              }
         })

         tails.addEventListener("click",()=>{
             heads.style.display="none";
             tails.style.display="none";
                if (coin==1) {
                   flip.textContent="TAIL"
                    cointossms.style.display="flex"
                   cointossms.textContent="its heads"
                   cointossms.textContent="you won and choose batt or bowl "
                   bowlingbt.style.display="flex"
                   battingbt.style.display="flex"
                          }

                else if(coin==0){
                  flip.textContent="HEAD"
                  flip.style.left="40%"
                  flip.style.paddingLeft="40px"
                  flip.style.paddingRight="40px"
                       if(computer==1){
                        cointossms.style.display="flex"
                        cointossms.textContent="computer choose to batting"
                        bowlingbt.style.display="flex"
                                     }

                       else{
                         cointossms.style.display="flex"
                         cointossms.textContent="computer choose to bowling"
                         battingbt.style.display="flex"
           
                           }
          }})})}
    


//code lines for firstbowling
//how batting works? :    i just asumme a value of 25 numbers which is cricket runs "6,4,2,1" 
//                    and allow computer to select one number by math.random method and write a logic for each output
//                    ex; if six=runs+6

function firstbowling(){
  
  bowl.style.display="none";
  cointosss.style.display="none"
  cont2.style.display="flex"
  ingdiv2.style.display="flex"
  ingdiv2.style.position="absolute"
  head2.style.display="flex"
  startsecin2.style.display="flex"
  startsecin2.addEventListener("click",()=>{
  startbowling1()
  bowl.style.display="flex";
  })
  
//declar variables

let Ahitrun=0
let Awiket=10
let Aover=20
let Aballs=6
let Ainitialballs=Aballs 



bowlingani.style.display="none";
bowlingani.style.animationName="none";


function startbowling1(){
  cont2.style.display="none"
  ingdiv2.style.display="none"
  ingdiv2.style.position="none"
  head2.style.display="none"
  startsecin2.style.display="none"
  scoretable.style.display="flex";

 

startbowl ()
function startbowl (){

  sa()
  function sa(){


  //set timeout for bowling button refresh

       let r= setTimeout(() => {
          bowlingani.style.animationName="none";
          bowlinganilength.style.display="none";
          bowl.style.display="flex";
          batsmans.style.animationName="none";
          if(Awiket==0){
             bowl.style.display="none";
             end1in()
             } 
        }, 3000);
  
      }

//after click bowl button

bowl.addEventListener("click",()=>{
  bowl.style.display="none";

  intime=4
  let st=setInterval(() => {
    intime--;
   
  if (intime==0) {
    clearInterval(st)
  }
  
  }, 900);

//bowling animation
  ab()
  function ab (){
  bowlingani.style.display="flex";
  bowlingani.style.animationName="animation-runing";
  bowlinganilength.style.display="flex";
  bowlinganilength.style.animationName="bowling-animation-lengths";
  
  }
  

//for over change

if (Aballs>0){
    Aballs-=1
    remainingball.textContent=`YOU HAVE REMAINING ${Aballs} BALL IN THIS OVER`
    
}


if(Aballs==0){
    Aover-=1
    remainingover.textContent=Aover
    Aballs=Ainitialballs

}
if (Aover==0){
    gameover()
}

//-------------------------

//main lines 
//set time out because these lines happen after the bowling animation

setTimeout(() => {
 const run=("6421064210642106421064210")


 var result=run.charAt((Math.floor(Math.random()*24+1)))
 let scoretable=document.getElementById("scoretable");

  if(result==0){
 
   out=Awiket-=1 
   let wikts=10-Awiket
   hwikt.textContent=wikts
   bo.textContent=`remaining ${out} Awiket` 
   bowl.style.display="none";
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
   sa()
 
 }
 else if (result==6){

    scoretable=Ahitrun+=6
    bo.textContent="its a six....."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-six";
    sa()
}
  else if (result==4){

    scoretable=Ahitrun+=4
    bo.textContent="its a four....."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
    sa()
  }
  else if (result==3){

   scoretable=Ahitrun+=3
    bo.textContent="its a amazing 3 runs"
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
    sa()
  }
  else if (result==2){

    scoretable=Ahitrun+=2
    bo.textContent="its good 2 runs"
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-two";
    sa()
  }

  else if (result==1){

    scoretable=Ahitrun+=1
    bo.textContent="its  1 run......."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-one";
    sa()
  }
}, 1500); 
}

)

clearTimeout(r)
bowl.style.display="none";
}


//after 20 overs end and all witets gone this fuction will call
//it just provide gate for second innings

function end1in(){
  
 
  cont.style.display="flex"
  ingdiv.style.display="flex"
  ingdiv.style.position="absolute"
  head.style.display="flex"
  startsecin.style.display="flex"
  cont.textContent=`you have to score ${Ahitrun} runs in 20 overs`

   startsecin.addEventListener("click",()=>{
    bowl.style.display="none";
    batting2()
    })
  
  }
}

//------------------------------------

//second innings
//how batting code lines work? : if player click "throw" button the timeset happen for 15 sec 
//                              at what time the player clicks the "hit" button the gona add
//                              ex; if player clicks the hit button at 6th sec it will be six 



        bowl.style.display="none";

        let Bresult=0
        let Bwiket=10
        let Bover=20
        let Bballs=6
        let Binitialballs=Bballs 
        let prun=0


bowlingani.style.display="none";
bowlingani.style.animationName="none";

function batting2(){
  bowl.style.disply="none"
  hwikt.textContent=0
  cont.style.display="none"
  ingdiv.style.display="none"
  ingdiv.style.position="none"
  head.style.display="none"
  startsecin.style.display="none"
  scoretable.style.display="flex";


 start.style.display="flex"
 start.addEventListener("click",()=>{
 hit.style.display="flex";
 start.style.display="none"
 batt()
 bowlingani.style.display="flex";
 bowlingani.style.animationName="animation-runing";
 bowlinganilength.style.display="flex";
 bowlinganilength.style.animationName="bowling-animation-lengths";
})


function batt (){

//lines for over change

  let b=Bballs-=1;
  remainingball.textContent=`YOU HAVE REMAINING ${b} BALL IN THIS OVER`
  
  if(Bballs==0){
  Bover-=1
  remainingover.textContent=Bover
  Bballs=Binitialballs
               }

 if (Bover==0){
 end1in()
              }


//-----------------------------

           // here we declar time interval
           //start variable is throw button

          timeleft=15;
             const ct= setInterval(() => {
              timeleft--;

               if(timeleft < 0){
               y()
                   }
                   }, 120);

function y(){

   clearTimeout(ct)
      hit.style.display="none";
      remainingball.textContent=`YOU HAVE REMAINING ${Bballs} BALL IN THIS OVER`
      bo.textContent="YOU MISS THIS BALL"
      timeleft=15;
      bowlingani.style.display="none";
      bowlinganilength.style.display="none";
      start.style.display="flex"
     }

        //if player click the hit button it will hapen

        hit.addEventListener("click",()=>{z()
         batsmans.style.animationName="batting-animation-action"; hit.style.display="none";   clearInterval(ct) })

  
function z(){

  if(Bwiket==0){
    end1in()
   }

 else if(timeleft>9){
 
   out=Bwiket-=1 
   let wikts=10-Bwiket
   hwikt.textContent=wikts
   bo.textContent=`remaining ${out} Awiket` 
   bowl.style.display="none";
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
   timeleft=0
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
}

  else if (timeleft>=8 && timeleft<9){

    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";  
  }

  else if (timeleft>=7 && timeleft<8){
     
    bowlsman.style.animationName="bowling-animation-four";
    Bresult+=1
    prun+=1
    bo.textContent="its  1 run......."
    hruns.textContent=Bresult
    timeleft=0
    bowlsman.style.animationName="bowling-animation-two";
  }
  else if (timeleft>=6 && timeleft<7){
     
    bowlsman.style.animationName="bowling-animation-two";
    Bresult+=2
    prun+=2
    bo.textContent="its good 2 runs"
    hruns.textContent=Bresult
    timeleft=0
  }

  else if (timeleft>=5 && timeleft<6){

    bowlsman.style.animationName="bowling-animation-six";
    Bresult+=6
    prun+=6
    bo.textContent="its a six....."
    hruns.textContent=Bresult
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-six"
  }
  
  else if (timeleft>=4 && timeleft<5){
    bowlsman.style.animationName="bowling-animation-four";
    Bresult+=4
    prun+=4
    bo.textContent="its a four....."
    hruns.textContent=Bresult
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
  }

  else if (timeleft>=2 && timeleft<4){
    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
  }

  else if(timeleft>1 && timeleft<2){
 
    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
 
   }

    bowl.style.display="none";
    if(Bwiket==0){
    end1in()
    }
   
  
// here we declar you won fuction  

   bowlingani.style.animationName="none";
start.style.display="flex"
if (Bresult>Ahitrun) {
  cont.style.display="flex"
ingdiv.style.display="flex"
ingdiv.style.position="absolute"
head.style.display="flex"
head.textContent="you won"
cont.textContent=`you won by  ${Bwiket} wiket`
} 
} 
}
}
}


//all the code lines are similar but reversed because of first batting


function firstbatting(){
       cointosss.style.display="none"
bowl.style.disply="none"
  cont3.style.disply="flex"
  ingdiv3.style.display="flex"
  ingdiv3.style.position="absolute"
  head3.style.display="flex"
  startsecin3.style.display="flex"
  startsecin3.addEventListener("click",()=>{
    batting1()
   
  })




  

let Bresult=0
let Bwiket=10
let Bover=20
let Bballs=6
let Binitialballs=Bballs 
let prun=0
let pball=0

bowlingani.style.display="none";
bowlingani.style.animationName="none";

function batting1(){
  cont3.style.display="none"
  ingdiv3.style.display="none"
  ingdiv3.style.position="none"
  head3.style.display="none"
  startsecin3.style.display="none"
  scoretable.style.display="flex";


  

start.style.display="flex"
start.addEventListener("click",()=>{
hit.style.display="flex";
start.style.display="none"
batt()
bowlingani.style.display="flex";
bowlingani.style.animationName="animation-runing";
bowlinganilength.style.display="flex";
bowlinganilength.style.animationName="bowling-animation-lengths";
})


function batt (){
  let b=Bballs-=1;
  remainingball.textContent=`YOU HAVE REMAINING ${b} BALL IN THIS OVER`
  
if(Bballs==0){
  Bover-=1
  remainingover.textContent=Bover
  Bballs=Binitialballs

}
if (Bover==0){
end1in()
}


timeleft=15;
const ct= setInterval(() => {
  timeleft--;


  if(timeleft < 0){
    y()
  }


}, 120);
function y(){
  clearTimeout(ct)

  hit.style.display="none";
  remainingball.textContent=`YOU HAVE REMAINING ${Bballs} BALL IN THIS OVER`
      bo.textContent="YOU MISS THIS BALL"
      timeleft=15;
      bowlingani.style.display="none";
      bowlinganilength.style.display="none";
        start.style.display="flex"
}

hit.addEventListener("click",()=>{z()





  batsmans.style.animationName="batting-animation-action"; hit.style.display="none";   clearInterval(ct) })

  
function z(){


  


  if(Bwiket==0){
    end1in()
   }
 else if(timeleft>9){
 
   out=Bwiket-=1 
   let wikts=10-Bwiket
   hwikt.textContent=wikts
   bo.textContent=`remaining ${out} Awiket` 
   bowl.style.display="none";
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
   timeleft=0
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
}

  else if (timeleft>=8 && timeleft<9){
    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";

   
    
  }
  else if (timeleft>=7 && timeleft<8){
     
    bowlsman.style.animationName="bowling-animation-four";
    Bresult+=1
    prun+=1
    bo.textContent="its  1 run......."
    hruns.textContent=Bresult
    timeleft=0
 
  }
  else if (timeleft>=6 && timeleft<7){
     

    bowlsman.style.animationName="bowling-animation-two";
    Bresult+=2
    prun+=2
    bo.textContent="its good 2 runs"
    hruns.textContent=Bresult
    timeleft=0
  }
  else if (timeleft>=5 && timeleft<6){
    bowlsman.style.animationName="bowling-animation-six";
    Bresult+=6
    prun+=6
    bo.textContent="its a six....."
    hruns.textContent=Bresult
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-six"
  }
  
  else if (timeleft>=4 && timeleft<5){
    bowlsman.style.animationName="bowling-animation-four";
    Bresult+=4
    prun+=4
    bo.textContent="its a four....."
    hruns.textContent=Bresult
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
  }
  else if (timeleft>=2 && timeleft<4){
    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
    timeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
  }
  else if(timeleft>1 && timeleft<2){
 
    out=Bwiket-=1 
    let wikts=10-Bwiket
    hwikt.textContent=wikts
    bo.textContent=`remaining ${out} Awiket` 
    imeleft=0
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-catch";
 
 }
  
  if(Bwiket==0){
    end1in()
   }

  
  
  
   bowlingani.style.animationName="none";
   start.style.display="flex"

function end1in(){
 hwikt.textContent=0
 bowl.style.display="none";
 cont.style.display="flex"
 ingdiv.style.display="flex"
 ingdiv.style.position="absolute"
 head.style.display="flex"
 startsecin.style.display="flex"
 startsecin.textContent="startbowl"
 cont.textContent=`you have to score ${Bresult} runs in 20 overs`

   startsecin.addEventListener("click",()=>{
     startbowling1()
     cointoss1
     cont2.style.display="none"
     ingdiv.style.display="none"
     ingdiv2.style.position="none"
     head2.style.display="none"
     startsecin2.style.display="none"
     scoretable.style.display="flex";

     } )

}
} 
}
}



function startbowling1(){
  hit.style.display="none";
  start.style.display="none"
let Ahitrun=0
let Awiket=10
let Aover=20
let Aballs=6
let Ainitialballs=Aballs 

  hwikt.textContent=Awiket
  hruns.textContent=Ahitrun

  bowlingani.style.display="none";
  bowlingani.style.animationName="none";
  cont2.style.display="none"
  ingdiv2.style.display="none"
  ingdiv2.style.position="none"
  head2.style.display="none"
  startsecin2.style.display="none"
  scoretable.style.display="flex";

 

startbowl ()
function startbowl (){
  sa()
  function sa(){

    if (Ahitrun > Bresult) {
      startsecin.style.display="none"
      cont.style.display="flex"
      ingdiv.style.display="flex"
      ingdiv.style.position="absolute"
      head.style.display="flex"
      head.textContent="you won"
      cont.textContent=`you won by  ${Awiket} wiket`
    } 

    if(Awiket==0){
      end2in()
       } 

  

        setTimeout(() => {
          bowlingani.style.animationName="none";
          bowlinganilength.style.display="none";
          bowl.style.display="flex";
          batsmans.style.animationName="none";
        }, 3000);
      }


bowl.addEventListener("click",()=>{
bowl.style.display="none";

  intime=4
  let st=setInterval(() => {

  intime--;
   
  if (intime==0) {
    clearInterval(st)
  }
  
  }, 900);


  ab()
  function ab (){
  bowlingani.style.display="flex";
  bowlingani.style.animationName="animation-runing";
  bowlinganilength.style.display="flex";
  bowlinganilength.style.animationName="bowling-animation-lengths"; 
  }
  

if (Aballs>0){
    Aballs-=1
    remainingball.textContent=`YOU HAVE REMAINING ${Aballs} BALL IN THIS OVER`
    
}


if(Aballs==0){
    Aover-=1
    remainingover.textContent=Aover
    Aballs=Ainitialballs

}

if (Aover==0){
    gameover()
}

setTimeout(() => {
 const run=("64210642106421064210421012")


   let result=run.charAt((Math.floor(Math.random()*24+1)))
   let scoretable=document.getElementById("scoretable");

  if(result==0){
 
   out=Awiket-=1 
   let wikts=10-Awiket
   hwikt.textContent=wikts
   bo.textContent=`remaining ${out} Awiket` 
   bowl.style.display="none";
   batsmans.style.animationName="batting-animation-action";
   bowlinganilength.style.animationName="bowling-animation-catch";
   sa()
   intime=0
 
 }
 else if (result==6){

    scoretable=Ahitrun+=6
    bo.textContent="its a six....."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-six";
    intime=0
    sa()
}
  else if (result==4){

    scoretable=Ahitrun+=4
    bo.textContent="its a four....."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
    intime=0
    sa()
  }
  else if (result==3){
   scoretable=Ahitrun+=3
    bo.textContent="its a amazing 3 runs"
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-four";
    intime=0
    sa()
  }
  else if (result==2){

    scoretable=Ahitrun+=2
    bo.textContent="its good 2 runs"
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-two";
    intime=0
    sa()
  }

  else if (result==1){

    scoretable=Ahitrun+=1
    bo.textContent="its  1 run......."
    hruns.textContent=scoretable
    bowl.style.display="none";
    batsmans.style.animationName="batting-animation-action";
    bowlinganilength.style.animationName="bowling-animation-one";
    intime=0
    sa()
  }
}, 1500); 
}
)
}

function end2in(){
cont.style.display="flex"
ingdiv.style.display="flex"
ingdiv.style.position="absolute"
head.style.display="flex"
head.textContent="you loss"
cont.textContent=`you loss by  ${Bresult} wiket`

}
}
}
