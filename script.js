/** @format */


// Function to print developers using .map()
function PrintDeveloperbyMap() {
  employees
    .map((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
}

// Function to print developers using .forEach()
function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add new employee data
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

// Function to remove admin employees
function removeAdmin() {
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

// Function to concatenate a new array
function ConcatinateArray() {
  const newEmployees = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "lisa", age: "24", profession: "manager" },
    { id: 7, name: "tom", age: "21", profession: "developer" }
  ];
  const concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}

