const express = require('express');
const homeMembersLogic = require('./homeMembers-logic');

const router = express.Router();

//Get all homeMembers
router.get('/', async (req, res, next) => {
  try {
    const homeMembers = await homeMembersLogic.getHomeMembers();
    res.json(homeMembers);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
