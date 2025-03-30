import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToApp() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const deepLink = `campusconnect://events/${id}`;
    const fallbackUrl = `https://apps.apple.com/app/your-app-id`; // replace with your App Store link

    const timer = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 2000);

    window.location.href = deepLink;

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Opening CampusConnect...</h2>
      <p>
        If nothing happens, <a href={`campusconnect://events/${id}`}>click here</a>.
      </p>
      <p>
        Don’t have the app? <a href="https://apps.apple.com/app/your-app-id">Download CampusConnect</a>
      </p>
    </div>
  );
}
