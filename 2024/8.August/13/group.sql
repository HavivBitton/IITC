-- Q1
-- SELECT MIN(LastName)
-- from Employees

-- //////////////////////////////////////////////////////////

-- Q2
-- SELECT MAX(FirstName)
-- from Employees

-- //////////////////////////////////////////////////////////

-- Q3
-- SELECT COUNT(EmployeeID)
-- from Employees

-- //////////////////////////////////////////////////////////

-- Q4
-- SELECT COUNT(Region)
-- from Employees

-- //////////////////////////////////////////////////////////

-- Q5
-- SELECT AVG(UnitPrice)
-- from Products

-- //////////////////////////////////////////////////////////

-- Q6
-- SELECT
-- MAX(UnitPrice) maxPrice,
-- AVG(UnitPrice) avargePrice
-- from Products

-- //////////////////////////////////////////////////////////

-- Q7
-- SELECT 
-- MIN(BirthDate) 'Min BirthDay',
-- MAX(BirthDate) 'Max BirthDay'
-- from Employees

-- //////////////////////////////////////////////////////////

-- Q8
-- SELECT COUNT(CustomerID) 'Number of Customers'
-- from Customers

-- //////////////////////////////////////////////////////////

-- Q9
-- SELECT COUNT( distinct CustomerID) 'Number of Customers'
-- from Orders

-- //////////////////////////////////////////////////////////

-- Q10
-- SELECT 
-- CategoryID ,
-- MAX(UnitPrice) 'Max price',
-- Min(UnitPrice) 'Min price',
-- AVG(UnitPrice) 'Avarge price'
-- from Products
-- GROUP by CategoryID 

-- //////////////////////////////////////////////////////////

-- Q11
-- SELECT SupplierID,
-- MAX(UnitPrice) maxPrice
-- from Products
-- GROUP by SupplierID
-- order by SupplierID DESC

-- //////////////////////////////////////////////////////////

-- Q12
-- SELECT SupplierID ,
-- AVG(UnitsInStock) 'Avarge unit in stock'
-- from Products
-- GROUP by SupplierID
-- ORDER by SupplierID DESC 

-- //////////////////////////////////////////////////////////

-- Q13
-- SELECT COUNT(CustomerID) 'Number of customers',
--  City,Country
-- from Customers
-- GROUP by City , Country

-- //////////////////////////////////////////////////////////

-- Q14
-- SELECT AVG(UnitPrice) 'Avarge price'
-- from Products
-- WHERE UnitPrice > 40
-- GROUP by CategoryID

-- //////////////////////////////////////////////////////////

-- Q15
-- SELECT 
-- COUNT(*) 'number of customers',
-- City
-- from Customers
-- WHERE City = 'london'
-- GROUP by City

-- //////////////////////////////////////////////////////////

-- Q16
-- SELECT
-- MAX(UnitPrice) 'Max price',
-- Min(UnitPrice) 'Min price' ,
-- AVG(UnitPrice) 'Avarge price' ,
-- COUNT(ProductID) 'Numbers of units',
-- CategoryID 'Category ID',
-- SupplierID 'Supplier ID'
-- from Products
-- GROUP by CategoryID, SupplierID

-- //////////////////////////////////////////////////////////

-- Q17
-- SELECT
-- CategoryID,
-- MAX(UnitPrice) 'Max price'
-- from Products
-- GROUP by CategoryID
-- HAVING MAX(UnitPrice) > 40

-- //////////////////////////////////////////////////////////

-- Q18
-- SELECT
-- AVG(UnitPrice) 'Avarge price'
-- from Products
-- WHERE UnitPrice >40
-- GROUP by SupplierID

-- //////////////////////////////////////////////////////////

-- Q19
-- SELECT
-- cat.CategoryName,
-- UnitsOnOrder 'Units on order' ,
-- UnitsInStock 'Units in stock'
-- from Products pro JOIN Categories cat
-- on pro.CategoryID = cat.CategoryID
-- WHERE CategoryName LIKE '%c%'
-- GROUP by cat.CategoryName ,UnitsOnOrder, UnitsInStock
-- HAVING SUM(UnitsOnOrder) >20
-- ORDER by CategoryName ASC