import { useRouter } from 'next/router';

export default function FallbackPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Couldn’t open the app</h1>
      <p>This can happen if the app isn't installed yet.</p>
      <p>Event ID: <strong>{id}</strong></p>
      <p>
        <a href={`campusconnect://event/${id}`}>Try opening the app again</a>
      </p>
    </div>
  );
}
