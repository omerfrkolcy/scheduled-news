import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { HACKERNEWS_API } from 'pages/enums';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const interval = req.nextUrl.searchParams.get('interval');

  if (!interval) {
    return new Response('No interval provided', { status: 400 });
  }

  const { id, fetchedAt } = (await kv.get(interval)) || {};
  const res = await fetch(`${HACKERNEWS_API}/item/${id}.json?print=pretty`).then((res) => res.json());

  return new NextResponse(JSON.stringify({ fetchedAt, ...res }), { status: 200 });
}
