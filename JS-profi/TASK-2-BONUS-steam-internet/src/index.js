const http = require('http');

const decoder = new TextDecoder()

for (let i = 1000; i < 1005; i++) { 
 http.get(`http://kodaktor.ru/api2/buffer2/${i}`, (rdStr, buf = '') => {
    rdStr.on('data', d => { 
        let letter = decoder.decode(d, {stream: true})
        if (/[A-z]/g.test(letter)) {
            console.log('V2 =>', Buffer.byteLength(buf));
        }
        buf+=d
    });
    rdStr.on('end', () => { 
        console.log("Зависимость между N и V1 =>", Buffer.byteLength(buf)/i);
});
});
}

 