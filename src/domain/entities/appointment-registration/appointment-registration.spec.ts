import { AppointmentRegistration } from "./appointment-registration"

describe('AppointmentRegistration Entity', () => {
    test('clock in', () => {
        const appointment: AppointmentRegistration = new AppointmentRegistration()
        const clockIn = new Date()
        clockIn.setHours(8)

        appointment.clockIn(clockIn)

        expect(appointment.appointment.clockIn).toEqual(clockIn)
    })

    test('clock out', () => {
        const appointment: AppointmentRegistration = new AppointmentRegistration()

        const clockIn = new Date()
        clockIn.setHours(7)
        const clockOut = new Date()
        clockOut.setHours(8)

        appointment.clockIn(clockIn)
        appointment.clockOut(clockOut)

        expect(appointment.appointment.clockOut).toEqual(clockOut)
    })

    test('throw error when attempt to clock out before clock in', () => {
        const appointment: AppointmentRegistration = new AppointmentRegistration()

        const clockOut = new Date()
        clockOut.setHours(8)


        expect(() => appointment.clockOut(clockOut)).toThrowError('Cannot clock out before clock in')
    })

    test('throw error clock in is bigger than clock out', () => {
        const appointment: AppointmentRegistration = new AppointmentRegistration()

        const clockIn = new Date()
        clockIn.setHours(10)
        const clockOut = new Date()
        clockOut.setHours(8)

        appointment.clockIn(clockIn)

        expect(() => appointment.clockOut(clockOut)).toThrowError('Clock in cannot be bigger than clock out')
    })
})