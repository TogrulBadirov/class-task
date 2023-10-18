class Kitab {
    constructor(name, authorName, year, price) {
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
    }
    qiymetIste(discount){
        let discountedPrice = this.price * (1-(discount/100));
        console.log(`Kitabi adi: ${this.name}, Yazar adi: ${this.authorName}, Yazildigi il: ${this.year}, Qiymet: ${this.price}$, Endirimli qiymet: ${discountedPrice}$`);
    }
}

const myKitab = new Kitab("The Lord of the Rings", "J.R.R. Tolkien", 2005,19.27)
myKitab.qiymetIste(20)