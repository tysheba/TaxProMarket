const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const articleRoute = require("../models/Article")

// API Routes
router
  .route('/taxpros')
  .get(function (req, res) {
    res.send('Find A Taxpro')
  });

router.use("/api", apiRoutes);

//If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Routes to scrape Tax Related Articles

// A GET route for scraping the Journal of Accountancy website
app.get("/scrape", function (req, res) {
  // First, we grab the body of the html with request
  axios.get("https://www.journalofaccountancy.com/topics/tax.html").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every article tag, and do the following:
    $("article").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the title, summary, and href of every link, and save them as properties of the result object
      result.title = $(this)
        .find("h1")
        .children("a")
        .text();
      result.summary = $(this)
        .find("p")
        .text();
      result.link = "https://www.journalofaccountancy.com" + $(this)
        .find("h1")
        .children("a")
        .attr("href");


      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function (dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  });
});

app.get('/', function (req, res) {
  db.Article.find({})
    .then(function (dbArticle) {
      res.render('index', {dbArticle});
    });
});

// Route for getting all Articles from the db
app.get("/articles", function (req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function (dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;
