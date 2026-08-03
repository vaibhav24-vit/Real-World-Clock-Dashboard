function DigitalClock({ time, is24Hour }) {
  const currentTime = time.toLocaleTimeString([], {
    hour12: !is24Hour,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = time.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const day = time.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  return (
    <div className="digital-clock">

      <h2>🖥 Digital Clock</h2>

      <h1>{currentTime}</h1>

      <h3>{day}</h3>

      <p>{date}</p>

    </div>
  );
}

export default DigitalClock;