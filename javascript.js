
//golf proyecto
function parGolpes (par,golpes){
    if(golpes==1){
       document.write('"Hole-in-one!"')
    }
    else if(golpes <= par - 2){
        document.write('"Eagle"')
    }
    else if(golpes == par - 1){
        document.write('"Birdie"')
    } 
    else if(golpes == par){
        document.write('"Par"')
    } 
    else if(golpes == par + 1){
        document.write('"Bogey"')
    } 
    else if(golpes == par + 2){
        document.write('"Double Bogey"')
    } 
    else if(golpes >= par + 3){
        document.write('"Go Home"')
    } 
     
}
//let golpes=prompt("Introduzca el numero de golpes");
//let par=prompt("Introduzca el par de el jugador de golf");


//parGolpes(par,golpes);




//proyecto de cartas blackjack
let conteo=0;


function conteoDeCartas(carta){
    let decision;
    switch (carta){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
           conteo++;
           break;
            
         
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
           conteo--;
           break;
            
         
       
         
    }
    if(conteo>0){
        decision='Apostar';
    }
    else{
        decision='Esperar';
    }
  
     return decision;
}


document.write(conteoDeCartas(carta))

