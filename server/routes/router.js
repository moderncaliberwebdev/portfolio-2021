import express from 'express'
const router = express.Router()

// Controllers
import { mail } from '../controllers/routeController.js'

router.get('/email', mail)

export default router
