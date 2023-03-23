const os= require('os')

const userInfo=os.userInfo()

console.log(userInfo)

//system uptime

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalMem,
    freeMem:os.freeMem
}

console.log(currentOs)