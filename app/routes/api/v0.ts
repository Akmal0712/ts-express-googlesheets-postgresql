import { Router } from 'express'
import EmployeesController from '../../controllers/EmployeesController'
import GoogleSheetsController from '../../controllers/GoogleSheetsController'
const v0 = Router()

const employeesController = new EmployeesController()
const googleSheetsController = new GoogleSheetsController()

v0.get('/employees/list', employeesController.list)
v0.post('/employees/add', employeesController.add)

v0.get('/sheets/data', googleSheetsController.show)
v0.post('/sheets/data/add', googleSheetsController.add)

export default v0