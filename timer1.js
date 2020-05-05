bleepTime = process.argv.slice(2);
bleepTime.sort((a, b) => a - b);
for (let time of bleepTime) {
  if (time >= 0 ) {
  setTimeout(() => {
    process.stdout.write("\x07");
    process.stdout.write('.');
  }, Number(time) * 1000)
  } else {}
}
setTimeout(() => {
  console.log(" ")
}, Number(bleepTime[bleepTime.length -1] * 1010));