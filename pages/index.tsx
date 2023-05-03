import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <ProductsList/>
      </div>
    </main>
  )
}
