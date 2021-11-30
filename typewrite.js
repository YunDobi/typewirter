const sentence = "hello there from lighthouse lab";
let counter = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write (char);
  } ,counter * 500)
  counter ++;
}
