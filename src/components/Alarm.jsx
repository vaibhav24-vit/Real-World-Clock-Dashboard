import { useState, useEffect } from "react";

function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [alarms, setAlarms] = useState([]);

  const addAlarm = () => {
    if (alarmTime.trim() === "") return;

    if (!alarms.includes(alarmTime)) {
      setAlarms([...alarms, alarmTime]);
      setAlarmTime("");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const current =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

      alarms.forEach((alarm) => {
        if (alarm === current) {
          alert("⏰ Alarm! Time is " + alarm);
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [alarms]);

  const deleteAlarm = (index) => {
    setAlarms(alarms.filter((_, i) => i !== index));
  };

  return (
    <div className="alarm-card">

      <h2>⏰ Alarm Manager</h2>

      <div className="alarm-input">

        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />

        <button onClick={addAlarm}>
          Add Alarm
        </button>

      </div>

      <ul>

        {alarms.length === 0 ? (
          <p>No Alarm Added</p>
        ) : (
          alarms.map((alarm, index) => (
            <li key={index}>

              {alarm}

              <button
                onClick={() => deleteAlarm(index)}
              >
                Delete
              </button>

            </li>
          ))
        )}

      </ul>

    </div>
  );
}

export default Alarm;