import { useEffect, useState } from 'react';
import PostList, { Post } from './components/PostList';
import fetchPosts from '@/utils/fetch-posts';
import Header from './components/Header';
import Layout from './components/Layout';

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