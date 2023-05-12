import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}