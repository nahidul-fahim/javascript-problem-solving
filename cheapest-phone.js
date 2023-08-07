// Find out the cheapest phone among the given 7. 

let mobilePhones = [
    {brand: "samsung", model: "s20", price: 80000, color: "blue"},
    {brand: "iphone", model: "11", price: 64000, color: "white"},
    {brand: "oneplus", model: "9r", price: 38000, color: "black"},
    {brand: "Xiaomi", model: "note 12", price: 30000, color: "green"},
    {brand: "vivo", model: "y20", price: 56000, color: "offwhite"},
    {brand: "Nokia", model: "model x", price: 40000, color: "brown"},
    {brand: "oppo", model: "s59", price: 20000, color: "skyblue"},
]

function cheapestPhone(lowestprice) {
    let cheapest = lowestprice[0];
    for(i = 0; i < lowestprice.length; i++){
        let mobiles = lowestprice[i];
        if(mobiles.price < cheapest.price){
            cheapest = mobiles;
        }
    }
    return cheapest;
}

let findCheapestPhone = cheapestPhone(mobilePhones);
console.log(findCheapestPhone);
