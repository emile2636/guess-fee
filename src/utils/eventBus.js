function EventBus() {
  this.events = {};
}

EventBus.prototype.emit = function (name, ...args) {
  const es = this.events[name] || [];

  es.forEach((e) => {
    const { cb } = e;
    cb.call(this, ...args);
  });
};

EventBus.prototype.on = function (name, cb) {
  if (!this.events[name]) this.events[name] = [];
  this.events[name].push({
    cb,
  });
};

EventBus.prototype.off = function (name, cb) {
  const e = this.events[name];
  if (!e) return;
  if (!cb) return delete this.events[name];
  const len = e.length;
  for (let i = 0; i < len; i++) {
    if (e[i] === cb) {
      e.splice(i, 1);
      i--;
      l--;
    }
  }
};

export default new EventBus();
