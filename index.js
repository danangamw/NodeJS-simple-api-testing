const app = require('./app');

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start(3333);
