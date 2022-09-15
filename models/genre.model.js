module.exports = (mongoose) => {
  const Genre = mongoose.model(
    "Genre",
    mongoose.Schema({
      genreid: Number,
      genre: String,
    })
  );
  return Genre;
};
