async function fetchData() {
  try {
    let result = await mockApiRequest();
    console.log(result); // Output: "Data hämtad!"
  } catch (error) {
    console.error(error); // Hanterar eventuella fel
  }
}

//Promise is an object so It have an object
/* function mockApiRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulerar framgång
      if (success) {
        resolve("Data hämtad!");
      } else {
        reject("Fel vid hämtning av data.");
      }
    }, 3000);
  });
} */

//Return an object :)
function mockApiRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const createdObj = { name: "gato", age: 33 }; // Simulerar framgång
      if (createdObj) {
        resolve(createdObj);
      } else {
        reject("Fel vid hämtning av data.");
      }
    }, 3000);
  });
}

fetchData();
