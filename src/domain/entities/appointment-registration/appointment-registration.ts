
export class AppointmentRegistration {
    private _createdAt: Date
    private _clockIn?: Date
    private _clockOut?: Date
    private _restIn?: Date
    private _restOut?: Date

    constructor(createdAt?: Date) {
        this._createdAt = createdAt || new Date()
    }

    clockIn(clockIn: Date): void {
        this._clockIn = clockIn
    }

    clockOut(clockOut: Date): void {
        if (!this._clockIn) {
            throw new Error('Cannot clock out before clock in')
        }

        if (clockOut.getTime() < this._clockIn.getTime()) {
            throw new Error('Clock in cannot be bigger than clock out')
        }

        this._clockOut = clockOut
    }

    restIn(restIn: Date): void {
        this._restIn = restIn
    }

    restOut(restOut: Date): void {
        this._restOut = restOut
    }

    get appointment(): Appointment {
        return {
            clockIn: this._clockIn,
            clockOut: this._clockOut,
            restIn: this._restIn,
            restOut: this._restOut,
            createdAt: this._createdAt
        }
    }

    get createdAt(): Date {
        return this._createdAt
    }
}

export type Appointment = {
    clockIn?: Date
    clockOut?: Date
    restIn?: Date
    restOut?: Date
    createdAt: Date
}