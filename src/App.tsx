import React from 'react';
import './App.css';

type TemperatureType = 'F' | 'K' | 'Both' | 'none';

const App = () => {
  const [defaultTemperature, setDefaultTemperature] = React.useState('');
  const [temperatureType, setTemperatureType] =
    React.useState<TemperatureType>('none');

  const FahrenheitResult = React.useMemo(
    () => (
      <div>
        <p>
          <b>Fahrenheit result</b> = {(+defaultTemperature * 9) / 5 + 32}°F
        </p>
      </div>
    ),
    [defaultTemperature]
  );

  const KelvinResult = React.useMemo(
    () => (
      <div>
        <p>
          <b>Kelvin result</b> = {+defaultTemperature + 273.15}°K
        </p>
      </div>
    ),
    [defaultTemperature]
  );

  return (
    <div className="App">
      <div>
        <label htmlFor="defaultTemperature">Write an temperature</label>
        <input
          type="number"
          name="defaultTemperature"
          id="defaultTemperature"
          onChange={({ target }) => setDefaultTemperature(target.value)}
          value={defaultTemperature}
        />
      </div>
      <div>
        <label htmlFor="temperatureType">Parse Temperature</label>
        <select
          name="temperatureType"
          id="temperatureType"
          value={temperatureType}
          onChange={({ target }) =>
            setTemperatureType(target.value as TemperatureType)
          }
        >
          <option value="none">None</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
          <option value="Both">Both</option>
        </select>
      </div>
      <br />
      <div>
        {(temperatureType === 'Both' || temperatureType === 'F') &&
          FahrenheitResult}
        {(temperatureType === 'Both' || temperatureType === 'F') &&
          KelvinResult}
      </div>
    </div>
  );
};

export default App;
