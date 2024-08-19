SELECT 
[Date],
PaidAmt,
[Status]
from ExOrders eo JOIN Receipt re
on eo.OrderNo = re.OrderNo  
order by [Date] ASC