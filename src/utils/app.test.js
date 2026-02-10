const { toCelsius, toFahrenheit, movingAverage } = require('./app');

describe('Pruebas de Ceslsius a Fahrenheit', () => {
    test('32°F → 0.0°C', () => 
        expect(toCelsius(32)).toBe(0.0)
    );

    test('0°C → 32.0°F', () => 
        expect(toFahrenheit(0)).toBe(32.0)
    );
        
    test('-40°C → -40.0°F', () => 
        expect(toFahrenheit(-40)).toBe(-40.0)
    );

    test('100°C → 212.0°F', () => 
        expect(toFahrenheit(100)).toBe(212.0)
    );
});

describe('movingAverage', () => {
    test('[10,20,30,40], 2 → [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });

    test('[1,2,3], 3 → [2.00]', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });

    test('TypeError si no es array de numeros', () => {
        expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
    });

    test('RangeError si ventana fuera de rango', () => {
        expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
    });
});