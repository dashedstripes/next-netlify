import React from 'react';

interface Props {
  data: {
    test: string
  }
}

const Private: React.FC<Props> = ({ data }) => {
  return (
    <div>{data.test}</div>
  )
}

export async function getServerSideProps() {
  return { props: { data: { test: 'This is from the server' } } };
}

export default Private;