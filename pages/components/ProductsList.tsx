import { useEffect, useState } from 'react';

type RichText = {
    nodeType: string;
    value: string;
    content: RichText;
}

type Post = {
    title: string
    slug: string
    description: RichText[]
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();

    async function getPosts() {
      const req = await fetch('/.netlify/functions/get-posts');
      const json = await req.json();
      setPosts(json.posts);
    }
  }, []);

  const renderedPosts = posts?.map((post: Post) => (
    <div key={post.title} className='w-4/12 p-4'>
      <h2><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
    </div>
  ))

  return (
    <main>
      <div className='container m-auto p-4 text-center flex wrap'>
        {renderedPosts}
      </div>
    </main>
  )
}
