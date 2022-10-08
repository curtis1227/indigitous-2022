import type { NextApiRequest, NextApiResponse } from 'next';
import churchSearch from '../../lib/churchSearch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { keyword } = query;

  res.status(200).json({ list_of_churches: await churchSearch(keyword as string) });
}
