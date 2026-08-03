import "../styles/Clock.css";

function AnalogClock({ time }) {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="clock">

      <div
        className="hand hour"
        style={{
          transform: `translateX(-50%) rotate(${hourDeg}deg)`
        }}
      ></div>

      <div
        className="hand minute"
        style={{
          transform: `translateX(-50%) rotate(${minuteDeg}deg)`
        }}
      ></div>

      <div
        className="hand second"
        style={{
          transform: `translateX(-50%) rotate(${secondDeg}deg)`
        }}
      ></div>

      <div className="center"></div>

       {[...Array(12)].map((_, index) => {
  const number = index === 0 ? 12 : index;
  const angle = ((number - 3) * 30 * Math.PI) / 180;
  const radius = 110;

  const x = 150 + radius * Math.cos(angle);
  const y = 150 + radius * Math.sin(angle);

  return (
    <div
      key={number}
      className="clock-number"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {number}
    </div>
  );
})}

    </div>
  );
}

export default AnalogClock;