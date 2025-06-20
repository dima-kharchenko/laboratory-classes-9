const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const { mongoConnect } = require("./database");


dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);


mongoConnect(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
});

