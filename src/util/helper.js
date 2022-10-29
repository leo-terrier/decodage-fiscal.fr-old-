
export const format = val => {

  return val && !isNaN(val) ? parseInt(val).toLocaleString() : '0';
};
export const parse = val => parseInt(val.replace(/[^0-9,.]+/g, ''), 10);

export const convertCamel = str => {
  if (str === 'IR') return 'Impot';
  const result = str.replace(/([A-Z])/g, '$1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

