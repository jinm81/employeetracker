function viewRole() {
    var query = "SELECT title, salary, department_id FROM employees.employee";
  //   var employeeArr = [];
    connection.query(query, function (err, res) {
        console.log(res);
      var employeeArr = res.map((val) => {
        return {
          Name: val.title + val.salary + val.role_id + val.manager_id,
        };
      });
  
      // for (var i = 0; i < data.length; i++) {
      //   employeeArr.push(data[i].first_name + " " + data[i].last_name);
      // }
      consoleTable.printTable(employeeArr);
    });
  }
  
  function viewDeptartment() {
    var query = "name, FROM employees.employee";
  //   var employeeArr = [];
    connection.query(query, function (err, res) {
        console.log(res);
      var employeeArr = res.map((val) => {
        return {
          Name: val.name,
        };
      });
  
      // for (var i = 0; i < data.length; i++) {
      //   employeeArr.push(data[i].first_name + " " + data[i].last_name);
      // }
      consoleTable.printTable(employeeArr);
    });
  }
  
  
  
  
  
  
  function addRole() {
    var dept = "SELECT id,name FROM department";
    connection.query(dept, function (err, res) {
  
      // res = [{ id: 1, name: 'Sales'},...]
      // let departmentArr = [];
      // for (var i = 0; i < data.length; i++) {
      //   departmentArr.push(data[i].name);
      // }
      // console.log("dept Arr: ", departmentArr);
      inquirer.prompt([
        {
          type: "list",
          message: "Choose the department to add the role too: ",
          choices: res.map((val) => {
            return {
              Name: val.name, value: val.id
            };
          }),
          name: "department",
        },
      ]).then(function(answer) {
  console.log(answer)
      });
    })