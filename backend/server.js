const app = require("./src/app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Backend running on ${url}`);
});
