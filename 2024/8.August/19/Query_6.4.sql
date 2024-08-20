
SELECT 
OrderNo,
InvNo,
[Date],
Amount * CrdtDebt as 'total'
from Accounting

UNION ALL

SELECT
null as OrderNo,
null asInvNo,
null as [Date], 
sum (Amount * CrdtDebt ) as 'total credit'
From Accounting
WHERE CrdtDebt = 1

UNION ALL

SELECT 
null as OrderNo,
null asInvNo,
null as [Date], 
sum (Amount * CrdtDebt )as 'total dedit'
From Accounting
WHERE CrdtDebt = -1

UNION ALL

SELECT 
null as OrderNo,
null asInvNo,
null as [Date], 
sum (Amount * CrdtDebt )as 'total dedit'
From Accounting