const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <a href="/">ausnext</a>
        <p className='p-2 text-sm bg-slate-500 text-slate-100 rounded'>{`{{USER_LOCATION}}`}</p>
      </div>
    </header>
  )
}

export default Header;