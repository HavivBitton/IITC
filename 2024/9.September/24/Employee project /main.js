// import { employeeService } from "./employee.service.js";

let gEmployeeList = [
  {
    firstName: "Yosef",
    lastName: "Sabag",
    age: 24,
    startDate: "01/01/2022",
    department: "qa",
    salary: 120000,
  },
];
renderEmployee();

//Dom element
const elEmployeeForm = document.getElementById("Employee-form");

// Handling event listeners
elEmployeeForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();
  // Get the input element
  const elEmpFirstNameInput = document.getElementById("Emp-input-firstName");
  const elEmpLastNameInput = document.getElementById("Emp-input-lastName");
  const elEmpAgeInput = document.getElementById("Emp-input-age");
  const elEmpStartDateInput = document.getElementById("Emp-input-startDate");
  const elEmpDepartmentInput = document.getElementById("Emp-input-department");
  const elEmpSalaryInput = document.getElementById("Emp-input-salary");

  // Calling add employee function
  if (
    !elEmpFirstNameInput.value ||
    !elEmpLastNameInput.value ||
    !elEmpAgeInput.value ||
    !elEmpStartDateInput.value ||
    !elEmpDepartmentInput.value ||
    !elEmpSalaryInput.value
  )
    return;

  gEmployeeList.push(
    makeEmpObject(
      elEmpFirstNameInput.value,
      elEmpLastNameInput.value,
      elEmpAgeInput.value,
      elEmpStartDateInput.value,
      elEmpDepartmentInput.value,
      elEmpSalaryInput.value
    )
  );

  //   employeeService.addEmployee();

  renderEmployee();
});

function renderEmployee() {
  const employeeTable = document.querySelector("#employeeTable tbody");
  employeeTable.innerHTML = "";
  const employees = gEmployeeList;

  // Loop that display every employee from the data base
  for (let i = 0; i < employees.length; i++) {
    let currentEmployee = employees[i];
    // Create a tr in the table
    const elEmployee = document.createElement("tr");

    const cell1 = document.createElement("th");
    cell1.textContent = currentEmployee.firstName;
    elEmployee.appendChild(cell1);
    const cell2 = document.createElement("th");
    cell2.textContent = currentEmployee.lastName;
    elEmployee.appendChild(cell2);
    const cell3 = document.createElement("th");
    cell3.textContent = currentEmployee.age;
    elEmployee.appendChild(cell3);
    const cell4 = document.createElement("th");
    cell4.textContent = currentEmployee.startDate;
    elEmployee.appendChild(cell4);
    const cell5 = document.createElement("th");
    cell5.textContent = currentEmployee.department;
    elEmployee.appendChild(cell5);
    const cell6 = document.createElement("th");
    cell6.textContent = currentEmployee.salary;
    elEmployee.appendChild(cell6);
    const cell7 = document.createElement("th");
    // Create the edit button in cell7
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      // Add your edit logic here
      console.log(`Editing employee: ${currentEmployee.firstName}`);
    };
    cell7.appendChild(editButton);

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      gEmployeeList.splice(i, 1); // Remove the employee from the array
      renderEmployee(); // Re-render the employee list
    };
    cell7.appendChild(deleteButton);

    // Append the cells to the row
    elEmployee.appendChild(cell7);

    employeeTable.appendChild(elEmployee);
  }
}

function makeEmpObject(
  firstName,
  lastName,
  age,
  startDate,
  department,
  salary
) {
  const newEmployee = {
    firstName,
    lastName,
    age,
    startDate,
    department,
    salary,
  };
  return newEmployee;
}
