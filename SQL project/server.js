const express = require("express");
const sql = require("mssql");
require("dotenv").config();

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true, // Bypass SSL certificate validation
    trustedConnection: true,
    connectTimeout: 30000, // Increase connection timeout to 30 seconds
  },
};

// Route to get data
//q6.1
app.get("/qSixOne", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query("SELECT * FROM ExOrders");

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

//q6.2
app.get("/qSixTwo", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query(`SELECT
[Date],
PaidAmt,
[Status],
eo.OrderNo
from ExOrders eo JOIN Receipt re
on eo.OrderNo = re.OrderNo
JOIN OrdersDeils od on od.OrderNo = eo.OrderNo
WHERE eo.OrderNo = 12346
order by [Date] ASC`);

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

//q6.3
app.get("/qSixThree", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query(`SELECT
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
WHERE cus.CustID = 121212001`);

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

//q6.4
app.get("/qSixFour", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query(`
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
From Accounting`);

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

app.get("/qSixFive", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query(`
SELECT 
eo.[Date],
SuppDate,
TotAmount,
[Status]
from ExOrders eo join Invoices inv
on eo.OrderNo = inv.OrderNo
WHERE [Status] = 'Cancelled'
order by eo.[Date]`);

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
