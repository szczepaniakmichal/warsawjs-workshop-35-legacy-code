module.exports = class DaysBar {
  constructor(from, to) {
    this.range = { from, to };
    this.dayDates = [];
  }

  addDayDate(dayDate, isChecked) {
    // TODO: investigate why replace(',', '') is needed
    this.dayDates.push([dayDate.toString().replace(',', ''), isChecked]);
  }

  printBar() {
    let currentDayDate = this.range.from;
    let bar = '';

    while (currentDayDate.toString() <= this.range.to.toString()) {
      const dayDate = this.dayDates.find((dayDate) => dayDate[0].toString() === currentDayDate.toString());

      if (dayDate) {
        if (dayDate[1]) {
          // use green color
          bar += '\x1B[42m \x1B[0m';
        } else {
          // use red color
          bar += '\x1B[41m \x1B[0m';
        }
      } else {
        // use gray color
        bar += '\x1B[43m \x1B[0m';
      }
      currentDayDate = currentDayDate.getNext();
    }

    console.log(bar);
  }
};
