import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout;