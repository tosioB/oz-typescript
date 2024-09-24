/* 
1. 배열 타입
  책의 제목을 담고 있는 배열을 생성하세요.
  배열에는 최소 5개의 책 제목을 포함시키세요.

2. 객체 타입
  책을 나타내는 객체 타입(Book)을 정의하세요.
  책 객체는 title, author, publicationYear, isAvailable 속성을 가져야 합니다.
  책 객체의 예시 데이터를 하나 만드세요.

3. 함수 타입
책의 가용성을 변경하는 함수 타입(UpdateAvailability)을 정의하세요.
함수는 책 객체와 새로운 가용성 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
함수의 예시 구현을 작성하세요.

4. 유니언 타입
  책의 상태를 나타내는 유니언 타입(BookStatus)을 정의하세요. 상태는 "available", "checked out", "reserved" 세 가지로 한정합니다.
  책 상태를 변경하는 함수를 작성하세요. 함수는 책 객체와 새로운 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
  함수의 예시 구현을 작성하세요.

5. 인터페이스
  도서관 시스템을 위한 인터페이스(Library)를 정의하세요. 이 인터페이스는 다음 메서드를 포함해야 합니다:
  books: Book 객체의 배열
  addBook: 책을 추가하는 메서드
  removeBook: 책을 제거하는 메서드
  인터페이스를 구현하는 예시 코드를 작성하세요.

6. 튜플
  책의 제목과 저자를 담고 있는 튜플(BookInfo)을 정의하세요.
  튜플의 예시 데이터를 하나 만드세요.

7. 열거형
  책의 장르를 나타내는 열거형(Genre)을 정의하세요.
  Genre는 Fiction, NonFiction, Fantasy, Biography, ScienceFiction, Romance 여섯 가지 값을 가집니다.
  Book 타입을 확장하여 DetailedBook 타입을 정의하세요. 이 타입은 기존 Book 타입에 genre 속성을 추가로 가져야 합니다.
  DetailedBook 객체의 예시 데이터를 하나 만드세요. */

// 1. 배열 타입
const books: string[] = [
  "자바스크립트 완벽 가이드",
  "러닝 타입스크립트",
  "프로그래머의 수학",
  "클린 코드",
  "디자인 패턴"
];

// 2. 객체 타입
type Book = {
  title: string;
  author: string;
  publicationYear: number;
  isAvailable: boolean;
};

const book: Book = {
  title: "자바스크립트 완벽 가이드",
  author: "데이빗 플래너",
  publicationYear: 2020,
  isAvailable: true
};

// 3. 함수 타입
type UpdateAvailability = (book: Book, availability: boolean) => void;

const updateAvailability: UpdateAvailability = (
  book: Book,
  newAvailability
) => {
  book.isAvailable = newAvailability;
};

updateAvailability(book, false);
console.log(book);

// 4. 유니언 타입
type BookStatus = "available" | "checked out" | "reserved";

const updateBookStatus = (book: Book, bookStatus: BookStatus) => {
  book.isAvailable = bookStatus === "checked out";
};

updateBookStatus(book, "checked out");
console.log(book);

// 5. 인터페이스
interface Library {
  books: Book[];
  addBook(book: Book): void;
  removeBook(title: string): void;
}

const library: Library = {
  books: [],
  addBook(book) {
    this.books.push(book);
  },
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
};

library.addBook(book);
console.log("addBook:", library.books);
library.removeBook("자바스크립트 완벽 가이드");
console.log("removeBook:", library.books);

// 6. 튜플
type BookInfo = [string, string];

const bookInfo: BookInfo = ["자바스크립트 완벽 가이드", "데이빗 플래너"];
console.log(bookInfo);

// 7. 열거형
enum Genre {
  Fiction,
  NonFiction,
  Fantasy,
  Biography,
  ScienceFiction,
  Romance
}

type DetailedBook = Book & {
  genre: Genre;
};

const detailedBook: DetailedBook = {
  title: "자바스크립트 완벽 가이드",
  author: "빌 알스프레드",
  publicationYear: 2019,
  isAvailable: true,
  genre: Genre.Fantasy
};

console.log(detailedBook);
