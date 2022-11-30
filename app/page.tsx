import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <main className="min-h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="m-0 leading-1 text-5xl font-extrabold tracking-tight">
          Welcome to
          <a
            className="text-blue-700 hover:underline"
            href="https://nextjs.org"
          >
            Next.js 13!
          </a>
        </h1>

        <p className="m-16 leading-2 text-xl">
          Get started by editing
          <code className="text-black m-1 p-2 bg-slate-300 rounded-full">
            app/page.tsx
          </code>
        </p>

        <div className="flex items-center justify-center flex-wrap">
          <a href="https://beta.nextjs.org/docs" className="card">
            <h2 className="card-title">Documentation &rarr;</h2>
            <p className="card-description">
              Find in-depth information about Next.js 13
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="card"
          >
            <h2 className="card-title">Examples &rarr;</h2>
            <p className="card-description">
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h2 className="card-title">Deploy &rarr;</h2>
            <p className="card-description">
              Deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
