-- Q1
-- SELECT
-- ProductName,
-- UnitPrice
-- from Products
-- WHERE UnitPrice < (select UnitPrice 
--                     from Products
--                     WHERE ProductID = 8)

-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

SELECT
ProductName,
UnitPrice
from Products
WHERE UnitPrice < (select UnitPrice 
                    from Products
                    WHERE ProductID = 8)