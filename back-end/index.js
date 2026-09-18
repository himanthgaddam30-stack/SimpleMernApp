let express=require('express');
let app=express();
let hrRoutes=require('./routes/hr_routes');
app.use("/hr", hrRoutes);
//localhost:3000/register
app.post("/register", (req, res) => {
    res.send("register route called");
});
//localhost:3000/viewstudent
app.get("/viewstudent", (req, res) => {
    res.send("view student route called");
});
//run the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});