import { createMockWithUUID } from './create-mock-with-uuid';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ClassTestMock {}

describe('prepare-mock', () => {
    const classToMock = ClassTestMock;

    it('should call Object.setPrototypeOf with right parameters', () => {
        const expectedOption = {
            _mockedUuid: expect.any(String),
        };

        jest.spyOn(Object, 'setPrototypeOf').mockImplementation();

        createMockWithUUID(classToMock);

        expect(Object.setPrototypeOf).toHaveBeenCalledWith(expectedOption, classToMock.prototype);
    });

    describe('when prepare mock object', () => {
        it('should return the instance decorated with uuid', () => {
            const result = createMockWithUUID(classToMock);

            expect(result).toBeInstanceOf(classToMock);
            expect(result).toHaveProperty('_mockedUuid', expect.any(String));
        });
    });
});
