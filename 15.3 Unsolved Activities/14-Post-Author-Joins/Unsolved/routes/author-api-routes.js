var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    
    // 1. Add a join to include all of each Author's Posts
    var query = {};
    if(req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }

    db.Author.findAll({
      where: query,
      includes:[db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
      
      })
    });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};
