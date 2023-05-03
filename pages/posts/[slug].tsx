import { GetStaticPaths } from 'next'
import fetchPosts from '../../utils/fetch-posts';
import getPostsBySlug from '../../utils/get-post-by-slug';
import Header from '../components/Header';

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
    <main>
      <Header/>
      <div className='container m-auto w-[75ch] p-10'>
        <h1 className='font-bold text-2xl mb-4'>{data.post.title}</h1>
        <p>{JSON.stringify(data.post.description)}</p>
      </div>
    </main>
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