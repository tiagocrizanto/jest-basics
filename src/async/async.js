module.exports = {
    addAsync: (a, b, callback) => {
        setTimeout(() => {
            const result = a + b;
            callback(result);
          }, 500)
    }
}
