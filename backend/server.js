const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log("Backend is running.");
})