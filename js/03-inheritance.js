/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  constructor(deadline, rootSelector) {
    // this = {};

    this.deadline = deadline;
    this.rootSelector = rootSelector;
    this.daysEl = {};
    this.hoursEl = {};
    this.minutesEl = {};
    this.secondsEl = {};

    // return this;
  }

  start() {
    console.log('Start!');
  }

  stop() {
    console.log('Stop!');
  }
}

class PrettyTimer extends Timer {
  constructor(deadline, rootSelector, cssProps) {
    super(deadline, rootSelector);

    this.cssProps = cssProps;
  }
}

const prettyTimer = new PrettyTimer('20.03.2025', '.pretty-timer', {
  color: 'yellow',
  backgroundColor: 'blue',
  fontSize: '20px',
});

console.log(prettyTimer);

class UserTimer extends Timer {
  constructor(deadline, rootSelector) {
    super(deadline, rootSelector);
  }

  pause() {
    console.log('Pause');
  }
}

const userTimer = new UserTimer('02.05.2023', '.user-timer');

console.log(userTimer);

const ownMath = Object.create(Math);

ownMath.floor = function () {
  console.log('Floor');
};

console.log(ownMath);

ownMath.floor();
