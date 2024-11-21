interface Category {
    categoryName:string;
}
interface Product{
    productName:string;
    productId:number;
}
interface ProductList extends Category , Product{
    list :string[];
}
const productDetails : ProductList ={
    categoryName: 'Gadget' , productName: 'Mobile',
    productId : 1234 , list:['Samsung','Motrolo','LG']
}
const listProduct = productDetails.list;
const pname : String = productDetails.productName;
console.log('Product name is'+pname);
console.log('Product List is'+listProduct);