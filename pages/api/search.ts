import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { keyword } = query;

  res.status(200).json({ keyword });
}
