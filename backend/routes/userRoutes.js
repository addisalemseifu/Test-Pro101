import express from 'express'
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/',getUser)
router.get('/create',createUser)
router.get('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router