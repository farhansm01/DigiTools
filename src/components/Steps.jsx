const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: "user.png",
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: "package.png",
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: "rocket.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#f5f6fa] py-20 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#101727] mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-400 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map(function (step) {
          return (
            <div
              key={step.id}
              className="w-95  bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-6 relative shadow-sm"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] flex items-center justify-center">
                <span className="text-white text-xs font-bold">{step.id}</span>
              </div>

              <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mt-6">
                <img
                  src={`/${step.icon}`}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#101727]">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-65 mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
