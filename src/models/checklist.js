const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const checklistSchema = mongooose.Schema({
  name: { type: String, required: true },
  //referencia
  tasks: [
    {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

module.exports = mongoose.model("Checklist", checklistSchema);
