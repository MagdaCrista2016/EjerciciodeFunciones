var calculator = {
  result : null,
  operator: null,
  check_input: function (button){
//      return function(){}
      var self = calculator;
      console.log("Check Input");
      var input = document.getElementById("input");
      var input_text = input.textContent;
      var errors = document.querySelector("#error");
//      var operator

      var input_number = Number(input_text);
      if (Number.isNaN (input_number)){
        console.log("is a number");

        input.value = "";


      }
    },

    set_number: function(button){
      return function(){
    //  console.log(this);
      var input = document.getElementById("input");
     input.value = ""+input.value+button.textContent;
   };
// asumimos que el boton esta correctamente

//return
},//set_number
exec_operator: function(button){
  var self = calculator;
  var input = document.querySelector("#result");
  return function(){
    if(self.result === null){

    }
    self.operator = button.textContent;

  }
}
clear: function(){
  self.result = null;
  self.operator = null;
  var input = document.getElementById("input");
  input.value = "";
},
};

document.addEventListener("DOMContentLoaded", function(event){
//Una vez la pagina a cargado.
  var controlpad = document.getElementById("controlpad");
  var output = document.getElementById("result");
  var button_operators = document.querySelectorAll("#operators button");
  var i;
  for (i = 0 ; i< button_operators.length; i++){
    button_operators[i].addEventListener("click",calculator.check_input);
  }
  var button_numbers= controlpad.querySelectorAll("#numbers button");
  console.log(button_numbers);
  //var input = document.getElementById("input");
  for(i=0;i<button_numbers.length;i++){
  console.log(button_numbers[i]);
  button_numbers[i].addEventListener("click",calculator.set_number(button_numbers[i])

);
    // console.log(i);
    }
  var button_clear = control.querySelector("#clear");
  button_clear.addEventListener("click"calculator.clear);
  console.log("Initiated");

});
