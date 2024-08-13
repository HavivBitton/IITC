
-- Q1 
-- SELECT 
-- FirstName,
-- LastName
-- FROM Employees
-- WHERE EmployeeID = 3

-- ////////////////////////////////////////////////////////////////////////////////////

-- -- Q2
-- SELECT
-- ProductName,
-- UnitPrice
-- from Products
-- WHERE ProductID = 4

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q3
-- SELECT 
-- ProductID,
-- ProductName,
-- UnitPrice
-- from Products 
-- WHERE UnitPrice > 20
-- order by UnitPrice ASC

-- ////////////////////////////////////////////////////////////////////////////////////

--Q4
-- SELECT 
-- FirstName + ' ' + LastName fullName,
-- BirthDate,
-- ReportsTo
-- from Employees 
-- WHERE EmployeeID = 8

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q5
-- SELECT
-- EmployeeID,
-- FirstName + ' ' + LastName fullName,
-- BirthDate
-- from Employees
-- WHERE City = 'london'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q6
-- SELECT *
-- from Products
-- where UnitPrice not BETWEEN 50 and 100

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q7
-- SELECT 
-- ProductName,
-- UnitPrice
-- from Products
-- WHERE UnitPrice BETWEEN 21.35 and 43.9 
-- order by UnitPrice DESC

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q8
-- SELECT
-- EmployeeID,
-- LastName,
-- HireDate
-- from Employees
-- WHERE City = 'london' or City =  'tacoma'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q9
-- SELECT
-- EmployeeID,
-- FirstName + ' ' + LastName fullName 
-- from Employees
-- WHERE EmployeeID IN (1,2,5)

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q10
-- SELECT 
-- FirstName + ' ' + LastName fullName,
--  BirthDate
-- from Employees
-- WHERE EmployeeID not in (4,5,7)

-- ////////////////////////////////////////////////////////////////////////////////////

-- -- Q11
-- SELECT 
-- ProductID,
-- ProductName,
-- CategoryID
-- from Products
-- WHERE CategoryID not in (1,2,7)
-- order by CategoryID ASC

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q12
-- SELECT 
-- FirstName,
-- Region
-- from Employees
-- WHERE Region is NULL

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q13
-- SELECT top 3
-- ProductName,
-- UnitPrice
-- from Products

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q14
-- SELECT
-- OrderID,
-- OrderDate,
-- RequiredDate
-- from Orders
-- WHERE RequiredDate > '1996-10-31'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q15
-- SELECT
-- EmployeeID,
-- LastName,
-- ReportsTo
-- from Employees
-- WHERE ReportsTo is not NULL
-- order by EmployeeID ASC

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q16
-- SELECT *
-- from Categories
-- WHERE CategoryName LIKE '%c%'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q17
-- SELECT
-- CompanyName,
-- Country
-- from Customers
-- WHERE CompanyName like '%a'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q18
-- SELECT 
-- ProductName,
-- CategoryID
-- from Products
-- WHERE ProductName like '%a_'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q19
-- SELECT 
-- OrderID,
-- CustomerID,
-- EmployeeID
-- from Orders
-- WHERE OrderDate BETWEEN '1997-4-1' and '1997-5-31'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q20
-- SELECT 
-- CustomerID,
-- CompanyName,
-- Country,
-- Phone,
-- Region
-- from Customers
-- WHERE Country LIKE '[MFG]%' and Region is null

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q21
-- SELECT 
-- EmployeeID,
-- FirstName + ' ' + LastName fullname,
-- BirthDate,
-- Country
-- from Employees
-- WHERE LastName LIKE '%[kd]%' or BirthDate like '1996'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q22
-- SELECT
-- ProductName,
-- UnitPrice,
-- SupplierID
-- from Products
-- WHERE UnitPrice > 30 and SupplierID in (1,3)

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q23
-- SELECT
-- OrderID,
-- EmployeeID,
-- OrderID,
-- RequiredDate,
-- ShipName
-- from Orders
-- WHERE EmployeeID =7 
-- and (ShipName in  ('QUICK-Stop' ,'Du mond entire ','Eastern ','Connection'))
-- and OrderDate+20 < RequiredDate

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q24
-- SELECT
-- ProductID,
-- ProductName
-- from Products
-- WHERE (SupplierID in (16,8,21) OR UnitPrice <10) 
-- and UnitsInStock not BETWEEN 10 and 100 
-- order by UnitPrice ASC