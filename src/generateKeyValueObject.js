import { generateKeyValueObjectFromString } from "./Utils";

const arr = ["Search Clicked", "Name Filter clicked"];

console.log(
  arr.reduce((acc, curr, index) => {
    return { ...acc, ...generateKeyValueObjectFromString(curr) };
  }, {})
);
