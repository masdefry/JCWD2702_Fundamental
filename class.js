// CLASS
// Blueprint untuk Membuat Object dengan Property yang Sama

// const products = [
//     {name: 'Apel', Price: 10000},
//     {name: 'Jeruk', price: 10000},
//     {name: 'Anggur', price: 10000}
// ]

// class Products{
//     name='';
//     price=0;

//     constructor(name, price){
//         this.name = name; 
//         this.price = price;
//     }
// }

// const product1 = new Products('Apel', 10000)
// const product2 = new Products('Jeruk', 15000)
// console.log(product2)

// const arrProducts = [
//     new Products('Apel', 10000),
//     new Products('Jeruk', 15000)
// ]
// console.log(arrProducts)


// class Student{
//     constructor(name, age, address, school){
//         this.name = name 
//         this.age = age
//         this.address = address
//         this.school = school
//     }
// }

// const student1 = new Student('Aboy', 20, 'Bintaro', 'UGM') // Object Baru


















// INHERITANCE: Pewarisan Property 
// Case.
// Di sebuah supermarket, terdapat beberapa product category. Mulai dari electronic, fashion dan snack. 
// Setiap product category memiliki identitas yang berbeda-beda, seperti product name, product stock, dll.
// 1. Jabarkan apa saja identitas yg dimiliki untuk masing-masing product category!
// Electronic
//  - Product Name, Product Brand, Product Price, Product Stock, Product Create, Product Serial, Product Guarantee
// Fashion
//  - Product Name, Product Brand, Product Price, Product Stock, Product Color, Product Size, Product Material
// Snack
//  - Product Name, Product Brand, Product Price, Product Flavour, Product Expiry, Product Netto
// 2. Buatkan class untuk setiap product category!
class Products{
    productName = '';
    productBrand = '';
    productPrice = 0;
    productStock = 0; 
    
    constructor(productName, productBrand, productPrice, productStock){
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productStock = productStock; 
    }
}

class Electronic extends Products{
    productCreate = '';
    productSerial = 0;
    productGuarantee = '';

    constructor(productCreate, productSerial, productGuarantee){
        super(productName, productBrand, productPrice, productStock)
        this.productCreate = productCreate;
        this.productSerial = productSerial;
        this.productGuarantee = productGuarantee;
    }
}

class Fashion extends Products{
    productColor = '';
    productSize = '';
    productMaterial = '';

    constructor(productColor, productSize, productMaterial){
        super(productName, productBrand, productPrice, productStock)
        this.productSize = productSize;
        this.productMaterial = productMaterial;
    }
}

class Snack extends Products{
    productFlavour = '';
    productExpiry = '';
    productNetto = 0;

    constructor(productFlavour, productExpiry, productNetto){
        super(productName, productBrand, productPrice, productStock)
        this.productFlavour = productFlavour;
        this.productExpiry = productExpiry;
        this.productNetto = productNetto;
    }
}



// ENCAPSULATION: Proses Bundling Data Menjadi 1 ke Dalam Sebuah Class
// Public Property
// Private Property

// Getter (Method untuk Pengambilan Data yang Sudah di Manipulasi)
// Setter (Method untuk Memanipulasi Data yang akan di Simpan)
class Users{
    username = '';
    #email = '';
    #password = '';

    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    set emailValidation(email){
        if(email.includes('@')){
            this.#email = email;
        }else{
            console.log('Email Not Valid')
        }
    }

    get password(){
        return this.#password
    }

    get findEmail(){
        return `***${this.#email.slice(3, this.#email.length)}`
    }
}

const user1 = new Users('ryan', 'abc123')
user1.emailValidation = 'ryan@gmail.com'
console.log(user1.username)
console.log(user1.findEmail)
console.log(user1.password)