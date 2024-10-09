const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { dbConnect } = require("./config/database");
const userRoutes = require("./routes/User");

const app = express();

const PORT = 4000;

//database connect
dbConnect();

//middlewares
app.use(express.json());
app.use(cookieParser());


app.use(
	cors({
		// frontend url
		origin:"*",
		credentials:true,
	})
)


//routes
app.use("/api/v1/auth", userRoutes);




//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})