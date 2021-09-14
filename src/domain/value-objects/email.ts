
export class Email {
    private _address: string

    constructor(address: string) {
        if (!this.validate(address)) {
            throw new Error("Email is invalid!")
        }

        this._address = address
    }

    public get value(): string {
        return this._address
    }

    private validate(address: string): boolean {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(address.toLowerCase())
    }
}