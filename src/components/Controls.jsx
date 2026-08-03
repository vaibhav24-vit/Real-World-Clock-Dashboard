function Controls({
  darkMode,
  setDarkMode,
  is24Hour,
  setIs24Hour,
  showAnalog,
  setShowAnalog,
  showDigital,
  setShowDigital,
}) {
  return (
    <div className="controls">

      <h2>⚙️ Dashboard Controls</h2>

      <div className="control-grid">

        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          🌙 Dark Mode
        </label>

        <label>
          <input
            type="checkbox"
            checked={is24Hour}
            onChange={() => setIs24Hour(!is24Hour)}
          />
          🕒 24-Hour Format
        </label>

        <label>
          <input
            type="checkbox"
            checked={showAnalog}
            onChange={() => setShowAnalog(!showAnalog)}
          />
          🕰 Show Analog Clock
        </label>

        <label>
          <input
            type="checkbox"
            checked={showDigital}
            onChange={() => setShowDigital(!showDigital)}
          />
          💻 Show Digital Clock
        </label>

      </div>

    </div>
  );
}

export default Controls;