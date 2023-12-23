import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default async function handler(req, res) {
  const { endpoint, body } = req.body;

  try {
    const curlCommand = `curl --location '${endpoint}' --header 'Content-Type: application/json' --data '${JSON.stringify(body)}'`;

    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('Error al ejecutar curl:', error);
        res.status(500).json({ status: 500, error: 'Error al ejecutar curl' });
        return;
      }

      console.log('Resultado de curl:', stdout);
      res.status(200).json({ status: 200, result: stdout });
    });
  } catch (error) {
    console.error('Error al ejecutar la acción:', error);
    res.status(500).json({ status: 500, error: 'Error al ejecutar la acción' });
  }
}
