type RichText = {
    nodeType: string;
    value: string;
    content: RichText;
}

export type Post = {
    title: string
    slug: string
    description: RichText[]
}

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  const renderedPosts = posts?.map((post: Post) => (
    <div key={post.title} className='w-6/12 p-4'>
      <h2 className="font-bold text-2xl"><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
    </div>
  ))

  return (
    <main>
      <div className='container m-auto p-4 text-center flex flex-wrap'>
        {renderedPosts}
      </div>
    </main>
  )
}

export default PostsList;