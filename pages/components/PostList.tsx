import Link from "next/link";

type RichText = {
    nodeType: string;
    value: string;
    content: RichText;
}

export type Post = {
    title: string
    slug: string
    description: RichText[]
    image: { url: string }
}

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  const renderedPosts = posts?.map((post: Post) => (
    <Link key={post.title} className='w-full' href={`/posts/${post.slug}`}>
      <img src={post.image.url} alt={post.title} width={1000} height={600} className="rounded-xl"/>
      <h2 className="font-bold text-2xl">{post.title}</h2>
    </Link>
  ))

  return (
    <div className='container m-auto grid grid-cols-3 gap-8 py-8'>
      {renderedPosts}
    </div>
  )
}

export default PostsList;