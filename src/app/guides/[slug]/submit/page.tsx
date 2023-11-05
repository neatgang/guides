// import { Editor } from '@/components/_Editor'
import { Button } from '@/components/ui/Button'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { useState } from 'react';
import TagSelector from '@/components/TagSelector';
import { Editor } from '@/components/Editor';
// import { Editor } from "novel";

interface pageProps {
  params: {
    slug: string
  }
}

const page = async ({ params }: pageProps) => {
  const subreddit = await db.subreddit.findFirst({
    where: {
      name: params.slug,
    },
  })

  if (!subreddit) return notFound()

  return (
    <div className='flex flex-col items-start gap-6'>
      {/* heading */}
      <div className='border-b border-gray-200 pb-5'>
        <div className='-ml-2 -mt-2 flex flex-wrap items-baseline'>
          <h3 className='ml-2 mt-2 text-base font-semibold leading-6 text-gray-900'>
            Create Post
          </h3>
          <p className='ml-2 mt-1 truncate text-sm text-gray-500'>
            in {params.slug}
          </p>
        </div>
        {/* <div className='border-b border-gray-200 pb-5'>
          <TagSelector />
        </div> */}
      </div>

      {/* form */}
      <Editor subredditId={subreddit.id} />
      {/* <Editor /> */}

      <div className='w-full flex justify-end'>
        <Button type='submit' className='w-full' form='subreddit-post-form'>
          Post
        </Button>
      </div>
    </div>
  )
}

export default page
