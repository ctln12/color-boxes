function choice(arr) {
  let colorIndex = Math.floor(Math.random() * arr.length);
  return arr[colorIndex];
}

export { choice };
