ALTER TABLE Customers ALTER COLUMN CustType VARCHAR(255);
ALTER TABLE Customers ALTER COLUMN CustStatus VARCHAR(255);
ALTER TABLE Customers ALTER COLUMN CreditCard VARCHAR(50);
ALTER TABLE Receipt ALTER COLUMN PaidAmt DECIMAL(10, 5);
ALTER TABLE Accounting ALTER COLUMN Amount DECIMAL(10, 5);
ALTER TABLE Accounting ALTER COLUMN crdtDebt VARCHAR(255);
ALTER TABLE DeliveryFees ALTER COLUMN delivery VARCHAR(255);
ALTER TABLE DeliveryFees ALTER COLUMN delfee DECIMAL(10, 5);
ALTER TABLE Subscription ALTER COLUMN [Status] VARCHAR(255);
ALTER TABLE Accounting ALTER COLUMN crdtDebt int;

update Accounting set CrdtDebt= 1
WHERE InvNo = 1
update Accounting set CrdtDebt= -1
WHERE InvNo = 2
update Accounting set CrdtDebt= -1
WHERE InvNo = 3
update Accounting set CrdtDebt= 1
WHERE InvNo = 4



