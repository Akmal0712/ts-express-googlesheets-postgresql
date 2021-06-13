import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import { Employee } from '../typeorm/entities/Employee'

export default class EmployeesController {
    public add = async (req: Request, res: Response) => {
        const { login, name, positionId } = req.body

        const employeeRepository = getRepository(Employee)
        try {
            const employee = await employeeRepository.findOne({ where: { login } })

            if (employee) {
                res.status(400).json({
                    message: `Employee ${login} already exist`
                })
            }

            try {
                const newEmployee = new Employee()
                newEmployee.login = login
                newEmployee.name = name
                newEmployee.position_id = positionId
                await employeeRepository.save(newEmployee)

                res.status(200).json({
                    message: 'Employee successfully added.'
                })
            }
            catch (error) {
                res.status(400).json({
                    'Error message': error,
                    message: `Employee ${login} can't be added`
                })
            }

        }
        catch (error) {
            res.status(400).json({
                'Error message': error
            })
        }
    }

     public list = async (req: Request, res: Response) => {
         const employeeRepository = getRepository(Employee)
         try {
             const employees = await employeeRepository.find()

             res.json({
                 employees: employees
             })
         }
         catch (error) {
             res.json({
                 'Error message': error
             })
         }
    }
}