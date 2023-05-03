import { useEffect, useState } from 'react';
import PostList, { Post } from './components/PostList';
import fetchPosts from '@/utils/fetch-posts';
import Header from './components/Header';

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <main>
      <Header/>
      <div className='container m-auto p-4 text-center'>
        <PostList posts={posts}/>
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