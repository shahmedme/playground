import { add } from "./calc";
import $ from "jquery";
import "../sass/styles.scss";

$(".btn").on("click", () => {
  $("#text").text(add(3, 4));
});
