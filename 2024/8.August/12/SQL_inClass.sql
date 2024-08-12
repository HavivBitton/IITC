-- SELECT 
-- ShipCountry = 'USA'
-- from Orders

-- ////////////////////////////////////////////////////////////////////////////////////

-- SELECT 
-- ProductName ,
-- UnitPrice + 9 ,
-- ProductID
-- from Products 
-- WHERE ProductName like '%c%' 

-- ////////////////////////////////////////////////////////////////////////////////////

-- SELECT
-- CategoryName,
-- [Description]
-- from Categories
-- WHERE CategoryID > 3 

-- ////////////////////////////////////////////////////////////////////////////////////

-- SELECT
-- MIN(Freight) as min ,
-- MAX(Freight) as MAX,
-- SUM(Freight) as sum,
-- AVG(Freight) as avarge,
-- COUNT(Freight) as COUNT
-- from Orders

-- ////////////////////////////////////////////////////////////////////////////////////

-- SELECT
-- MIN(UnitPrice) as min,
-- MAX(UnitPrice) as max,
-- SUM(UnitPrice) as sum,
-- AVG(UnitPrice) as avarge,
-- COUNT(UnitPrice) as count
-- from Products

-- ////////////////////////////////////////////////////////////////////////////////////

-- SELECT
-- FirstName + ' '  + LastName as fullName ,
-- City,
-- Employees.EmployeeID,
-- OrderID,
-- OrderDate
-- from Employees JOIN Orders
-- on Employees.EmployeeID = Orders.EmployeeID
-- WHERE Employees.EmployeeID IN (3,  5,  6)

-- ////////////////////////////////////////////////////////////////////////////////////

