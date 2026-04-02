export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-semibold text-[#101727] mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Starter */}
        <div className="bg-[#f9fafc] border border-gray-200 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-1 text-[#101727]">
            Starter
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Perfect for getting started
          </p>

          <div className="mb-6">
            <span className="text-4xl font-semibold text-[#101727]">$0</span>
            <span className="text-gray-400">/Month</span>
          </div>

          <ul className="space-y-2 text-sm text-gray-600 mb-8">
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">✓</span>
              Access to 10 free tools
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">✓</span>
              Basic templates
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">✓</span>
              Community support
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">✓</span>1 project per
              month
            </li>
          </ul>

          <button className="mt-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold hover:opacity-80 transition-opacity duration-300">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative rounded-2xl p-8 flex flex-col text-white bg-linear-to-b from-[#4F39F6] to-[#9514FA] shadow-xl ">
          {/* badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fef3c6] text-[#bb4d00] text-xs px-3 py-1 rounded-full font-semibold">
            Most Popular
          </span>

          <h3 className="text-2xl font-semibold mb-1">Pro</h3>
          <p className="text-sm opacity-80 mb-4">Best for professionals</p>

          <div className="mb-6">
            <span className="text-4xl font-semibold ">$29</span>
            <span className="opacity-80">/Month</span>
          </div>

          <ul className="space-y-2 text-sm mb-8">
            <li>✓ Access to all premium tools</li>
            <li>✓ Unlimited templates</li>
            <li>✓ Priority support</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Cloud sync</li>
            <li>✓ Advanced analytics</li>
          </ul>

          <button className="mt-auto bg-white text-purple-600 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity duration-300">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-[#f9fafc] border border-gray-200 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-1 text-[#101727]">
            Enterprise
          </h3>
          <p className="text-gray-400 text-sm mb-4">For teams and businesses</p>

          <div className="mb-6">
            <span className="text-4xl font-semibold text-[#101727]">$99</span>
            <span className="text-gray-400">/Month</span>
          </div>

          <ul className="space-y-2 text-sm text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              Team collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              Custom integrations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              Dedicated support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              SLA guarantee
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              Custom branding
            </li>
          </ul>

          <button className="mt-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold hover:opacity-80 transition-opacity duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
