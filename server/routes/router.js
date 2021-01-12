import express from 'express'
const router = express.Router()

// Controllers
import { getItem, newItem } from '../controllers/routeController.js'

router.get('/', (req, res) => res.json({ title: 'Welcome to MERN!!' }))
router.get('/items', getItem)
router.post('/items/newitem', newItem)

export default router
