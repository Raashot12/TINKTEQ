import { NextApiRequest, NextApiResponse } from 'next';

async function handlerOnboarding(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const data = req.body;

      // Replace with the actual Artible API endpoint
      const response = await fetch(
        'https://api.airtable.com/v0/appIeKL9UC6Aa47lZ/Table%201',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer patgIqsaT10KgyHRW.a520a84cb7ee626023c89c7c82b7ad0e80d5ad0e2ee23a3064cb8f23ea791326`, // Use a secure way to store API keys
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to submit data: ${response.statusText}`);
      }

      const result = await response.json();
      res
        .status(201)
        .json({ message: 'User details submitted successfully', result });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
}

export default handlerOnboarding;
