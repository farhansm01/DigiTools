export default function Transform() {
  return (
    <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-8 flex flex-col items-center text-center gap-6">
      {/* Heading */}
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold text-white">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-[#4F39F6] text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
          Explore Products
        </button>
        <button className="bg-transparent text-white text-sm font-semibold px-6 py-3 rounded-full border border-white hover:bg-white hover:text-[#4F39F6] transition-all duration-200 cursor-pointer">
          View Pricing
        </button>
      </div>

      {/* Fine print */}
      <p className="text-purple-200 text-xs">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  );
}
