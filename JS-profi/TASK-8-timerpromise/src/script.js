import Timer from "timerpromise"


const showTime = async (timerName,func) => {
    if (typeof func !== "function") { return };
    console.time(timerName);
    await func();
    console.timeEnd(timerName);
} 

showTime("whole time", async () => {
    await showTime("first", () => (new Timer(3)).start);
    await showTime("second",() => (new Timer(2)).start);
})



