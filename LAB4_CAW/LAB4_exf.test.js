const exf = require('./LAB3_echo');

describe('Exercice 1', () => {
    test('exf should log "aa" once', () => {

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        
     
        exf('aa', 1);

      
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);

      
        consoleLogSpy.mockRestore();
    });
});
