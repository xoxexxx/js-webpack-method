const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/api", (req, res) => {
    res.status(200).json({ message: "is ok" });
})

app.get("*", (req, res) => {
    const query = req.params[0]
    res.sendFile(path.join(__dirname, 'src/html', `${query}.html`));
})

app.listen(port, () => console.log("serve run " + port));
