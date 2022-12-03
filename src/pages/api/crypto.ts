// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CryptoData } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoData>
) {
  if (req.method === 'GET') {
    const result = await axios.get<CryptoData>(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=fe979189-cae7-490e-8cbd-66158a83141d',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'application/json',
        },
      }
    );
    res.status(200).json(result.data);
  }
}