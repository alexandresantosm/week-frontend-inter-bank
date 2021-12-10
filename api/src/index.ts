import express, { Request, Response } from 'express';

const app = express();
const PORT = 3333;

app.get('/', (req: Request, res: Response) =>
  res.send('Express + Typescript Server'),
);
app.listen(PORT, () =>
  console.log(`🏃Server is running at http://localhost:${PORT}`),
);
