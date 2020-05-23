import app from './app';

const port = process.env.PORT || 8081;

// eslint-disable-next-line no-console
console.log(
  `Started mock-server in port ${port}
  Routes:
    - GET /
  Query Parameters:
    - delay: time in miliseconds
    - error: returns an error response (500)`
);

app.listen(port);
