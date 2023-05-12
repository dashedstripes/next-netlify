import PostList, { Post } from './components/PostList';
import Layout from './components/Layout';
import { fetchPosts } from '@/services/contentful';

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
    // revalidate: 10
  }
}

export default Home;