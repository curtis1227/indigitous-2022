import type { NextApiRequest, NextApiResponse } from 'next';
import churchSearch from '../../lib/churchSearch';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { keyword } = query;

  res.status(200).json({ list_of_churches: churchSearch(keyword as string) });
}
