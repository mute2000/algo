/*假设你寝室的路由器记录了每台设备连接和断开的时间点，经过整理后，你得到了类似这样一个序
列
[[1,9),[2,4),[5,6),[3,7),[1,8)]。请实现一个算法：计算同一时间最多有几台设备连接了路由器。*/ 
const timeSeries = [[1 , 9], [2 , 4], [5 , 6], [3 , 7], [1 , 8]];

function maxDevicesCount(timeSeries) {
    const connectTime = [];
    const disconnectTime = [];

    for (let time of timeSeries) {
        connectTime.push(time[0]);
        disconnectTime.push(time[1]);
    }

    connectTime.sort((a, b) => a - b);
    disconnectTime.sort((a, b) => a - b);

    let currentConnectCount = 0;
    let maxConnectCount = 0;
    let connectIndex = 0;
    let disconnectIndex = 0;

    while (connectIndex < connectTime.length) {
        if (connectTime[connectIndex] < disconnectTime[disconnectIndex]) {
            currentConnectCount++;
            connectIndex++;
        } else {
            currentConnectCount--;
            disconnectIndex++;
        }
        maxConnectCount = Math.max(maxConnectCount, currentConnectCount);
    }

    return maxConnectCount;        
}

console.log(maxDevicesCount(timeSeries));