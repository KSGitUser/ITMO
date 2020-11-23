const { createReadStream: r, createWriteStream: w } = require('fs');
const rdStr = r('./1.txt', { highWaterMark: 1});

let buf = '';

rdStr.on('data', d => {
    buf += +new TextDecoder().decode(d) + 1;
});

rdStr.on('end', () => {
    const unit8Array = new TextEncoder().encode(buf)
    let wstream = w('./1.txt', );
    wstream.write(unit8Array);
    wstream.end();
});
