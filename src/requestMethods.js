import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGExZGIzNjE4MTk4MWEwYzdkYjQ1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjgyMTM2NCwiZXhwIjoxNjgzMDgwNTY0fQ.Ypi4XSkvRgabptCq2PHd8nq-_Jpk-3E-3SUK-l_ErcA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
