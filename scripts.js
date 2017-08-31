function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone ("Apple", 2250, "silver");
iPhone6S.printInfo();

var SamsungGalaxyX6 = new Phone ("Samsung", 2500, "white");
SamsungGalaxyX6.printInfo();

var OnePlusOne = new Phone ("One", 2100, "black");
OnePlusOne.printInfo();