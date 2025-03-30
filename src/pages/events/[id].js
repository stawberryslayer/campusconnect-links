import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToApp() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const deepLink = `campusconnect://events/${id}`;
    const fallbackUrl = `/fallback?id=${id}`;
    //const fallbackUrl = `https://apps.apple.com/app/your-app-id`; // replace with your App Store link

    const timer = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 2000);

    window.location.href = deepLink;

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
      <h1>Opening CampusConnect...</h1>
      <p>{"This can happen if the app isn't installed yet."}.</p>
    </div>
  );
}
