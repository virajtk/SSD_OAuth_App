const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

// Importing Configs
const { port } = require("./configs/configs");

// Importing routes
const linkedinRoutes = require("./routes/linkedin.route");

// Initialize
const app = express();

// Configuring middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

// Configuring routes
app.use("/api/linkedin", linkedinRoutes.router);

// Web route
app.get("*", (req, res) => {
    res.status(200).send("BackSlash OAuth backend");
})

// Starting the Server
app.listen(port, () => {
    console.log(`Server has started on ${port}`);
})
