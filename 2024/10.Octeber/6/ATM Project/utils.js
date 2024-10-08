function getFromStorage(key) {
  JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const utils = {
  getFromStorage,
  saveToStorage,
};