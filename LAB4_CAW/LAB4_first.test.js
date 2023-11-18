const first = require('./first'); 

describe('first function', () => {
  it('should return the first n elements of an array', () => {
 
    const array = [1, 2, 3, 4, 5];

  
    const result = first(array, 3);

    expect(result).toEqual([1, 2, 3]); 
  });

  it('should return an empty array if n is 0', () => {
   
    const array = [1, 2, 3, 4, 5];

   
    const result = first(array, 0);

   
    expect(result).toEqual([]); 
  });
});