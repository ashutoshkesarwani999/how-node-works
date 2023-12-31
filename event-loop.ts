import fs from 'fs';
import crypto from 'crypto';
const start = Date.now();

// process.env.UV_THREADPOOL_SIZE= 3;
setTimeout(() => console.log("Timer 1 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));


fs.readFile('test-file.txt', () => {
    console.log('I/O Finished')
    setTimeout(() => console.log("Timer 2 finished"), 0);

    setTimeout(() => console.log("Timer 3 finished"), 2000);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("Process.nextTick"))
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, " Password Encrypted")
    });
})

console.log("Hello from the top-level code")