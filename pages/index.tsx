import { useEffect, useState } from 'react';
import ProductsList, { Post } from './components/ProductsList';
import fetchPosts from '@/utils/fetch-posts';

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getMsg();

    async function getMsg() {
      const req = await fetch('/get-geo');
      const json = await req.json();
      setMsg(json.message);
    }
  }, []);

  return (
    <main>
      <div className='container m-auto p-4 text-center'>
        <p>{msg}</p>
        <ProductsList posts={posts}/>
      </div>
    </main>
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