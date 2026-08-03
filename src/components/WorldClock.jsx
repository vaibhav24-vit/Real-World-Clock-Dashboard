function WorldClock({ city, zone, is24Hour }) {

  let currentTime = "Invalid Time Zone";

  try {
    currentTime = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    }).format(new Date());
  } catch (error) {
    currentTime = "Invalid Time Zone";
  }

  return (
    <div className="world-card">

      <h2>{city}</h2>

      <h1>{currentTime}</h1>

      <p>{zone}</p>

    </div>
  );
}

export default WorldClock;