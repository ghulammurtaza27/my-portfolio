import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-4">Hi, I am Ghulam Murtaza</h1>
        <p className="text-lg mb-8">I’m a software developer focused on building scalable web applications.</p>
        <a href="#projects" className="px-8 py-3 bg-blue-600 rounded-full">View Projects</a>
      </div>
    </div>
  );
}
