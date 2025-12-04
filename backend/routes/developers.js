const express = require("express");
const router = express.Router();

const Developer = require("../models/Developer");

router.post("/", async (req, res) => {
  try {
    const { name, role, techStack, experience } = req.body;

    if (!name || !role || !techStack || experience === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const validRoles = ["Frontend", "Backend", "Full-Stack"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    if (isNaN(experience) || Number(experience) < 0) {
      return res.status(400).json({
        success: false,
        message: "Experience must be a positive number",
      });
    }

    let techArr = [];

    if (typeof techStack === "string") {
      techArr = techStack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    if (!techArr.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid tech stack list",
      });
    }

    await Developer.create({
      name,
      role,
      techStack: techArr,
      experience,
    });

    res.status(201).json({
      success: true,
      message: "Developer saved successfully",
    });
  } catch (err) {
    console.error("POST /developers error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.get("/", async (_, res) => {
  try {
    const devs = await Developer.find().sort({ createdAt: -1 });
    res.json(devs);
  } catch (err) {
    console.error("GET /developers error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
