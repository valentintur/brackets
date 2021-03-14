module.exports = function check(str, bracketsConfig) {
let res;
 for (let i = 0; i < bracketsConfig.length; i++) {
    let elemConfig = bracketsConfig[i].join('');

    while (str.includes(elemConfig)) {
      str = str.replace(elemConfig, '')
      i = -1;
    }
 }

return str ? false : true;
}

