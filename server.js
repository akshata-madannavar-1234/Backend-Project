const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Pages/Home.html");
});

// app.get('/menu', function(req, res){
//     axios.get('http://localhost:5500/menuItems')
//     .then(function(result){
//         res.render('menu3.ejs', {foodItems: result.data})
//     })
//     .catch(function(){
//         res.send('Failed to Fetch data from Food API')
//     })
// })

app.get("/menu", function (req, res) {
  const category = req.query.category; // Get category from query params
  console.log('Category from Frontend: ', category)

  axios
    .get("http://localhost:5500/menuItems")
    .then(function (result) {
      let filteredData = result.data;

      // Filter by category if specified
      if (category && category !== "all") {
        filteredData = result.data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
      }

      res.render("menu3.ejs", {
        foodItems: filteredData,
        activeCategory: category || "all",
      });
    })
    .catch(function (error) {
      console.error("Error:", error);
      res.send("Failed to Fetch data from Food API");
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
