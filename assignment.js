//kilometerToMeter:

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(100);
console.log(result);



//budgetCalculator:

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;

    return total;


}

var totalCost = budgetCalculator(100, 100, 100);
console.log(totalCost);

//hotelCost:

function hotelCost(day) {
    var hotel = 0;
    if (day <= 10) {
        hotel = day * 100;
    }

    else if (day <= 20) {

        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondpart = remaining * 80;
        hotel = firstPart + secondpart;

    }

    else {
        var firstPart = 10 * 100;
        var secondpart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        hotel = firstPart + secondpart + thirdPart;
    }

    return hotel;
}
var count = hotelCost(71);
console.log(count);




//megaFriend

function megaFriend(names) {
    var maximumWord = names[0];

    for (var i = 0; i < names.length; i++) {
        var element = names[i];

        if (element.length > maximumWord.length) {
            maximumWord = element;
        }
    }
    return maximumWord;
}

var bigName = megaFriend(["rasu", "likhon", "Ferdous", "Murad", "Shuvo"]);
console.log(bigName);






