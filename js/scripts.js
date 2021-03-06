// business logic
var inputtedSize = '';
var inputtedCrust = '';
var inputtedProtein = [" "];
var inputtedCheese = [" "];
var inputtedVeg = [" "];
var inputtedSauce = [];
var eachCost = [];


function Pizza(size, crust, protein, cheese, veg, sauce) {
  this.size = size;
  this.crust = crust;
  this.protein = protein;
  this.cheese = cheese;
  this.veg = veg;
  this.sauce = sauce;
}

Pizza.prototype.fullPie = function() {
  return this.size + " pie with a" + this.crust + " Crust, " + this.protein + this.cheese  + this.veg + "and " + this.sauce + " Sauce.";
}

var subTotal = function() {
  if (inputtedSize === "Large") {
    eachCost.push(19 + ((inputtedProtein.length - 1) * 2.5) + ((inputtedCheese.length -1) * 1.5) + (inputtedVeg.length -1));
  } else if (inputtedSize === "Medium") {
    eachCost.push(17 + ((inputtedProtein.length - 1) * 2) + (inputtedCheese.length - 1) + ((inputtedVeg.length - 1) * .75));
  } else if (inputtedSize === "Small") {
    eachCost.push(15 + ((inputtedProtein.length - 1) * 1.5) + ((inputtedCheese.length - 1) * .75) + ((inputtedVeg.length - 1) * .50));
  } else if (inputtedSize === "Personal") {
    eachCost.push(9 + (inputtedProtein.length - 1) + ((inputtedCheese.length - 1) * .50) + ((inputtedVeg.length - 1) * .25));
  }
}


//user logic
$(document).ready(function() {
  $("button#pestoLarge").submit(function(event) {
    event.preventDefault();
    alert("click")
  });

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
    $(".orderedPie").append("<li>" + "One " + newPizza.fullPie() + "</li>");
    $(".orderedAmount").text(subTotal);
    $("#build").trigger("reset");
    inputtedProtein = [" "];
    inputtedCheese = [" "];
    inputtedVeg = [" "];

    var runningTotal = 0
    $.each(eachCost,function() {
      runningTotal += this;
    });

    var total = runningTotal.toFixed(2);

    $(".orderedAmount").text(total);
  });

});
