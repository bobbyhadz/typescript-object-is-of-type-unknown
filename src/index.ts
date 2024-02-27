export {};

// Object is of type 'unknown' Error in TypeScript

// EXAMPLE 1 - Use a type guard to solve the error

async function fetchData() {
  try {
    await Promise.resolve(42);
  } catch (err) {
    if (err instanceof Error) {
      // ✅ TypeScript knows err is Error
      console.log(err.message);
    } else {
      console.log('Unexpected error', err);
    }
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Make sure to provide types for Generics

// const something: unknown = 42;

// if (typeof something === 'string') {
//   console.log(something.toUpperCase());
// } else if (typeof something === 'number') {
//   // 👇️ this runs
//   console.log(something.toFixed(2));
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Checking for a type to be able to use built-in methods

// async function fetchData() {
//   try {
//     await Promise.resolve(42);
//   } catch (err) {
//     // 👈️ err is unknown
//     if (typeof err === 'object' && err !== null) {
//       console.log(err.toString());
//     } else {
//       console.log('Unexpected error', err);
//     }
//   }
// }
