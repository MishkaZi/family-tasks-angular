let ErrorType = {
  GENERAL_ERROR: {
    id: 1,
    httpCode: 600,
    message: 'A general error, read logs.',
    isShowStackTrace: true,
  },
  ADD_TODO_ERROR: {
    id: 2,
    httpCode: 601,
    message: 'Cant add todo, read logs',
    isShowStackTrace: true,
  },
  DELETE_TODO_ERROR: {
    id: 3,
    httpCode: 602,
    message: 'Cant delete todo, read logs',
    isShowStackTrace: true,
  },
  GET_HOMEMEMBERS_ERROR: {
    id: 4,
    httpCode: 603,
    message: 'Cant get homemembers, read logs',
    isShowStackTrace: true,
  },
  GET_TODOS_ERROR: {
    id: 5,
    httpCode: 604,
    message: 'Cant get todos list, read logs',
    isShowStackTrace: true,
  }
};

module.exports = ErrorType;
