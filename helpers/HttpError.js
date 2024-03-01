const HttpError = (statusCode, message) => {
  const error = new Error(message);
  error.status = statusCode;
  return error;
};

export default HttpError;
