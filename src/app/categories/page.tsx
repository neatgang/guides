import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { db } from "@/lib/db"
import Link from 'next/link'

const CategoriesPage = async () => {
  const subreddits = await db.subreddit.findMany()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {subreddits.map((subreddit) => (
        <Link href={`/guides/${subreddit.name}`} key={subreddit.id}>
            <Card>
              <CardHeader>
                <CardTitle>{subreddit.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Insert content here */}
              </CardContent>
              <CardFooter>
                {/* Insert footer here */}
              </CardFooter>
            </Card>
        </Link> 
      ))}
    </div>
  )
}

export default CategoriesPage