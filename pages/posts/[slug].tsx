import { GetStaticPaths } from 'next'
import fetchPosts from '../../utils/fetch-posts';

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
  const res = await fetch(`${process.env.DEPLOY_URL}/.netlify/functions/get-post-by-slug`)
  const data = await res.json()

  return {
    props: {
      data,
    },
    // revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async (test) => {
  const posts = await fetchPosts();

  return {
    paths: posts.map((post: string) => ({ params: { slug: post } })),
    fallback: false
  };
}

export default Post