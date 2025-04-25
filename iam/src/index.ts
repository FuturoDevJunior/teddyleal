import 'dotenv/config';

import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 4000;

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'iam' }));

app.listen(port, '0.0.0.0', () => {
  console.log(`IAM service running on http://0.0.0.0:${port}`);
}); 