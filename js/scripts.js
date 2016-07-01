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

    var proteinString = inputtedProtein.join(', ')
    var cheeseString = inputtedCheese.join(', ')
    var vegString = inputtedVeg.join(', ')

    console.log(proteinString);
    console.log(cheeseString);
    console.log(vegString);

  });





});
