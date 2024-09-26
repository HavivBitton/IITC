import { utils } from "./utils.js";
import { employeeService } from "./employee.service.js";
import { main } from "./main.js";

// Function to handle editing an employee
function editEmployee(index, rowElement) {
  const employee = employeeService.gEmployeeList[index];

  // Replace cells with input fields for editing
  rowElement.children[0].innerHTML = `<input type="text" value="${employee.firstName}" id="edit-firstName">`;
  rowElement.children[1].innerHTML = `<input type="text" value="${employee.lastName}" id="edit-lastName">`;
  rowElement.children[2].innerHTML = `<input type="number" value="${employee.age}" id="edit-age">`;
  rowElement.children[3].innerHTML = `<input type="date" value="${employee.startDate}" id="edit-startDate">`;
  rowElement.children[4].innerHTML = `
        <select id="edit-department">
          <option value="Marketing" ${
            employee.department === "Marketing" ? "selected" : ""
          }>Marketing</option>
          <option value="Develop" ${
            employee.department === "Develop" ? "selected" : ""
          }>Develop</option>
          <option value="QA" ${
            employee.department === "QA" ? "selected" : ""
          }>QA</option>
        </select>`;
  rowElement.children[5].innerHTML = `<input type="number" value="${employee.salary}" id="edit-salary">`;

  // Change Edit button to Save
  const editButton = rowElement.children[6].children[0];
  editButton.textContent = "Save";
  editButton.onclick = () => {
    saveEmployee(index);
  };
}

// Function to save edited employee data
function saveEmployee(index) {
  const updatedEmployee = {
    firstName: document.getElementById("edit-firstName").value,
    lastName: document.getElementById("edit-lastName").value,
    age: document.getElementById("edit-age").value,
    startDate: document.getElementById("edit-startDate").value,
    department: document.getElementById("edit-department").value,
    salary: document.getElementById("edit-salary").value,
  };

  // Update the employee in the list
  employeeService.gEmployeeList[index] = updatedEmployee;
  utils.saveToStorage("employees", employeeService.gEmployeeList);

  main.renderEmployee();
}

export const editFunction = {
  editEmployee,
};
