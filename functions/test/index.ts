import fetch from "node-fetch";

const callFunction = async () => {
  const response = await fetch(
    "http://127.0.0.1:5001/sensenets-9ef26/us-central1/helloWorld"
  );
  const data = await response.json();
  console.log(data);
};
(() => callFunction())();
