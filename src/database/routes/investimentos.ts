import express from 'express';
import investController from '../controllers/investController';

const router = express.Router();

// const investController = new InvestController();

router.post('/comprar', investController);

export default router;
