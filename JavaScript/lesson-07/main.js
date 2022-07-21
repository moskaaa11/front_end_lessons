class Product {
    constructor(params = {}) {
      Object.assign(this, {
        pName: null, 
        amount: 1, 
        bought: false,
        prise: 2, 
      }, { ...params }); 
    }
    

static sortDefault(a, b) {  
      return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
    }; 
}
Product.prototype.toString = function () {
    return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}, ${this.prise} usd, ${this.amount * this.prise} usd`;
}; 
  
  
const shopList = [
    { pName: 'Банан', amount: 2, prise: 25 },
    { pName: 'Апельсин', amount: 5, bought: true, prise: 44 },
    { pName: 'Молоко', bought: true , prise: 29},
    { pName: 'Груша', amount: 10, prise: 11 }
].map(prodDef => new Product(prodDef));
  
const addToShopList = prodDef => { 
    const prod = shopList.find(prod => prod.pName === prodDef.pName); 
    if (!prod) return shopList.push(new Product(prodDef)); 
    prod.amount += prodDef.amount; 
}; 


const printShopList = () => shopList.forEach(
    (prod, i) => console.log(`${i + 1}. ${prod}`)
); 
  
shopList.sort(Product.sortDefault);
printShopList();
console.log('---'); 
  
addToShopList({ pName: 'Банан', amount: 3 });
addToShopList({ pName: 'Шоколад', amount: 2 });
shopList.sort(Product.sortDefault);
printShopList();
console.log('---'); 
