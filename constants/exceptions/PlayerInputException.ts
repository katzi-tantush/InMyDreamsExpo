// TODO: use this error to alert about player input errors

export class PlayerInputException extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, PlayerInputException.prototype);
    }
}