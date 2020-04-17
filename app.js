//JS module creation //using IFFE

//BUDGET CONTROLLER
var budgetController = (function(){
  
    var Expense = function(id,description,value){  //   constructor is capital to distinguish from other
      this.id=id;
      this.description=description;
      this.value=value;
    };

    var Income = function(id,description,value){  //   constructor is capital to distinguish from other
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var data={        //data structure
        allItems:{
            exp: [],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    return{
        addItem:function(type,des,val){
            var newItem;
            //create new id 

            if(data.allItems[type].length>0){
               ID=data.allItems[type][data.allItems[type].length-1].id + 1;
            }else{
                ID=0;
            }  

            //create new item based on 'inc' or 'exp' type 
            if(type=='exp'){
                newItem = new Expense(ID,des,val);
            }else if(type==='inc'){
                newItem= new Income(ID,des,val);
            }

            //push it into our data structure
            data.allItems[type].push(newItem);
            
            //return the new element
            return newItem;  
        }
    };


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
       var input, newItem;

       //1.Get the field input data
       var input = UICtrl.getinput();

       //2.Add item to the budget controller
       
       var newItem = budgetCtrl.addItem(input.type,input.description,input.value);

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
