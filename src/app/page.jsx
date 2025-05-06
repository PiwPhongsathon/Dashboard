// /app/page.jsx
import { redirect } from 'next/navigation';

export default function Home() {
  const isLoggedIn = false; // เปลี่ยนเป็นตรวจจาก session จริงในอนาคต

  if (!isLoggedIn) {
    redirect('/login');
  } else {
    redirect('/dashboard');
  }
}
