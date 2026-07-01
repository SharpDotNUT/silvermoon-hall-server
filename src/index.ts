import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { RHoyoData } from './router/hoyo_data';

const app = new Elysia();

app.get('/', () => 'Hello TruE Elysia!');

app.use(cors());
app.use(RHoyoData);

app.listen(process.env.PORT || 11401);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
