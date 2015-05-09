function getVillainName(birthday) {
    var month = birthday.getMonth();
    var date = birthday.getDate().toString().slice(-1);
    var firstName = findFirstName(month);
    var lastName = findLastName(date);
    return firstName + " " + lastName;
}

function findFirstName(month) {
    var months = {
        0: "The Evil",
        1: "The Vile",
        2: "The Cruel",
        3: "The Trashy",
        4: "The Despicable",
        5: "The Embarrassing",
        6: "The Disreputable",
        7: "The Atrocious",
        8: "The Twirling",
        9: "The Orange",
        10: "The Terrifying",
        11: "The Awkward"
    }
    for (var f in months) {
        if ( f == month) {
            return months[f];
        }
    }
}

function findLastName(date) {
    var dates = {
        0: "Mustache",
        1: "Pickle",
        2: "Hood Ornament",
        3: "Raisin",
        4: "Recycling Bin",
        5: "Potato",
        6: "Tomato",
        7: "House Cat",
        8: "Teaspoon",
        9: "Laundry Basket"
    }
    for (var key in dates) {
        if (key == date) {
            return dates[key];
        }
    }
}

var d = new Date();
d.setFullYear(2015, 3, 11);

console.log(getVillainName(d));
