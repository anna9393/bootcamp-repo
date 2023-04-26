export function FibOnIndex(index: number): number {
    if (index < 0) {
        throw new Error('Does not work for negative numbers');
    } else if (index === 0) {
        return index;
    } else if (index <= 1) {
        return index;
    }
    return FibOnIndex(index - 1) + FibOnIndex(index - 2);
}