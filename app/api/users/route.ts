import { prisma } from '../../../lib/pisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  console.log(users);

  return NextResponse.json(users);
}