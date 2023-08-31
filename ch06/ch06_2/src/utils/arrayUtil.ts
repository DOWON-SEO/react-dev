export function swapItemsInArray<T>(array: T[], index1: number, index2: number) {
    return array.map((item, index) => (index === index1 ? array[index2] : index === index2 ? array[index1] : item));
}

export function removeItemsInArray<T>(array: T[], removeItemIndex: number) {
    return array.filter((notUsed, index) => index !== removeItemIndex);
}

export function insertItemAtIndexInArray<T>(array: T[], insertIndex: number, item: T) {
    const before = array.filter((item, index) => index < insertIndex);
    const after = array.filter((item, index) => index >= insertIndex);
    return [...before, item, ...after];
}
