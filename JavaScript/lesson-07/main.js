class Product {
    constructor(nameOfProduct, amount, status) {
      this.nameOfProduct = nameOfProduct;
      this.amount = amount;
      this.status = status;
    }
  
    static sortProduct(a) {
      if (a.status == 'Не куплен') return -1; 
      if (a.status == 'Куплен') return 1; 
    }
  
    static showProduct(a) {
      return a.nameOfProduct;
    }
  }
   
  let shopList = [
    new Product('Банан', 2, 'Не куплен'),
    new Product('Апельсин', 5,'Куплен'),
    new Product('Молоко', 1, 'Куплен'),
    new Product('Груша', 10, 'Не куплен'),
  ];
  
  shopList.sort(Product.sortProduct);
  console.log(shopList.map(Product.showProduct));
  let newProduct = new Product('Шоколад', 2, 'Не куплен');
  
  shopList.push(newProduct);
  shopList.sort(Product.sortProduct);
  console.log(shopList.map(Product.showProduct));