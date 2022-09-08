// let product = 'book';
// product = 123

type Category = 'book' | 't-shirt' | 'cap';
type Fun = 'sci-fi' | 'adventure';
type Learn = 'history' | 'rules';

interface Product {
  name: string;
  price: number;
  provider: string;
  category: Category;
  discount(value: number): string;
  finalPrice: (value: number) => number;
}

class Book<T>
  implements Pick<Product, 'name' | 'price' | 'category' | 'discount'>
{
  name: string;
  price: number;
  category: Category;
  genre: T;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.category = 'book';
  }

  discount(value: number): string {
    const result = (this.price * value) / 100;
    return `El descuento es de ${result}`;
  }
}

const book = new Book<Fun>('El despertar del coyote', 110);

book.discount(70); // ?

// book.genre = 'history';
book.genre = 'adventure';
