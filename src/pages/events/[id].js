import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToApp() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const expoLink = `exp://exp.host/@ywang2776/campus-connect-mobile/--/events/${id}`;
    const fallback = `/fallback?id=${id}`;

    window.location.href = expoLink;

    const timeout = setTimeout(() => {
      window.location.href = fallback;
    }, 3000);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div>
      <h1>Opening CampusConnect...</h1>
      <p>{"This can happen if the app isn't installed yet."}.</p>
    </div>
  );
}
