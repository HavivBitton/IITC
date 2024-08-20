SELECT 
[Date],
PaidAmt,
[Status],
eo.OrderNo
from ExOrders eo JOIN Receipt re
on eo.OrderNo = re.OrderNo  
JOIN OrdersDeils od on od.OrderNo = eo.OrderNo 
WHERE eo.OrderNo = 12346
order by [Date] ASC
