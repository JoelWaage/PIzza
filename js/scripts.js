// business logic
var inputtedSize = '';
var inputtedCrust = '';
var inputtedProtein = [];
var inputtedCheese = [];
var inputtedVeg = [];
var inputtedSauce = [];

function Pizza(size, crust, protein, cheese, veg, sauce) {
  this.size = size;
  this.crust = crust;
  this.protein = protein;
  this.cheese = cheese;
  this.veg = veg;
  this.sauce = sauce;
}

Pizza.prototype.fullPie = function() {
  return this.size + " pie with a" + this.crust + " crust, " + this.protein + ", " + this.cheese + ", " + this.veg + ", and " + this.sauce + " as your sauce.";
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

    var proteinString = inputtedProtein.join(', ')
    var cheeseString = inputtedCheese.join(', ')
    var vegString = inputtedVeg.join(', ')

    var newPizza = new Pizza(inputtedSize, inputtedCrust, proteinString, cheeseString, vegString, inputtedSauce);

    console.log(newPizza.fullPie())

  });





});
