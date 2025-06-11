import express from 'express';
import routes from './routes/index';

const app = express();

app.use('/', routes);      // ✅ Mounts all route handlers
app.listen(1245);          // ✅ Listens on correct port
export default app;        // ✅ Allows test access via chai.request(app)
