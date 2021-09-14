import { Email } from "@/domain/value-objects/email"
import { Appointment as AppointmentType, AppointmentRegistration } from "@/domain/entities/appointment-registration/appointment-registration"

export class Employee {
    private _name: string
    private _email: Email
    private _appointmentRegistrationList: AppointmentRegistration[]
    private _currentAppointment: AppointmentRegistration

    private constructor(name: string, email: Email, currentAppointment?: AppointmentRegistration, appointmentList?: AppointmentRegistration[]) {
        this._name = name
        this._email = email
        this._currentAppointment = currentAppointment || new AppointmentRegistration()
        this._appointmentRegistrationList = appointmentList || []
    }

    static create(name: string, emailValue: string, currentAppointment?: AppointmentRegistration, appointmentList?: AppointmentRegistration[]): Employee {
        const email: Email = new Email(emailValue)

        if (name === '') {
            throw new Error('Name is invalid!')
        }

        return new Employee(name, email, currentAppointment, appointmentList)
    }

    clockIn(value: Date): void {
        this._currentAppointment.clockIn(value)
    }

    clockOut(value: Date): void {
        this._currentAppointment.clockOut(value)
    }

    restIn(value: Date): void {
        this._currentAppointment.restIn(value)
    }

    restOut(value: Date): void {
        this._currentAppointment.restOut(value)
    }

    get name(): string {
        return this._name
    }

    get email(): string {
        return this._email.value
    }

    get currentAppointmentRegistration(): AppointmentType {
        return this._currentAppointment.appointment
    }
}