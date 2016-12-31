import config from './webpack.local.config.babel';
import express from 'express';
import path from 'path';
import webpack from 'webpack';

const app = express();
const compiler = webpack(config);

app.use(require(`webpack-dev-middleware`)(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  silent: true
}));

app.use(require(`webpack-hot-middleware`)(compiler));

// Serve application assets
app.get(`/app.js`, (request, response) => {
  response.redirect(`//0.0.0.0:3000/build/app.js`);
});

app.get(`/style.css`, (request, response) => {
  response.redirect(`//0.0.0.0:3000/build/style.css`);
});

app.get(`*`, function(request, response) {
  response.sendFile(path.join(__dirname, `build`, `index.html`));
});

// Express server listening.
app.listen(3000, function(error) {
  if (error) {
    return console.error(error);
  }

  console.log(`⚡  Quickstart3 listening at http://localhost:3000/`);
});
