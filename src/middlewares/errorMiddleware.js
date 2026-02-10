const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log lỗi ra terminal để dev kiểm tra

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Lỗi hệ thống!",
    // Chỉ hiện stack trace khi đang ở môi trường development
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;
