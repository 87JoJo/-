(() => {
  let input = 20;
  let all = [];

  for (i = 1; i <= input; i++) {
    all.push(i);
  }
  let output = all.filter(a => {
    console.log(a);
    return input / a == 1 || input % a != 0 || input / a == input;
  });
  console.log(output);
})();
