import { connectDatabase, insertDocument } from 'utilities/MongoDb';

async function handler(req, res) {
  const { email, name, text } = req.body;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connection to database failed' });
    return;
  }

  if (req.method === 'POST') {
    if (!email || !email.includes('@')) {
      res.status(422).json({ error: 'Invalid email address' });
      client.close();
      return;
    }

    const formData = {
      email,
      name,
      text,
    };

    try {
      await insertDocument('contact', client, formData);
      res.status(201).json({ message: 'Successfully sent your form!' });
    } catch (error) {
      res.status(500).json({ error: 'Inserting data failed' });
    }
  }

  client.close();
}

export default handler;
