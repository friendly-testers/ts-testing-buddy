import { spyConstructor } from './spy-constructor';

describe('spyConstructor', () => {
    it('should returns a mock of the constructor', () => {
        const spiedObject = spyConstructor<typeof import('./__mocks__/stub-constructor')>(
            './__mocks__/stub-constructor',
            'StubConstructorExample',
        );

        expect(spiedObject._isMockFunction).toBeTrue();
    });

    it('should mocks the constructor with the desired value', () => {
        const mockedValue = jest.fn();

        const spiedObject = spyConstructor<typeof import('./__mocks__/stub-constructor')>(
            './__mocks__/stub-constructor',
            'StubConstructorExample',
        ).mockReturnValue(mockedValue);

        const resultFromMock = spiedObject();

        expect(resultFromMock).toBe(mockedValue);
    });
});
