let count = 0;

const server = Bun.serve({
  port: 3000,
  fetch: (req) => {
    count++;
    console.log("Bun : ", count);

    return new Response(Bun.file("./main.html"));
  },
  error: (err) => {
    console.log("we got an error", err);
  },
});

console.log("server is launched successfully : ", server.port);
