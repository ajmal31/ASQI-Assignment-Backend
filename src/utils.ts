import { Response } from "express";
/**
 * 
 * @param res Express response object
 * @param status Status of response
 * @param data Response data
 * @param error Error message
 * @returns Response object
 */
export const sendResponse = (
  res: Response,
  status: number,
  data: any,
  error: string | null = null
) => {
  return res.status(status).json({
    success: status < 400,
    data: error ? null : data,
    error: error ? error : null,
  });
};
