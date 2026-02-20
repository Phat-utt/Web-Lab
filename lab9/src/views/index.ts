import express from 'express';
import path from 'path';
import * as bookController from './controllers/bookController';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (for forms)
app.use(express.json()); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', bookController.home);

app.get('/books', bookController.listBooks);
app.get('/books/search', bookController.searchBooks);
app.post('/books', bookController.addBook);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});