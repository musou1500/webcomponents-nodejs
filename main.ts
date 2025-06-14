import * as ejs from "ejs";
import express from "express";

const app = express();
app.use(express.static("public"));
app.use(async (_req, res) => {
  try {
    const html = await ejs.renderFile("templates/index.ejs", {});
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } catch (e) {
    console.error("Error rendering template:", e);
    res.writeHead(500);
    res.end("Error rendering template");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
