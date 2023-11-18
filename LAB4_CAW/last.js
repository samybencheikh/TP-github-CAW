function last(array, n) {
    if (array == null)
      return [];
    if (n == null)
      return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }

  module.exports =  last;  