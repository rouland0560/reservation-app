const Product = require('./model/product')

class FakeDB {
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'A',
                heading2: 'B',
                heading3: 'C',
                headingText1: '123',
                headingText2: '456',
                headingText3: '789',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'D',
                heading2: 'E',
                heading3: 'F',
                headingText1: '123',
                headingText2: '456',
                headingText3: '789',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'G',
                heading2: 'H',
                heading3: 'I',
                headingText1: '123',
                headingText2: '456',
                headingText3: '789',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone nano',
                price: 599,
                description: 'nano size',
                heading1: 'J',
                heading2: 'K',
                heading3: 'L',
                headingText1: '123',
                headingText2: '456',
                headingText3: '789',
              }
        ]
    }

    async initDB() {
        await this.cleanDB()
        this.pushProductToDB()
    }

    async cleanDB() {
        await Product.deleteMany({})
    }

    pushProductToDB() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
}

module.exports = FakeDB