const { Router } = require("express");
const Message = require("./BeautyModel");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      comment: req.body.comment,
    });

    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;
