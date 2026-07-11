export async function errorMiddleware(err, req, res, next) {
  const statusCode = err.status || 500;
  const resp = {
    message: err.message,
    stack: err.stack,
  };

  if (process.env.NODE_ENV === "development") {
    res.status(statusCode).json(resp);
  } else {
    res.status(statusCode).json({
      message: err.message,
    });
  }
}
