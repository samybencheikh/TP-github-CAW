const last = require('./last'); 

describe('last function', () => {
  it('should return the last n elements of an array', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5];

    // Act
    const result = last(array, 3);

    // Assert
    expect(result).toEqual([3, 4, 5]); // The last 3 elements of [1, 2, 3, 4, 5] are [3, 4, 5]
  });

  it('should return an empty array if n is 0', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5];

    // Act
    const result = last(array, 0);

    // Assert
    expect(result).toEqual([]); // The last 0 elements of any array is an empty array
  });

  it('should return the last element if n is null', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5];

    // Act
    const result = last(array, null);

    // Assert
    expect(result).toBe(5); // The last element of [1, 2, 3, 4, 5] is 5
  });
});
