const express = require('express');
const router = express.Router();

// Overview route
router.get('/overview', (req, res) => {
  try {
    // Query database to get overview content
    const overviewContent = {
      title: '春晚小品集合',
      description: '这是一个春晚小品集合的网站，提供整体介绍、类型分类、点赞评论等功能。'
    };
    res.json(overviewContent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Category route
router.get('/category', (req, res) => {
  try {
    // Query database to get category content
    const categoryContent = [
      {
        id: 1,
        title: '小品1',
        description: '这是小品1的简介。'
      },
      {
        id: 2,
        title: '小品2',
        description: '这是小品2的简介。'
      },
      {
        id: 3,
        title: '小品3',
        description: '这是小品3的简介。'
      }
    ];
    res.json(categoryContent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Like route
router.post('/like', (req, res) => {
  try {
    const sketchId = req.body.sketchId;
    // Update database to increment likes for the sketch with the given sketchId
    res.json({ message: 'Sketch liked' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Comment route
router.post('/comment', (req, res) => {
  try {
    const sketchId = req.body.sketchId;
    const commentContent = req.body.commentContent;
    // Save comment to database for the sketch with the given sketchId
    res.json({ message: 'Comment submitted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Search Sketches
router.get('/overview', (req, res) => {
  try {
    const keyword = req.query.keyword;
    // Search for sketches in the database based on the keyword
    // Perform the database operation to search for sketches based on the provided keyword
    // For example, you can use a database query to search for sketches with titles or descriptions containing the keyword
  
    // Return the search results
    const searchResults = [
      { title: 'Sketch 1', description: 'This is the description of Sketch 1.' },
      { title: 'Sketch 2', description: 'This is the description of Sketch 2.' }
    ];
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;