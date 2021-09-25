const homeMembersDao = require('./homemembers-dao');

const getHomeMembers = async () => {
  return await homeMembersDao.getHomeMembers();
};

module.exports = {
  getHomeMembers,
};
