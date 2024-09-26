import Image from "next/image";

export default function Home() {
  return (
    <header
      className=" mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2"
      id="home"
    >
      <div className="left-header flex items-center relative">
        <div
          className="h-shape w-2/3 h-full bg-secondary absolute left-0 top-0 -z-10 transition-transform duration-400"
          style={{ clipPath: "polygon(0 0, 46% 0, 79% 100%, 0% 100%)" }}
        ></div>
        <div className="image ml-16 bg-black rounded-lg h-5/6 w-2/3 transition-all duration-400">
        <Image src="/img/mascot.jpeg" alt="" width={500} height={500}/>
        </div>
      </div>
      <div className="right-header flex flex-col justify-center pr-72">
        <h1 className="text-3xl font-bold">
          Hi, I&apos;m <span className="text-secondary">Abudu Samadu</span>
          <br /> A Web Developer.
        </h1>
        <p className="mt-6 text-gray-600 leading-8">
          I&apos;m a Web Developer, I love to create beautiful and functional
          websites.
          <br />
          The public is more familiar with bad design than good design. It is,
          in effect, conditioned to prefer bad design, because that is what it
          lives with. The new becomes threatening, the old reassuring.
          <br />
          Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <span className="mr-2">Download CV</span>
        
          </a>
        </div>
      </div>
    </header>
  );
}
