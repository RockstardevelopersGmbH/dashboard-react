import * as faker from "faker";
const MEM_VALUES = new Array(10)
  .fill("")
  .map((_, i) => (1 + i) * 1024 * 512 /* 512 MiB */);
const DISK_VALUES = new Array(10)
  .fill("")
  .map((_, i) => (1 + i) * 1024 * 1024 * 5 /* 5 GiB */);
const LOAD_VALUES = new Array(10)
  .fill("")
  .map((_, i) => (1 + i) * 1.0 /* Cores */);

export class CPUStatus {
  update() {
    this.val = (Math.random() * this.max).toPrecision(2);
  }

  static generate() {
    const min = 0.0;
    const max = faker.random.arrayElement(LOAD_VALUES);
    const val = (Math.random() * max).toPrecision(2);

    const status = new CPUStatus();
    status.attribute = { key: "cpu", unit: "load" };
    status.min = min;
    status.max = max;
    status.val = val;
    return status;
  }
}

export class MemoryStatus {
  update() {
    this.val = faker.datatype.number({ min: this.min, max: this.max / 2 });
  }

  static generate() {
    const min = 0;
    const max = faker.random.arrayElement(MEM_VALUES);
    const val = faker.datatype.number({ min, max: max / 2 });

    const status = new MemoryStatus();
    status.attribute = { key: "mem_free", unit: "KiB" };
    status.min = min;
    status.max = max;
    status.val = val;
    return status;
  }
}

export class DiskStatus {
  update() {
    this.val = faker.datatype.number({ min: this.min, max: this.max / 2 });
  }

  static generate(deviceId) {
    const min = 0;
    const max = faker.random.arrayElement(DISK_VALUES);
    const val = faker.datatype.number({ min, max: max / 2 });

    const status = new DiskStatus();
    status.attribute = { key: "disk_avail", unit: "KiB", deviceId };
    status.min = min;
    status.max = max;
    status.val = val;
    return status;
  }
}
