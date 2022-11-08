function TimeSinceFunc(date) {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let divisors = [31536000, 2592000, 86400, 3600, 60, 1];
  let description = ["years", "months", "days", "hours", "minutes", "seconds"];
  let result = [];

  let interval = seconds;

  for (let i = 0; i < divisors.length; i++) {
    interval = Math.floor(seconds / divisors[i]);
    if (interval > 1) {
      result.push(interval + " " + description[i]);
    }
    seconds -= interval * divisors[i];
  }
  return result[0] + " ago";
}

export default TimeSinceFunc;
