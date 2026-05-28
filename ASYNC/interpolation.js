// setTimeout: schedules a callback after a delay in milliseconds
// Closure: step, start, end, duration are captured by each scheduled callback
// Linear interpolation: evenly distributes points between start and end across steps

// interpolation schedules `step` evenly spaced callback calls from start to end over duration ms
export const interpolation = ({ step, start, end, callback, duration }) => {
  const interval = duration / step;
  const range = end - start;

  // schedule one callback per step, each delayed by i * interval ms
  for (let i = 0; i < step; i++) {
    const x = start + (range / step) * i;
    const y = interval * (i + 1);
    setTimeout(() => callback([x, y]), interval * (i + 1));
  }
};
