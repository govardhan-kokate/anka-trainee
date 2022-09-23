//prime nuber program// 
for (let Num = 0; Num <= 100; Num++){     
    let notPrime = false;                 
    for (let i = 2; i<= Num; i++){        
        if (Num%i===0 && i !==Num){       
            notPrime= true;
        }
    }
    if (notPrime === false){
        console.log(Num);
    }
}


