function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[80px] border-r-[1px] mt-[0px]"></div>
      <div className="flex flex-col items-center">
        <div className="w-[1px] h-[150px] bg-blue-200 -mb-2"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-blue-200 mt-2"></div>
      </div>
      <h2 className="text-[15px] md:text-[20px] mt-5 text-black font-medium tracking-widest">HELLO! MY NAME IS</h2>
      <h2 className="text-[30px] md:text-[70px] mt-2 text-black font-bold tracking-widest">ANASTASIA ASTRID</h2>
      <img className="bg-slate-300 p-4 w-[270px] h-[280px] rounded-full mt-7" src="Profileastrid.jpeg" />
    </div>
  );
}

export default Introduction;
