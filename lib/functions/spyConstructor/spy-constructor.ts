export function spyConstructor<T extends object, Key extends keyof T = keyof T>(
    module: string,
    constructorName: Key,
): ReturnType<typeof jest.spyOn> {
    jest.doMock(module);

    const moduleImport = jest.requireActual<T>(module);

    const spiedConstructor = jest.spyOn(moduleImport, constructorName as any);
    return spiedConstructor;
}
