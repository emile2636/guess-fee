interface Events {
  [key: string]: Array<() => void>;
}

class EventEmitter {
  private events: Events = {};

  on(name: string, callback: () => void): void {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push(callback);
  }

  off(name: string, callback: () => void): void {
    const eventList = this.events[name];
    if (!eventList || eventList.length === 0) return;
    const idx = eventList.indexOf(callback);
    if (idx === -1) eventList.splice(idx, 1);
  }

  emit(name: any, ...args: any): void {
    const eventList = this.events[name];
    if (!eventList || eventList.length === 0) return;
    eventList.forEach((e) => e.apply(this, args));
  }
}

export default new EventEmitter();
