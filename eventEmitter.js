class Emitter {
  constructor() {
    this.eventMp = {};
  }

  subscribe(event, cb) {
    if (this.eventMp.hasOwnProperty(event)) {
      let arr = this.eventMp[event];
      arr.push(cb);
    } else {
      this.eventMp[event] = [cb];
    }
    let newObject = {
      globalMp: this.eventMp,
      release: function () {
        let eventArr = this.globalMp[this.subscribedEvent];
        let found = false;
        let newArr = [];
        for (let index = 0; index < eventArr.length; index++) {
          console.log(eventArr[index]);
          if (eventArr[index] == this.fn) {
            if (found == false) {
              found = true;
              continue;
            } else {
              newArr.push(eventArr[index]);
            }
          } else {
            newArr.push(eventArr[index]);
          }
        }

        if (newArr.length == 0) {
          delete this.globalMp[this.subscribedEvent];
        } else {
          this.globalMp[this.subscribedEvent] = newArr;
        }
      },
      subscribedEvent: event,
      fn: cb,
    };
    return newObject;
  }

  emit(event, ...args) {
    let eventArr = this.eventMp[event];
    eventArr.forEach((event) => {
      event(...args);
    });
  }
}

function test(name, age) {
  console.log(name, age);
}

const emitter = new Emitter();

const sub1 = emitter.subscribe("event1", callback1);
const sub2 = emitter.subscribe("event2", callback2);

// same callback could subscribe
// on same event multiple times
const sub3 = emitter.subscribe("event1", callback1);

emitter.emit("event1", 1, 2);

sub1.release();
sub3.release();
