// business logic
var inputtedSize = '';
var inputtedCrust = '';
var inputtedProtein = [" "];
var inputtedCheese = [" "];
var inputtedVeg = [" "];
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
  return this.size + " pie with a" + this.crust + " Crust " + this.protein + this.cheese  + this.veg + "and " + this.sauce + " as your sauce.";
}

var total = function() {
  if (inputtedSize === "Large") {
    return (19 + ((inputtedProtein.length - 1) * 2.5) + ((inputtedCheese.length -1) * 1.5) + (inputtedVeg.length -1));
  } else if (inputtedSize === "Medium") {
    return (17 + ((inputtedProtein.length - 1) * 2) + (inputtedCheese.length - 1) + ((inputtedVeg.length - 1) * .75));
  } else if (inputtedSize === "Small") {
    return (15 + ((inputtedProtein.length - 1) * 1.5) + ((inputtedCheese.length - 1) * .75) + ((inputtedVeg.length - 1) * .50));
  } else if (inputtedSize === "Personal") {
    return (10 + (inputtedProtein.length - 1) + ((inputtedCheese.length - 1) * .50) + ((inputtedVeg.length - 1) * .25));
  }
}


//user logic
$(document).ready(function() {
  $("form#build").submit(function(event) {
    event.preventDefault();
    inputtedSize = $("#size").val();
    inputtedCrust = $("#crust").val();
    $("input:checkbox[name=protein]:checked").each(function(){
      inputtedProtein.unshift($(this).val());
    });
    $("input:checkbox[name=cheese]:checked").each(function(){
      inputtedCheese.unshift($(this).val());
    });
    $("input:checkbox[name=veg]:checked").each(function(){
      inputtedVeg.unshift($(this).val());
    });
    inputtedSauce = $("#sauce").val();

    var proteinString = inputtedProtein.join(', ')
    var cheeseString = inputtedCheese.join(', ')
    var vegString = inputtedVeg.join(', ')

    var newPizza = new Pizza(inputtedSize, inputtedCrust, proteinString, cheeseString, vegString, inputtedSauce);

    $("#placedOrder").show();
    $(".orderedPie").text(newPizza.fullPie());
    $(".orderedAmount").append(total);



  });





});
