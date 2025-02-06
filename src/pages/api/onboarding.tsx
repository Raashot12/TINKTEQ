import { NextApiRequest, NextApiResponse } from 'next';

async function handlerOnboarding(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const data = req.body;

      // Replace with the actual Artible API endpoint
      const response = await fetch('https://api.artible.com/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer patgIqsaT10KgyHRW.99f28806a63947e1f2e656eaebbbbdeecc4a87283b17e967ba659e7c601ead28`, // Use a secure way to store API keys
        },
        body: JSON.stringify(data),
      });

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
