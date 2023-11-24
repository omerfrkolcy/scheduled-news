import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { HACKERNEWS_API } from '../../enums';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  const cron = req.nextUrl.pathname.split('/')[3];

  if (!cron) {
    return new Response('No cron provided', { status: 400 });
  }

  const response = await update(cron);

  return new NextResponse(JSON.stringify(response), { status: 200 });
}

async function update(interval) {
  const newStories = await fetch(`${HACKERNEWS_API}/newstories.json?print=pretty`).then((res) => res.json());

  return await kv.set(interval, { fetchedAt: Date.now(), id: newStories[0] });
}
