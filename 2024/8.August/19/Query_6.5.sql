SELECT 
eo.[Date],
SuppDate,
TotAmount,
[Status]
from ExOrders eo join Invoices inv
on eo.OrderNo = inv.OrderNo
WHERE [Status] = 'Cancelled'
order by eo.[Date]