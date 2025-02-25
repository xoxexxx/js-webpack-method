npm init -y  # Инициализация нового проекта Node.js
npm install --save-dev webpack webpack-cli  # Установка Webpack и Webpack CLI
npm install --save-dev babel-loader @babel/core @babel/preset-env  # Установка Babel для транспиляции кода
npm install --save-dev html-webpack-plugin  # Плагин для автоматической генерации HTML

//# selector element is arrow function
const elem = (param) => document.querySelector(param);

//#location change is history function
history.replaceState(object, "", param);

//#promise json db
function getREST() {
  const promise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

getREST("./first-db.json").then(db => {
    const data = JSON.parse(db);
    return data
  }).then((data) => getREST("db-${data.param}.json")).then(
    JSON.parse,
    error => throw error
  );




