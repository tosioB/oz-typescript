class Item<T> {
  #content: T | null;

  constructor() {
    this.#content = null;
  }

  setItem(value: T) {
    this.#content = value;
  }

  getItem(): T | null {
    return this.#content;
  }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환

const stringItem = new Item<string>();
stringItem.setItem("Hello");
stringItem.getItem(); // Hello 반환

// 사용자 데이터 / User
interface User100 {
  id: number;
  name: string;
}

interface WithId {
  id: number;
}

// interface Store<T extends 제약>  {
interface Store<T extends WithId> {
  findById(id: number): T | undefined;
  save(item: T): void;
}

class UserRepository1 implements Store<User100> {
  #users: User100[] = [];

  findById(id: number): User100 | undefined {
    return this.#users.find((user) => user.id === id);
  }

  save(user: User100): void {
    this.#users.push(user);
  }
}

const userRepo = new UserRepository1();
userRepo.save({
  id: 1,
  name: "Josh"
});

userRepo.save({
  id: 2,
  name: "Amy"
});

console.log(userRepo.findById(1));

console.log("Testing user repository...");

//
interface Product200 {
  id: number;
  price: number;
  name: string;
}

class ProductRepository implements Store<Product200> {
  #products: Product200[] = [];

  findById(id: number): Product200 | undefined {
    return this.#products.find((product) => product.id === id);
  }

  save(product: Product200): void {
    this.#products.push(product);
  }
}

const productRepo = new ProductRepository();

productRepo.save({
  id: 10,
  price: 100,
  name: "Keyboard"
});

productRepo.save({
  id: 20,
  price: 200,
  name: "Mouse"
});

productRepo.findById(20);
