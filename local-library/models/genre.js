const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

// Virtuelles Attribut für die URL des Genres
GenreSchema.virtual("url").get(function () {
    
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/genre/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Genre", GenreSchema);