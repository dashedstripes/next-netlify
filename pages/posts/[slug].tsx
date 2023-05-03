import { GetStaticPaths } from 'next'
import fetchPosts from '../../utils/fetch-posts';
import getPostsBySlug from '../../utils/get-post-by-slug';

type Post = {
  title: string;
  slug: string;
  description: string;
}

interface Props {
  data: {
    post: Post
  }
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <div className='container m-auto p-4'>
      <h1 className='font-bold text-xl mb-4'>{data.post.title}</h1>
      <p>{JSON.stringify(data.post.description)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPostsBySlug();

  return {
    props: {
      data: posts,
    },
    // revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async (test) => {
  const posts = await fetchPosts();

  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false
  };
}

export default Post