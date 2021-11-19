import { useEffect, useState } from "react";
import "./App.scss";
import { Device } from "./components/device";
import { Header } from "./components/header";
import { DeviceService } from "./services/DeviceService";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [deviceService, _] = useState(new DeviceService());
  const [devices, setDevices] = useState(deviceService.getDevices());

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(deviceService.getDevices());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="app">
      <Header></Header>

      {devices.map((device) => (
        <Device key={device.id} name={device.name} status={device.status} />
      ))}
    </div>
  );
}

export default App;
