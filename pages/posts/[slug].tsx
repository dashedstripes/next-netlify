import { GetStaticPaths, GetStaticProps } from 'next'
import fetchPosts from '../../utils/fetch-posts';
import getPostsBySlug from '../../utils/get-post-by-slug';
import Layout from '../components/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


type Post = {
  title: string;
  slug: string;
  description: any;
}

interface Props {
  data: {
    post: Post
  }
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div className='container m-auto max-w-[75ch] p-10'>
      <h1 className='font-bold text-4xl mb-4'>{data.post.title}</h1>
      <div className='prose lg:prose-xl"'>
        {documentToReactComponents(data.post.description.json)}
      </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPostsBySlug(context?.params?.slug);

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