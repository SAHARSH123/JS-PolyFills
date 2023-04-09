const originalFetch = window.fetch;

window.fetch = async function (...args) {
  const updatedRequest = requestInterceptor(...args);
  const response = await originalFetch(updatedRequest);
  const updatedResponse = await responseInterceptor(response);
  return updatedResponse;
};

window.requestInterceptor = (...args) => {
  console.log("Inside request interceptor ", args[0]);
  return args[0];
};

window.responseInterceptor = (...args) => {
  console.log("inside response interceptor");
  return args[0].json(0);
};

fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
).then((res) => console.log(res));
