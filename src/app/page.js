// app/page.js
'use client';
import Home from '../component/home/Home';
import Loader from '../component/Loader/Loader';

export default function HomePage() {
  return (
    <main>
      <Loader />
     <Home />
    </main>
  );
}
