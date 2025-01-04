function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error expected, but it compiles without error in some cases. 