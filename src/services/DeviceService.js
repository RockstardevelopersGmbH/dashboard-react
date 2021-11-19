import { Device } from "./data/Device";

const UPDATE_INTERVAL = 2000;
/**
 * Device service stub that returns random device data.
 *
 * Data is updated every UPDATE_INTERVAL milliseconds.
 */
export class DeviceService {
  constructor() {
    this.devices = new Array(10).fill("x").map(Device.generate);

    setInterval(() => {
      this.devices.forEach((device) =>
        device.status.forEach((status) => status.update())
      );
    }, UPDATE_INTERVAL);
  }

  getDevices() {
    // Little hack to help change detection.
    return [...this.devices];
  }
}
