/* jshint esversion: 6 */
var Animal = function(
  //Parametros
  numero_de_patas = 4,
  carnivoro = true,
  pelaje = true,
  numero_de_ojos = 2,
  nombre = null
){//Function
  return { //objectos
    numero_de_patas :   numero_de_patas,
    carnivoro:          carnivoro,
    pelaje:             pelaje,
    numero_de_ojos:     numero_de_ojos,
    nombre:             nombre,
    comer: function(){
      if(carnivoro === true){
        return "carnivoro";
      }else{
        return "no carnivoro";
      }


    }
  };

};
  var jirafa = new Animal(4, false, true, 2, "jirafa");
  console.log(jirafa);
