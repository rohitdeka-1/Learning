Show DATABASES;

use bank_db;

show tables;

desc employees;

INSERT INTO employees
VALUES
-- (101,"Raju","Manager","Rnew"),
(102,"Raju1","Manager1","Rnew1"),
(103,"Raju2","Manager2","Rnew2"),
(104,"Raju3","Manager3","Rnew3");

INSERT INTO  employees
VALUES
-- (105,"rohit","Developer Manager","Tech");
(106,"deka","Developer Manager","Tech");

select * from employees;

select emp_id,name from employees;


select emp_id,name,desig,dept from employees;


select * from employees where dept="IT";

Update employees 
set dept="IT"
where dept="Tech";
asjdajsdlasdlaksmdlas
delete from employees 
where emp_id=102;


SELECT CONCAT_WS(':',emp_id,fname,desig,dept ) From employees where emp_id = 101;






















