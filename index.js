import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/about', (req, res) => {
  res.send('About Us');
});
app.post('/contact', (req, res) => {
  res.send('Contact Us');
} );
app.put('/update', (req, res) => {
  res.send('Update');
}
);
app.delete('/delete', (req, res) => {
  res.send('Delete');
}
);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});