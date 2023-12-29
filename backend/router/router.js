import { Router } from "express"
import { addBicycle, getBiycles, getStats, updateStatus, deleteBicycle } from "../controller/controller.js"

const router = new Router()

router.post('/create', addBicycle )
router.get('/getall', getBiycles)
router.get('/getstats', getStats)
router.patch('/updatestatus/:id', updateStatus)
router.delete('/delete/:id', deleteBicycle)

export default router