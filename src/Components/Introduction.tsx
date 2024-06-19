function Introduction() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="h-1 bg-gray-300 w-full max-w-screen-lg mx-auto my-10"></div>
      <h2 className="text-center mt-10 text-sm md:text-lg text-black font-medium tracking-widest">HELLO! MY NAME IS</h2>
      <h2 className="text-4xl md:text-6xl mt-2 text-center text-black font-bold tracking-widest">ANASTASIA ASTRID</h2>
      <div className="mt-7">
        <img className="w-52 h-40" src="CODE.jpg" alt="Profile" />
      </div>
      <h2 className="text-black text-2xl font-bold text-center mt-5">About me</h2>
      <p className="my-5 text-black text-sm md:text-base max-w-screen-md text-center">
        "I'm a learning developer based in Jakarta, Indonesia, dedicated to continuously expanding my skills and
        knowledge in web development. I am passionate about refining my capabilities and staying updated with the latest
        technologies. My goal is to bring innovative solutions that elevate your brand's online presence and effectively
        bring ideas to life."
      </p>
    </div>
  );
}

export default Introduction;
