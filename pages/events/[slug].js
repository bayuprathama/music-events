import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';

export default function EventPage({ evt }) {
  const router = useRouter();
  console.log(router.query);
  return <Layout>{/* <h3>{evt.name}</h3> */}</Layout>;
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/events/${router.query.slug}`);
//   const evt = await res.json();

//   return {
//     props: { evt },
//   };
// }
