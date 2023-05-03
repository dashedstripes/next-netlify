import Layout from "./components/Layout";

const Geo: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <p>{`{{USER_LOCATION}}`}</p>
      </div>
    </Layout>
  )
}

export default Geo;