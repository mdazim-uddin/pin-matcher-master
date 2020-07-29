function pinGenaretor(id,addvalue) {
	let genaretor =document.getElementById(id).value;
	let random =Math.floor(Math.random()*10000);
	
	 document.getElementById(id).value=random;
	
	
}
 let genaretorValue=document.getElementById('handClick');
 genaretorValue.addEventListener('click', function(){
	pinGenaretor('pinGeneratorInput', 1.499999);

 })
//calculater
		
		 function calculator(id,value) {
		 	let calcutValue =document.getElementById(id).value;
	 		calcutValue=parseFloat(calcutValue)
	 		    document.getElementById(id).value+=value,num;
	 		    
	 		
	 	}
	   let calculatorValue=document.getElementById('calcutCount');
 	calculatorValue.addEventListener('click', function(){
	  calculator('calculatorInput' , 7);
	})
   let valuecalculator=document.getElementById('calcutCount8');
 	 valuecalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput' , 8);
	  

	})
 	  let calculatorNum=document.getElementById('calcutCount9');
 	 calculatorNum.addEventListener('click', function(){
	 
	  calculator('calculatorInput',9);
	  

	})
 	  let numCalculator=document.getElementById('calcutCount4');
 	 numCalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput',4);
	  

	})
 	  let countCalculator=document.getElementById('calcutCount5');
 	 countCalculator.addEventListener('click', function(){
	 
	  calculator('calculatorInput',5);
	  

	})
 	   let calculatorCount=document.getElementById('calcutCount6');
 	  calculatorCount.addEventListener('click', function(){
	 
	  calculator('calculatorInput',6);
	  

	})
  	  let inputCalculator=document.getElementById('calcutCount1');
 	 inputCalculator.addEventListener('click', function(){
	 
	   calculator('calculatorInput',1);
	  

	 })
 	  let calculatorInput=document.getElementById('calcutCount2');
 	  calculatorInput.addEventListener('click', function(){

	   calculator('calculatorInput',2);
	  

	 })
 	  let calculator3=document.getElementById('calcutCount3');
  	 calculator3.addEventListener('click', function(){
	 
	   calculator('calculatorInput',3);
	  

	})
  	 let calculator0=document.getElementById('calcutCount0');
  	 calculator0.addEventListener('click', function(){
	 
	   calculator('calculatorInput',0);
	  

	})

	
	 let button=document.getElementById('buttonC');
    button.addEventListener('click', function(){

	  document.getElementById('calculatorInput').value = '';
	 		  
	 })
     let slice=document.getElementById('slice');
    slice.addEventListener('click', function(){

	  document.getElementById('calculatorInput').value=  
	  document.getElementById('calculatorInput').value.slice(0,-1);
	 		  
	 })
    //end-calculator


    let genaret=document.getElementById('submitbtn');
     genaret.addEventListener('click', function(){
     	let calculatorValue=document.getElementById('pinGeneratorInput').value;
     	let calculatorInputValue=document.getElementById('calculatorInput').value;
     	if (calculatorValue== calculatorInputValue &&  calculatorValue!=0) {
     		let submitOutPut=document.getElementById('notifyAreasucces');
     		submitOutPut.style.display="block";
     	}
     		if ( calculatorValue != calculatorInputValue) {
     		let submitOutPut=document.getElementById('notifyAreaerror');
     		submitOutPut.style.display="block";
     	}
     })
