function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

let result1 = addSafe(1, 2); // Correct usage

try {
  let result2 = addSafe(1, "2"); // This will throw an error
} catch (error) {
  console.error(error.message);
}
//Alternatively, using type guards
function isNumber(val: any): val is number {
    return typeof val === 'number';
}

function addWithGuard(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Invalid input');
    }
    return a + b;
}

let result3 = addWithGuard(1,2); // Correct usage

try {
    let result4 = addWithGuard(1, "2"); // Throws error
} catch (e) {
    console.error(e);
}