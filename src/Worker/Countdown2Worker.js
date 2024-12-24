self.onmessage = (event) => {
  let time = event.data;
  const stop = setInterval(() => {
    if (time <= 0) {
      clearInterval(stop);
      self.postMessage(0);
    } else {
      time -= 1000;
      self.postMessage(time);
    }
  }, 1000);
};
