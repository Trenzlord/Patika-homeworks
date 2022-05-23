import getData from "./app.js";

(async () => {
    const results = await getData(1);
    console.log(results);
})();