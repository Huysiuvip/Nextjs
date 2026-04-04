import { delay } from '@/lib'
import { Suspense } from 'react';

const StreamingRoutes = async () => {
    // await delay(3000);
  return (
    <div>
      <h1 className='text-red-500'>StreamingRoutes</h1>
      <h2>Streaming Content</h2>
      <Suspense fallback={<SkeletonChild/>}>
        <SlowChild/>
      </Suspense>
      </div>
  )
}

async function SlowChild(){
  await delay(3000);
  return <h3>Slow Child</h3>
}

function SkeletonChild(){
  return <div className='h-4 w-48 rounded bg-gray-200 animate-pulse'></div>
}

export default StreamingRoutes