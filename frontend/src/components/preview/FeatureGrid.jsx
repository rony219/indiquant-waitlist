import {
  ShieldCheck,
  Trophy,
  BrainCircuit,
  Code2,
  Medal,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Identity Verification",
  },
  {
    icon: Code2,
    title: "Coding Challenges",
  },
  {
    icon: BrainCircuit,
    title: "AI Assessment",
  },
  {
    icon: Trophy,
    title: "Recruitment Tournament",
  },
  {
    icon: Medal,
    title: "Live Leaderboard",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interview Tracking",
  },
];

function FeatureGrid() {
  return (
    <section className="px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
            FEATURES
          </p>

          <h2
            className="mt-5 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Everything You Need
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition
              duration-500

              hover:border-[#E8C27A]/40
              hover:-translate-y-2
              "
            >
              <feature.icon
                size={34}
                color="#E8C27A"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Experience a smarter, faster,
                and transparent recruitment process.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeatureGrid;