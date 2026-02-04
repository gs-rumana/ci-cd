import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_, res) => {
	res.send("This is CI/CD");
});

app.get('/cart', (_, res) => {
	res.send("Cart is Empty");
});

app.listen(port, () => console.log("Server running..."));
