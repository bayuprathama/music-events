import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>There is no event to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} />;
      })}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">Show all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
