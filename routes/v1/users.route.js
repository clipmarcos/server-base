import { Router } from 'express'
import {
  deleteUser,
  editUser,
  getUsers,
  saveUser,
} from '../../controllers/users.controller.js'

const router = new Router()

router.get('/', getUsers)

router.put('/:id', editUser)

router.post('/', saveUser)

router.delete('/', deleteUser)

export default router
