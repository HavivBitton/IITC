import { utils } from "./utils.js";

const EMPLOYEE_STOREGE_KEY = "emloyees";

let gEmployeeList = utils.getFromStorage(EMPLOYEE_STOREGE_KEY);

// Adding employee
function addEmployee(firstName, lastName, age, startDate, department, salary) {
  // Create an object from the input data
  const newEmployee = {
    firstName,
    lastName,
    age,
    startDate,
    department,
    salary,
  };
  // Push the new employees object to the employees gEmployeeList array
  gEmployeeList.push(newEmployee);

  utils.saveToStorage(EMPLOYEE_STOREGE_KEY, gEmployeeList);
}

// Delete employee
function deleteEmployee(i) {
  // Remove the employee from the array
  gEmployeeList.splice(i, 1);
  // Update the localStorage
  utils.saveToStorage(EMPLOYEE_STOREGE_KEY, gEmployeeList);
}

function departmentFilter(filterValue) {
  let filterEmpList = [...gEmployeeList];

  if (filterValue === "All") {
    return filterEmpList; // Return all employees when "All" is selected
  } else if (filterValue === "Develop") {
    filterEmpList = gEmployeeList.filter(
      (employee) => employee.department === "Develop"
    );
  } else if (filterValue === "QA") {
    filterEmpList = gEmployeeList.filter(
      (employee) => employee.department === "QA"
    );
  } else if (filterValue === "Marketing") {
    filterEmpList = gEmployeeList.filter(
      (employee) => employee.department === "Marketing"
    );
  }
  return filterEmpList;
}

export const employeeService = {
  gEmployeeList,
  addEmployee,
  deleteEmployee,
  departmentFilter,
};
