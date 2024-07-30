// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0; /* Optional: Add a background color */
        }
      `}</style>
      <div className="container">
        <Image src="/comming_soon.jpg" alt="Coming Soon" width={500} height={500} />
      </div>
    </div>
  );
}
