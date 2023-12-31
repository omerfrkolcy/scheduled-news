import { Text, Page } from '@vercel/examples-ui';
import Post from '@/components/post';

const intervals = [
  {
    id: '1m',
    name: 'Every Minute',
    cron: '* * * * *',
  },
  {
    id: '1h',
    name: 'Every Hour',
    cron: '0 * * * *',
  },
  {
    id: '12h',
    name: 'Every 12 hours',
    cron: '0 */12 * * *',
  },
  {
    id: '1d',
    name: 'Every Day',
    cron: '0 0 * * *',
  },
];

export default function Main() {
  return (
    <Page className='flex justify-center min-w-full py-16 px-4'>
      <div className='flex flex-col justify-center max-w-3xl'>
        <section className='flex flex-col gap-6'>
          <Text variant='h2'>welcome.</Text>
          <Text>
            This is a Next.js app that uses HackerNews APIs to update data at different intervals. You can check the
            cached posts from below list.
          </Text>
        </section>
        <section className='mt-10 pt-10 border-t border-gray-300'>
          <div className='flex flex-col gap-12'>
            {intervals.map((interval) => (
              <div key={interval.id} className='flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                  <Text className='text-sm font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-tight pl-1 block'>
                    {interval.name}
                  </Text>
                </div>
                <Post interval={interval.id} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
