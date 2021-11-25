import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { API_URL } from '@/config/index';

export default function Home({ events }) {
  console.log(API_URL);
  console.log(events);
  return (
    <Layout>
      <h1>Home page</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
