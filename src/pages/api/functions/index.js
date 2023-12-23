export const config = {
  runtime: 'nodejs',
};

import { exec } from 'child_process';

export default function handler(request, response) {

  const command =
    'curl -s -w "\n\n%{json}" "https://httpbin.org/json"'

exec(command, { encoding: 'utf-8' }, (error, stdout, stderr) => {
    if (error !== null) {
        console.log('Error', error, stderr)

        return
    }

    const [responseMetadata, response] = stdout.split('\n\n')

    console.log('Metadata', JSON.parse(responseMetadata))
    console.log('Response', JSON.parse(response))
})
  
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}