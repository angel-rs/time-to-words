/*
x '0:00' > 'midnight'
x '12:00' > 'midday'
x '2:00' > 'two o'clock'
x '2:03' > 'three past two'
x '2:11' > 'eleven past two'
x '2:15' > 'quarter past two' 
x '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'
*/

const NUMBER_TO_STRING = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  8: "eight",
  11: "eleven",
  15: "quarter",
  30: "half",
  20: "twenty",
  27: "twenty seven",
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hourString, minutesString] = time.trim().split(":");
  const hour = Number(hourString);
  const minutes = Number(minutesString);

  if (hour === 0 && minutes === 0) {
    return "midnight";
  }

  if (hour === 12 && minutes === 0) {
    return "midday";
  }

  if (minutes === 0) {
    return `${NUMBER_TO_STRING[hour]} o'clock`;
  }

  if (minutes <= 30) {
    return `${NUMBER_TO_STRING[minutes]} past ${NUMBER_TO_STRING[hour]}`;
  }

  const missingAmount = 60 - minutes;
  const nextHour = hour + 1;

  return `${NUMBER_TO_STRING[missingAmount]} to ${NUMBER_TO_STRING[nextHour]}`;
}

module.exports = { convertTimeToWords };
