import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Process a POST request
            console.log(req.body);

            // Read the contents of the contactdata directory
            let data = await fs.promises.readdir('contactdata');
            // Write the new data to a file
            await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));

            // Send a response back to the client
            res.status(200).json(req.body);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        // Handle any other HTTP method
        res.status(200).json(["all Blogs"]);
    }
}
