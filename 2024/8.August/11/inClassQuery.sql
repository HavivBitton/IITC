-- SELECT DISTINCT EmployeeID
-- from EmployeeTerritories

-- SELECT *
-- FROM EmployeeTerritories
-- WHERE EmployeeID =2

-- Q1 
-- SELECT *
-- FROM Orders

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q2
-- SELECT *
-- FROM Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- -- Q3
-- SELECT  
-- FirstName,
-- Region,
-- HireDate,
-- country
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q4
-- SELECT OrderDate,
-- OrderID ,
-- CustomerID
-- from Orders

-- ////////////////////////////////////////////////////////////////////////////////////

--Q5
-- SELECT 
-- ProductID as Proid,
-- ProductName as Pronm,
-- UnitPrice as Untpr
-- from Products

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q6
-- SELECT
-- Address as "Add",
-- Region as reg,
-- City as ct
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q7
-- SELECT 
-- CustomerID,
-- Address + ' ' + City as fulladdsress
-- from Customers

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q8
-- SELECT
-- FirstName + ' ' + LastName as FullName,
-- BirthDate + 8 as BirthDay,
-- ReportsTo as #Manager
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q9
-- SELECT distinct City
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q10
-- SELECT distinct Country
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q11
-- SELECT distinct Title
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q12
-- SELECT distinct Country + ' '  + city   
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q13
-- SELECT
-- FirstName,
-- BirthDate ,
-- BirthDate + 5
-- from Employees

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q14
-- SELECT
-- ProductName ,
-- UnitPrice,
-- UnitPrice +12
-- from Products

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q15
-- SELECT
-- ProductID,
-- ProductName,
-- UnitPrice,
-- UnitPrice + (UnitPrice * 1.65) as newPrice,
-- UnitsInStock,
-- UnitsOnOrder,
-- UnitsInStock - UnitsOnOrder 
-- from Products

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q16
-- SELECT 
-- ProductID,
-- ProductName,
-- (UnitsInStock - UnitsOnOrder) * UnitPrice as notOrderProductPrice
-- from Products