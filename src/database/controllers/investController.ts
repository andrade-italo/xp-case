import { StatusCodes } from 'http-status-codes';

import { Request, Response } from 'express';
import InvestService from '../services/investService';

const InvestController = async (req: Request, res: Response) => {
  const executeBuyService = await InvestService(req.body);
  res.status(StatusCodes.CREATED).json(executeBuyService);
};

export default InvestController;
