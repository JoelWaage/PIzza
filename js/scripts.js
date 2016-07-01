// business logic
var inputtedSize = '';
var inputtedCrust = '';
var inputtedProtein = [];
var inputtedCheese = [];
var inputtedVeg = [];
var inputtedSauce = [];

var protein = [];

function Pizza(size,crust,protein,cheese,veg,sauce) {
  this.size = size;
  this.crust = crust;
  this.protein = [];
  this.cheese = [];
  this.veg = [];
  this.sauce = sauce;
}




//user logic
$(document).ready(function() {
  $("form#build").submit(function(event) {
    event.preventDefault();
    inputtedSize = $("#size").val();
    inputtedCrust = $("#crust").val();
    $("input:checkbox[name=protein]:checked").each(function(){
      inputtedProtein.push($(this).val());
    });
    $("input:checkbox[name=cheese]:checked").each(function(){
      inputtedCheese.push($(this).val());
    });
    $("input:checkbox[name=veg]:checked").each(function(){
      inputtedVeg.push($(this).val());
    });
    inputtedSauce = $("#sauce").val();
    console.log(inputtedSize);
    console.log(inputtedCrust);
    console.log(inputtedProtein);
    console.log(inputtedCheese);
    console.log(inputtedVeg);
    console.log(inputtedSauce);
  });



});
