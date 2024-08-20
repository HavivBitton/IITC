SELECT
cus.CustID,
CustName,
CustStatus,
OrderNo,
[Status],
Code,
Quant,
Freq
from Customers cus JOIN Subscription sub
on cus.CustID = sub.CustID
WHERE cus.CustID = 121212001