// pages/api/movies/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const moviesCollection = database.collection('movies');

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const movies = await moviesCollection
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalMovies = await moviesCollection.countDocuments();

    res.status(200).json({ movies, totalMovies });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  } finally {
    await client.close();
  }
}
