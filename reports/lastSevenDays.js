const fs = require('fs');

const DaysBar = require('../src/DaysBar.js');
const DayDate = require('../src/DayDate.js');


let habits = [];

console.log('\x1B[37;1;4mLast 7 Days\x1B[0m');

fs.readFile('./data.txt', 'utf-8', function(e, d) {
  habits = d.split(/\n/);


  let done = [];

  const dates = {};

  for (let i = 0; i < habits.length; i++) {
    if (!done.includes(habits[i].substring(0, habits[i].indexOf(',')))) {
      done = done.concat([habits[i].substring(0, habits[i].indexOf(','))])
      let name = habits[i].substring(0, habits[i].indexOf(','));

      for (let j = 0; j < habits.length; j++) {
        if (habits[j].startsWith(name)) {
          if (!dates[name]) {
            dates[name] = [];
          }
          dates[name] = dates[name].concat([new DayDate(habits[j].substring(habits[j].indexOf(',')))]);
        }
      }

      
      const today = DayDate.today();
      const sixDaysAgo = today.subtractDays(6);
      const daysBar = new DaysBar(sixDaysAgo, today);



      console.log(`\x1B[37;1m + ${name} + \x1B[0m: `);

      while (currentDayDate.toString() <= today.toString()) {
        let currentDayDate = sixDaysAgo;
        if (dates[name].find(date => date.toString().replace(',', '') === currentDayDate.toString())) {
          daysBar.addDayDate(currentDayDate, true);
        } else 
        if (currentDayDate.toString() !== today.toString()) {
            daysBar.addDayDate(currentDayDate, false);
          }
        
        currentDayDate = currentDayDate.getNext();
      }
      daysBar.printBar();
    }
  }
  // console.log('dates', dates);
});
