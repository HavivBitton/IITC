-- Q1
-- SELECT
-- ProductName,
-- CategoryName
-- from Categories cat JOIN Products pro
-- on Cat.CategoryID = Pro.CategoryID

-- ///////////////////////////////////////////////////////////////////////////////////////

-- Q2
-- SELECT 
-- ProductName,
-- CompanyName
-- from Products pro join Suppliers sup
-- on pro.SupplierID = sup.SupplierID 

-- ///////////////////////////////////////////////////////////////////////////////////////

-- Q3
-- SELECT
-- OrderID,
-- CompanyName
-- from Orders ord join Customers cus 
-- on ord.CustomerID =cus.CustomerID
-- WHERE CompanyName like 'a%'

-- ///////////////////////////////////////////////////////////////////////////////////////

-- Q4
-- SELECT
-- RegionDescription,
-- TerritoryDescription
-- from Region reg join Territories ter
-- on ter.RegionID = reg.RegionID

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q5
-- SELECT
-- ProductName,
-- UnitPrice,
-- CategoryName
-- from Products pro join Categories cat
-- on pro.CategoryID = cat.CategoryID
-- WHERE UnitPrice>50 

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q6
-- SELECT
-- ProductID,
-- UnitPrice,
-- SupplierID,
-- CategoryName
-- from Products pro JOIN Categories cat
-- on pro.CategoryID = cat.CategoryID
-- WHERE SupplierID =3

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q7
-- SELECT
-- ProductID,
-- UnitPrice,
-- SupplierID,
-- CategoryName
-- from Products pro JOIN Categories cat
-- on pro.CategoryID = cat.CategoryID
-- where CategoryName like '%a%'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q8
-- SELECT
-- ProductName,
-- CategoryName,
-- sup.City
-- from Products pro JOIN Categories cat
-- on pro.CategoryID = cat.CategoryID 
-- join Suppliers sup on sup.SupplierID = pro.SupplierID 

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q9
-- SELECT 
-- pro.ProductName,
-- cat.[Description],
-- sup.City
-- from Products pro join Categories cat
-- on pro.CategoryID = cat.CategoryID
-- join Suppliers sup on pro.SupplierID = sup.SupplierID
-- WHERE sup.City ='london' or sup.City = 'tokyo'

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q10
-- SELECT
-- pro.ProductID,
-- cat.[Description],
-- sup.Country
-- from Products pro join Categories cat
-- on pro.CategoryID = cat.CategoryID
-- join Suppliers sup on pro.SupplierID = sup.SupplierID
-- where sup.Country like 'a%'


-- ////////////////////////////////////////////////////////////////////////////////////

-- Q11
-- SELECT 
-- CompanyName,
-- OrderID
-- from Customers c left JOIN Orders o
-- on c.CustomerID = o.CustomerID

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q12
-- SELECT
-- o.OrderID 'order id',
-- o.OrderDate 'order date',
-- o.ShipAddress 'ship address',
-- c.CustomerID 'customers id',
-- c.CompanyName 'company name',
-- c.Phone 'phone number'
-- from Orders o join Customers c
-- on o.CustomerID = c.CustomerID
-- WHERE YEAR(OrderDate) = 1996
-- AND (c.CustomerID like 'a%' or c.CustomerID like 'c%')

-- ////////////////////////////////////////////////////////////////////////////////////

-- Q12
-- SELECT
-- e.FirstName + ' ' + e.LastName 'Name',
-- o.OrderID 'order id',
-- o.OrderDate 'order date',
-- o.ShipAddress 'ship address',
-- c.CustomerID 'customers id',
-- c.CompanyName 'company name',
-- c.Phone 'phone number'
-- from Orders o join Customers c
-- on o.CustomerID = c.CustomerID
-- JOIN Employees e on e.EmployeeID = o.EmployeeID
-- WHERE YEAR(OrderDate) = 1996
-- AND (c.CustomerID like 'a%' or c.CustomerID like 'c%')
-- ORDER by o.OrderDate DESC
 