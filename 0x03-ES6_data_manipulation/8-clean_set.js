export default function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string' || startString.length === 0) {
        return '';
    }
    const result = [];
    for (const value of set) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            result.push(value.substring(startString.length));
        }
    }
    return result.join('-');
}
