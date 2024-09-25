/** Classes
 * 클래스는 객체를 생성하기 위한 하나의 청사진/템플릿 역할을 한다
 * ES6에서 도입된 클래스 문법 기반
 * 생성자, 속성, 메서드로 구성
 */

/** Access Modifiers
 * public: 외부에서 접근 가능(기본 설정)
 * private / #(해시 이름): 해당 클래스 내부에서만 접근 가능
 * protected: 해당 클래스 내부 및 서브 클래스에서 접근 가능
 */

interface ContinentInterface {
  getContinentName: string;
}

interface CountryInterface {
  capital: string;
  getInfo(): string;
}

class Continent implements ContinentInterface {
  protected continentName: string;

  constructor(name: string) {
    this.continentName = name;
  }

  getContinentName() {
    return this.continentName;
  }
}

class Country extends Continent implements CountryInterface {
  #name: string;
  capital: string;

  constructor(continentName: string, name: string, capital: string) {
    super(continentName);
    this.#name = name;
    this.capital = capital;
  }

  getInfo() {
    return `${this.#name} ${this.capital}, ${this.getContinentName()}`;
  }
}

let country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());

// country.name;
// country.continentName;

abstract class AbstractCountry {
  name: string;
  capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }

  setup(): void {
    console.log("setup complete");
  }

  abstract displayInfo(): void;
}

class MyCountry2 extends AbstractCountry {
  displayInfo() {
    console.log("display info called");
  }
}

const myCountry2 = new MyCountry2("Germany", "Berlin");
myCountry2.setup();
myCountry2.displayInfo();
