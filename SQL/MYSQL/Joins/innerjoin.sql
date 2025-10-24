

use new;

show tables;

select e.name as Employee,
    d.name as Department
FROM Employee e
INNER JOIN EmpDept ed ON e.id = ed.empId
INNER JOIN Department d ON ed.deptId = d.id;




-- Cross Join
select * from orders,customers;
