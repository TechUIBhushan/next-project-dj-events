import { useRouter } from "next/router";
import Layout from "../../components/Layout";
export default function EventPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="Events Slug">
      <h1>My Event</h1>
      <p>{router.query.slug}</p>
      {/* <button onClick={() => router.push("/")}>Click</button> */}
    </Layout>
  );
}
