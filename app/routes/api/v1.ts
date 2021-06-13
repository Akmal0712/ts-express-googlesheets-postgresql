import { Router } from 'express'
import EmployeesController from '../../controllers/EmployeesController'
import GoogleSheetsController from '../../controllers/GoogleSheetsController'
const route = Router()

const employeesController = new EmployeesController()
const googleSheetsController = new GoogleSheetsController()

route.get('/employees/list', employeesController.list)
route.post('/employees/add', employeesController.add)

route.get('/sheets/data', googleSheetsController.show)
route.post('/sheets/data/add', googleSheetsController.add)

export default route