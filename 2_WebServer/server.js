// Sử dụng module 'express' để khởi tạo 1 web server
import express, { json } from 'express';
import * as dotenv from 'dotenv';
import {productRouter} from './routes/index.js';
import connectDB from './database.js';

dotenv.config();
// Tạo 1 constant 'app' đại diện cho server express trong ứng dụng
const app = express();
// Thêm middleware kiểm soát dữ liệu của Request
app.use(json());

// Kích hoạt hoạt động định tuyến (Routing) cho các request của Client
app.get('/', (req, res) => {
    res.send('<h1 style="color:red">Welcome to Home page</h1>');
})

app.use('/products', productRouter);

const Port = process.env.PORT || 8080;

// Lắng nghe các request gửi tới web server tại port 9999
app.listen(Port, async() => {
    connectDB();
    console.log(`Web server running on http://localhost:${Port}`);
})

