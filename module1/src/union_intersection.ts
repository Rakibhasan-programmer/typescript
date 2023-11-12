{
  //

  // union types
  type FrontendDeveloper = "Good Developer" | "Expert developer";
  type BackendDevelopr = "Backend developer" | "fullstack developer";

  type FullstackDeveloper = FrontendDeveloper | BackendDevelopr;
  const dev: FullstackDeveloper = "Backend developer";

  // string literal type -
  let status: "pending" | "accepted" | "rejected";
  status = "rejected";

  function addTwoNumber(n: string | number) {
    if (typeof n === "number") {
      console.log(n + n);
    } else {
      console.log(2*parseInt(n));
    }
  }
  addTwoNumber(2);
  addTwoNumber("3");


  // intersection types
  type Book = {
    book_id: number;
    book_name: string
  }
  type Author = {
    author_id: number,
    author_name: string
  }

  type Intersected_type = Book & Author;

  const info: Intersected_type = {
    book_id: 1,
    book_name: "Harry Potter",
    author_id: 2,
    author_name: "Simon Jones"
  };
  console.log(info);




  //
}
