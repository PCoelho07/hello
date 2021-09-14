import { Employee } from "@/domain/entities/employee/employee"

describe('Employee entity', () => {

    test('create new instance with success', () => {
        const employee: Employee = Employee.create('test', 'email@test.com')
        expect({
            name: employee.name,
            email: employee.email
        }).toEqual({
            name: 'test',
            email: 'email@test.com'
        })
    })

    test('throw error when attempt to create new instance with invalid name', () => {
        expect(() => Employee.create('', 'email@test.com')).toThrowError('Name is invalid!')
    })

    test('throw error when email is invalid', () => {
        expect(() => {
            Employee.create('', 'email@.com')
        }).toThrowError('Email is invalid!')

        expect(() => {
            Employee.create('', 'email@com')
        }).toThrowError('Email is invalid!')

        expect(() => {
            Employee.create('', 'email@')
        }).toThrowError('Email is invalid!')

        expect(() => {
            Employee.create('', '@test.com')
        }).toThrowError('Email is invalid!')
    })
})