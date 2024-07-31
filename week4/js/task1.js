// Employee constructor function
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Example employees
let employees = [
    new Employee('Alice', 30, 'HR', 50000),
    new Employee('Bob', 25, 'Engineering', 70000),
    new Employee('Charlie', 35, 'Engineering', 80000),
    new Employee('David', 40, 'Sales', 60000),
    new Employee('Eve', 29, 'HR', 55000)
];

// Display employees
function displayEmployees(employeeArray, elementId) {
    const employeeList = document.getElementById(elementId);
    employeeList.innerHTML = '';
    employeeArray.forEach((employee, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: $${employee.salary}
            <button class="details-btn" onclick="showEmployeeDetails(${index})">Details</button>
        `;
        employeeList.appendChild(li);
    });
}

// Initial display of employees
displayEmployees(employees, 'employee-list');

// Calculate Average Salary
function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}

// Display Average Salary
document.getElementById('average-salary').textContent = `Average Salary: $${calculateAverageSalary(employees).toFixed(2)}`;

// Find Employees in a Department
function findEmployeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

// Show Employees in Department
function showEmployeesInDepartment() {
    const department = document.getElementById('department-input').value;
    const departmentEmployees = findEmployeesInDepartment(employees, department);
    displayEmployees(departmentEmployees, 'department-employees-list');
}

// Increase Salary for Employees
function increaseSalary(employees, percentage) {
    employees.forEach(employee => {
        employee.salary += employee.salary * (percentage / 100);
    });
}

// Increase Employee Salaries
function increaseEmployeeSalaries() {
    const percentage = parseFloat(document.getElementById('salary-percentage').value);
    increaseSalary(employees, percentage);
    displayEmployees(employees, 'employee-list');
    document.getElementById('average-salary').textContent = `Average Salary: $${calculateAverageSalary(employees).toFixed(2)}`;
}

// Sort Employees by Age
function sortEmployeesByAge(employees) {
    return employees.sort((a, b) => a.age - b.age);
}

// Show Sorted Employees
function showSortedEmployees() {
    const sortedEmployees = sortEmployeesByAge(employees);
    displayEmployees(sortedEmployees, 'sorted-employee-list');
}

// Reset Data
function resetData() {
    employees = [
        new Employee('Alice', 30, 'HR', 50000),
        new Employee('Bob', 25, 'Engineering', 70000),
        new Employee('Charlie', 35, 'Engineering', 80000),
        new Employee('David', 40, 'Sales', 60000),
        new Employee('Eve', 29, 'HR', 55000)
    ];
    displayEmployees(employees, 'employee-list');
    document.getElementById('average-salary').textContent = `Average Salary: $${calculateAverageSalary(employees).toFixed(2)}`;
    document.getElementById('department-employees-list').innerHTML = '';
    document.getElementById('sorted-employee-list').innerHTML = '';
}

// Show Employee Details
function showEmployeeDetails(index) {
    const employee = employees[index];
    const modal = document.getElementById('employeeModal');
    document.getElementById('modal-employee-details').textContent = `
        Name: ${employee.name}
        Age: ${employee.age}
        Department: ${employee.department}
        Salary: $${employee.salary}
    `;
    modal.style.display = "block";
}

// Close Modal
const modal = document.getElementById('employeeModal');
const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
