import { useState, useEffect } from "react";
import "./styles/App.css";

import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import WorldClock from "./components/WorldClock";
import Controls from "./components/Controls";
import Alarm from "./components/Alarm";

import defaultZones from "./data/timezones";

function App() {
  const [time, setTime] = useState(new Date());

  const [darkMode, setDarkMode] = useState(false);

  const [is24Hour, setIs24Hour] = useState(false);

  const [showAnalog, setShowAnalog] = useState(true);

  const [showDigital, setShowDigital] = useState(true);

  const [zones, setZones] = useState(defaultZones);

  const [city, setCity] = useState("");

  const [zone, setZone] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addZone = () => {
    if (city.trim() === "" || zone.trim() === "") return;

    setZones([
      ...zones,
      {
        city,
        zone,
      },
    ]);

    setCity("");
    setZone("");
  };

  const deleteZone = (index) => {
    setZones(zones.filter((_, i) => i !== index));
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1 className="title">
        🌍 React World Clock Dashboard
      </h1>

      <Controls
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        is24Hour={is24Hour}
        setIs24Hour={setIs24Hour}
        showAnalog={showAnalog}
        setShowAnalog={setShowAnalog}
        showDigital={showDigital}
        setShowDigital={setShowDigital}
      />

      <div className="clock-container">
        {showAnalog && (
          <div className="analog-section">
            <AnalogClock time={time} />
          </div>
        )}

        {showDigital && (
          <div className="digital-section">
            <DigitalClock
              time={time}
              is24Hour={is24Hour}
            />
          </div>
        )}
      </div>

      <div className="add-zone">

        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Time Zone (Asia/Kolkata)"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />

        <button onClick={addZone}>
          Add Clock
        </button>

      </div>

      <div className="world-clocks">
        {zones.map((item, index) => (
          <div key={index}>

            <WorldClock
              city={item.city}
              zone={item.zone}
              is24Hour={is24Hour}
            />

            <button
              className="delete-btn"
              onClick={() => deleteZone(index)}
            >
              Delete
            </button>

          </div>
        ))}
      </div>

      <Alarm />
    </div>
  );
}

export default App;