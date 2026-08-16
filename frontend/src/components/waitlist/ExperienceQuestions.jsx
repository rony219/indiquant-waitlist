import { useState } from "react";

function ExperienceQuestions({ email, onComplete }) {
  const [experienceTools, setExperienceTools] = useState([]);
  const [modelApproaches, setModelApproaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const experienceOptions = [
    "Python",
    "Pandas / NumPy",
    "Machine Learning",
    "Backtesting",
    "Technical indicators / factor models",
    "Options strategies",
    "Statistical arbitrage",
    "None of the above",
  ];

  const modelOptions = [
    "Reinforcement Learning (RL)",
    "Machine Learning",
    "Deep Learning / Neural Networks",
    "Time-Series Models",
    "Factor Models",
    "None of the above",
  ];

  const toggleOption = (option, selected, setSelected) => {
    if (option === "None of the above") {
      setSelected(
        selected.includes(option) ? [] : [option]
      );
      return;
    }

    setSelected((prev) => {
      const withoutNone = prev.filter(
        (item) => item !== "None of the above"
      );

      if (withoutNone.includes(option)) {
        return withoutNone.filter(
          (item) => item !== option
        );
      }

      return [...withoutNone, option];
    });
  };

  const handleSubmit = async () => {
    setError("");

    if (!experienceTools.length) {
      setError("Please answer the first question.");
      return;
    }

    if (!modelApproaches.length) {
      setError("Please answer the second question.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://indiquant-waitlist-backend.onrender.com/api/waitlist/experience",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            experience_tools: experienceTools,
            model_approaches: modelApproaches,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to save your answers."
        );
      }

      console.log("Experience saved:", data);

      onComplete();
    } catch (err) {
      console.error(err);
      setError(
        err.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4">

      <div className="mb-12 text-center">
        <p className="text-sm tracking-[0.3em] text-[#E8C27A]">
          TELL US ABOUT YOU
        </p>

        <h2
          className="mt-5 text-3xl text-white md:text-5xl"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Your Experience
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          Help us understand your background so we can
          better understand your interests.
        </p>
      </div>

      {/* Question 1 */}

      <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">

        <h3 className="text-xl font-semibold text-white">
          Which of these have you personally worked with?
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Select all that apply.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">

          {experienceOptions.map((option) => {
            const selected =
              experienceTools.includes(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  toggleOption(
                    option,
                    experienceTools,
                    setExperienceTools
                  )
                }
                className={`
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  ${
                    selected
                      ? "border-[#E8C27A]/60 bg-[#E8C27A]/10 text-[#E8C27A]"
                      : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                  }
                `}
              >
                {option}
              </button>
            );
          })}

        </div>
      </div>

      {/* Question 2 */}

      <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">

        <h3 className="text-xl font-semibold text-white">
          Which of these models/approaches have you worked with?
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Select all that apply.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">

          {modelOptions.map((option) => {
            const selected =
              modelApproaches.includes(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  toggleOption(
                    option,
                    modelApproaches,
                    setModelApproaches
                  )
                }
                className={`
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  ${
                    selected
                      ? "border-[#E8C27A]/60 bg-[#E8C27A]/10 text-[#E8C27A]"
                      : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                  }
                `}
              >
                {option}
              </button>
            );
          })}

        </div>
      </div>

      {error && (
        <p className="mb-5 text-center text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="
          w-full
          rounded-full
          bg-[#E8C27A]
          px-8
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-[0_0_30px_rgba(232,194,122,.25)]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading
          ? "Saving..."
          : "Continue →"}
      </button>

    </div>
  );
}

export default ExperienceQuestions;