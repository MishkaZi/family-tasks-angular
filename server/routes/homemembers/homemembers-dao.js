const connection = require('../connection-wrapper');

let ServerError = require('../../errors/server-error');
let ErrorType = require('../../errors/error-type');

const getHomeMembers = async () => {
  let sql = 'SELECT * FROM homemembers;';

  try {
    const homeMembers = await connection.executeWithParameters(sql);
    return homeMembers;
  } catch (error) {
    throw new ServerError(ErrorType.GET_HOMEMEMBERS_ERROR);
  }
};

module.exports = {
  getHomeMembers,
};
