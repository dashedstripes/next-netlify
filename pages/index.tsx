import PostList, { Post } from './components/PostList';
import Layout from './components/Layout';
import { fetchPosts } from '@/services/contentful';
import { fetchProducts } from '@/services/shopify';
import ProductList from './components/ProductList';

interface Props {
  posts: Post[];
  products: any[]
}

const Home: React.FC<Props> = ({ posts, products }) => {
  return (
    <Layout>
      <div className='py-20 px-4'>
        Hero, product
      </div>
      <ProductList products={products || []}/>
      <PostList posts={posts || []} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  const products = await fetchProducts();

  return {
    props: {
      posts,
      products
    }
  }
}

export default Home;