let n = prompt('number');

for (let i=0;i <= n;i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}