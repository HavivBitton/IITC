import { randomData } from "./static-data.js";

function getFromStorage(key) {
  if (!JSON.parse(localStorage.getItem(key))) {
    saveToStorage(key, randomData.data);
    getFromStorage(key);
  } else return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const utils = {
  getFromStorage,
  saveToStorage,
};
