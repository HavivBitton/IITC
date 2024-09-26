import { employeeService } from "./employee.service.js";
import { editFunction } from "./edit-function.js";

const gEmployeeList = employeeService.gEmployeeList;

//Dom element
const elEmployeeForm = document.getElementById("Employee-form");
const elEmpDepartmentFilter = document.getElementById("departmentFilter");
renderEmployee();

// Handling event listeners
elEmployeeForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();
  // Get the input element
  const elEmpFirstNameInput = document.getElementById("Emp-input-firstName");
  const elEmpLastNameInput = document.getElementById("Emp-input-lastName");
  const elEmpAgeInput = document.getElementById("Emp-input-age");
  const elEmpStartDateInput = document.getElementById("Emp-input-startDate");
  const elEmpDepartmentValue =
    document.getElementById("departmentSelect").value;
  const elEmpSalaryInput = document.getElementById("Emp-input-salary");

  // Calling add employee function
  if (
    !elEmpFirstNameInput.value ||
    !elEmpLastNameInput.value ||
    !elEmpAgeInput.value ||
    !elEmpStartDateInput.value ||
    // !elEmpDepartmentInput.value ||
    !elEmpSalaryInput.value
  )
    return;
  employeeService.addEmployee(
    elEmpFirstNameInput.value,
    elEmpLastNameInput.value,
    elEmpAgeInput.value,
    elEmpStartDateInput.value,
    elEmpDepartmentValue,
    elEmpSalaryInput.value
  );

  renderEmployee();
});
function renderEmployee() {
  const employeeTable = document.querySelector("#employeeTable");
  employeeTable.innerHTML = "";

  const employees = employeeService.departmentFilter(
    elEmpDepartmentFilter.value
  );

  for (let i = 0; i < employees.length; i++) {
    let currentEmployee = employees[i];
    const elEmployee = document.createElement("li");
    elEmployee.classList.add("employee");

    const cell1 = document.createElement("div");
    cell1.textContent = currentEmployee.firstName;
    elEmployee.appendChild(cell1);

    const cell2 = document.createElement("div");
    cell2.textContent = currentEmployee.lastName;
    elEmployee.appendChild(cell2);

    const cell3 = document.createElement("div");
    cell3.textContent = currentEmployee.age;
    elEmployee.appendChild(cell3);

    const cell4 = document.createElement("div");
    cell4.textContent = currentEmployee.stardivate;
    elEmployee.appendChild(cell4);

    const cell5 = document.createElement("div");
    cell5.textContent = currentEmployee.department;
    elEmployee.appendChild(cell5);

    const cell6 = document.createElement("div");
    cell6.textContent = currentEmployee.salary;
    elEmployee.appendChild(cell6);

    const cell7 = document.createElement("div");

    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => {
      editFunction.editEmployee(i, elEmployee);
    };
    cell7.appendChild(editButton);

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      employeeService.deleteEmployee(i);
      renderEmployee();
    };
    cell7.appendChild(deleteButton);

    elEmployee.appendChild(cell7);
    employeeTable.appendChild(elEmployee);
  }
}

elEmpDepartmentFilter.addEventListener("change", () => {
  renderEmployee();
});

export const main = {
  renderEmployee,
};
