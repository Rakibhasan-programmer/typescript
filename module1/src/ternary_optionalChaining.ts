{
  //

  // ternary operator || optional chaining || nullish coalescing

  const age: number = 18;
  const isAdult: string = age < 18 ? "not adult" : "adult";

  console.log({ isAdult });

  // nullish coalescing - null/undefined -- decision making

  const isAuthenticated = null;
  const status = isAuthenticated ?? "Guest";
  const status1 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ status }, { status1 });

  //
}
