export class Validator {
    static validCardText = (value: string): boolean => {
        return value !== '' && value.length > 1;
    }
}