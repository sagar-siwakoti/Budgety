//JS module creation //using IFFE

//BUDGET CONTROLLER
var budgetController = (function(){
   
})();


//UI CONTROLLER
var UIController=(function(){
    var DOMstrings={
        inputType: '.add__type' , //storing strings
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn'
    };
  
    return{                //returning all inputs of UI
      getinput:function(){
          return{

            type :document.querySelector(DOMstrings.inputValue).value, //will be either inc(+) or exp(-)
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value
          }
        },
        getDOMStrings:function(){
            return DOMstrings;
        }
  }

})();

//GLOBAL APP CONTROLERS
var controller=(function(budgetCtrl,UICtrl){

    var setupEventListners=function(){
        
        var DOM=UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
       
            if(event.keyCode===13 || event.which === 13){  //this means execute only when enter key is pressed 
            ctrlAddItem();
             }

        });

    };
    
    

    var ctrlAddItem = function(){

       //1.Get the field input data
       var input = UICtrl.getinput();

       //2.Add item to the budget controller
       
       //3.Add the item to the UI

       //4.Calculate the budget

       //5.Display the budget on the UI
       
    };
   
    return{
        init:function(){
           console.log('App started');
           setupEventListners();
        }
    }
})(budgetController,UIController);

controller.init();
