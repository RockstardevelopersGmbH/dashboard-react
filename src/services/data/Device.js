import * as faker from 'faker';
import {  CPUStatus, DiskStatus, MemoryStatus } from './Status';

/**
 * A simple device with a few status values.
 */
export class Device {
  static generate() {
    const device = new Device();

    device.id = faker.datatype.uuid();
    device.name = faker.company.bsAdjective().toLowerCase() + '.' + faker.company.bsNoun().toLowerCase() + '.io';
    device.last_restart = faker.date.recent(64);
    device.status = [DiskStatus.generate('/dev/sda1'), CPUStatus.generate(), MemoryStatus.generate()];

    return device;
  }
}