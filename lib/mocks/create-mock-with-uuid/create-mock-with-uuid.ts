import { v4 as uuidv4 } from 'uuid';
import { ClassConstructor, WithMockedUUID } from '../../utils';

/**
 * Generate a new instance of a class with the proprerty `_mockedUuid` to create a discriminator for testing purposes.
 *
 * @template TClass - The type of the class instance.
 * @param classReference - The class reference.
 * @returns A new instance of the class with a UUID as discriminator.
 */
export function createMockWithUUID<TClass>(classReference: ClassConstructor<TClass>): WithMockedUUID<TClass> {
    const object = {
        _mockedUuid: uuidv4(),
    } as WithMockedUUID<TClass>;

    Object.setPrototypeOf(object, classReference.prototype);

    return object;
}
