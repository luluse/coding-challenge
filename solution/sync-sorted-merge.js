"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {

    
  // 1. loop across logSources
  // 2. for each log source, pop last entry
  // 3. use get time method on each date entry to make chronological sorting easier 
  // 4. implement a min heap
  // 5. store the poped entries in a min heap
  // 6. print the root entry(min value) and extract root entry(replace root by new min entry)
  // 7. loop again across logSources and repeat step 5 and 6 until all logs are drained.


  const logArr = [];

  function timeStamp(date){
    const time = new Date(date).getTime();
    console.log('time',time);
  }

  for (let i = 0; i < logSources.length; i++){
    const log = logSources[i].pop()
    logArr.push(log)

    for(let j = 0; j < logArr.length; j++){
      const time = timeStamp(logArr[j].date);
      // sort and store entries in min heap
      // print root 
    }
    i++
  }


  printer.done()
  return console.log("Sync sort complete.");
};
