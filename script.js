// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
    // Prompt user for employee details
    const firstName = prompt('Enter employee first name:');
    const lastName = prompt('Enter employee last name:');
    let salary = prompt('Enter employee salary:');
    
    // Convert salary to number, default to 0 if input is not valid
    salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

    // Create employee object and push to employees array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);

    // Ask user if they want to continue adding employees
    const addMore = confirm('Do you want to add another employee?');
    if (!addMore) {
      continueAdding = false;
    }
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", { style:"currency", currency:"USD" })}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log('Random Employee:');
  console.table(randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  employeesArray.forEach(employee => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", { style:"currency", currency:"USD" });
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  });
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
