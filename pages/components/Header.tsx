import { useEffect, useState } from "react";

const Header = () => {

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
    <header className="bg-slate-200">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <a href="/">ausnext</a>
        <p className='p-2 text-sm bg-slate-500 text-slate-100 rounded'>{msg}</p>
      </div>
    </header>
  )
}

export default Header;