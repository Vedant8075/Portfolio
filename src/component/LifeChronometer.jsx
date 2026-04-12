import React, { useEffect, useState } from "react";

// ✅ Move outside (prevents recreation issues)
const birthDate = new Date("2005-06-12T18:30:00Z");

// ✅ Box component defined first (safe)
const Box = ({ value, label }) => {
  return (
    <div className="bg-primary cursor-pointer py-5 flex flex-col items-center justify-center">
      <p className="text-[22px] font-semibold text-white leading-none">
        {value}
      </p>
      <p className="text-[9px] cursor-pointer tracking-[0.35em] text-secondary mt-2">
        {label}
      </p>
    </div>
  );
};

const LifeChronometer= () => {
  // ✅ Safe function
  const getTimeDiff = () => {
    const now = new Date();

    // safety check
    if (isNaN(birthDate.getTime())) {
      return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const diff = now.getTime() - birthDate.getTime();
    const totalSeconds = Math.floor(diff / 1000);

    return {
      years: Math.floor(totalSeconds / (365 * 24 * 60 * 60)),
      months: Math.floor(
        (totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60),
      ),
      days: Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)),
      hours: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)),
      minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
      seconds: totalSeconds % 60,
    };
  };

  const [time, setTime] = useState(getTimeDiff());

  // ✅ Proper interval setup + cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDiff());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = (time.seconds / 60) * 100;

  return (
    <section className="cursor-target  flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-[420px] border border-primary  px-7 py-8">
        {/* SYSTEM RUNTIME */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
            System Runtime
          </p>
        </div>

        {/* TITLE */}
        <h1 className="text-[22px] font-semibold tracking-[0.02em] mb-9 text-primary">
          LIFE CHRONOMETER
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-3 text-primary gap-[14px]  mb-9">
          <Box value={time.years} label="YEARS" />
          <Box value={time.months} label="MONTHS" />
          <Box value={time.days} label="DAYS" />
          <Box value={time.hours} label="HOURS" />
          <Box value={time.minutes} label="MINUTES" />
          <Box value={time.seconds} label="SECONDS" />
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-[2px]  relative overflow-hidden">
          <div
            className="h-full bg-white"
            style={{
              width: `${progress}%`,
              transition: "width 1s linear",
            }}
          />
        </div>

        {/* ORIGIN */}
        <p className="mt-4 text-[10px] tracking-[0.3em] text-secondary-foreground">
          ORIGIN: {birthDate.toISOString()}
        </p>
      </div>
    </section>
  );
};

export default LifeChronometer;
