const mean = require('./LAB3_notation'); 
describe('mean function', () => {
  it('should calculate the mean of an array of numbers', () => {
    
    const scores = [1, 2, 3, 4, 5];

    
    const result = mean(scores);

  
    expect(result).toBe(3); 
  });
});