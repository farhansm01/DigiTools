const Stats = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] py-14 px-8 flex flex-wrap items-center justify-center gap-10 lg:gap-40">
      {/* Stat 1 */}
      <div className=" flex flex-col items-center gap-1">
        <span className="text-3xl md:text-5xl text-white font-bold">50K+</span>
        <span className="text-purple-200 font-medium mt-1">Active Users</span>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-16 bg-purple-300 opacity-50"></div>
      {/* Stat 2 */}
      <div className=" flex flex-col items-center gap-1">
        <span className="text-3xl md:text-5xl text-white font-bold">200+</span>
        <span className="text-purple-200 font-medium mt-1">Premium Tools</span>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-16 bg-purple-300 opacity-50"></div>
      {/* Stat 3 */}
      <div className=" flex flex-col items-center gap-1">
        <span className="text-3xl md:text-5xl text-white font-bold">4.9</span>
        <span className="text-purple-200 font-medium mt-1">Rating</span>
      </div>
    </section>
  );
};

export default Stats;
