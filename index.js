import http from "k6/http";
import { sleep } from "k6";

export default function () {
  let response = http.get("http://localhost:3000/");
  sleep(0.1);
}
