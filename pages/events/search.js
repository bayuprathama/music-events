import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import qs from 'qs';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Page">
      <Link href="/events">Go back</Link>
      <h1>{`Search results for '${router.query.term}'`}</h1>
      {events.length === 0 && <h3>There is no event to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} />;
      })}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
