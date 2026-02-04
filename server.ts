import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_, res) => {
	res.send("This is CI/CD");
});

app.listen(port, () => console.log("Server running..."));
