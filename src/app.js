const express = require('express');
const sequelize = require('./config/database');
const Product = require('./models/Product');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);
// Middleware xử lý lỗi phải đặt cuối cùng
app.use(errorHandler);

// Kiểm tra kết nối DB và đồng bộ Model
sequelize.sync({ alter: true }) // alter: true giúp cập nhật bảng nếu bạn thay đổi Model sau này
  .then(() => {
    console.log('✅ Database & Tables đã sẵn sàng!');
  })
  .catch(err => {
    console.error('❌ Lỗi kết nối Database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});