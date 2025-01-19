/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Use .map() to filter and log developers
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Use .forEach() to filter and log developers
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Add a new employee to the array
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Remove employees with the profession of 'admin'
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  // Create a new array and concatenate it with the existing one
  const newArr = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "lisa", age: "24", profession: "manager" },
    { id: 7, name: "tom", age: "21", profession: "developer" },
  ];
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
