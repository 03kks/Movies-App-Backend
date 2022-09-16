const Movie = require("../models").movie;

exports.findAllMovies = (req, res) => {
  const { status, title, genres, artists, start_date, end_date } = req.query;
  if (status === undefined) {
    Movie.find({})
      .then(data => res.json(data))
      .catch(err => res.status(500).send({ message: "Some Error Occurred while fetching movies", }));
  } else if (status === 'PUBLISHED') {
    Movie.find({ published: true })
      .then(data => res.send({ movies: data }))
      .catch(err => req.status(500).send({ message: "Some Error Occurred while fetching movies", }));
  } else if (status === 'RELEASED') {
    Movie.find({ released: true })
      .then(data => res.send({ movies: data }))
      .catch(err => req.status(500).send({ message: "Some Error Occurred while fetching movies", }));
  } else {
    res.status(400).send({ message: "invalid query string" });
  }
};


exports.findOne = (req, res) => {
  const { movieId } = req.params;
  Movie.find({ movieid: movieId })
    .then((data) => {
      if (data === null) {
        res.send({ message: "Movie ID invalid" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Movie Not Found",
      });
    });
};


// API to find all shows of a movie based on id
exports.findShows = (req, res) => {
  const { movieId } = req.params.id;
  Movie.find({ movieid: movieId }).select("shows")
    .then((data) => {
      if (data === null) {
        res.send({ message: "Movie ID invalid" })
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Movie Not Found",
      });
    });
};