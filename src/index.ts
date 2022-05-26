import Koa from 'koa';
const app = new Koa();

app.use(async (ctx: { body: string; }) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT);
