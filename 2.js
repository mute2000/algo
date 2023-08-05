/*假设你寝室的路由器记录了每台设备连接和断开的时间点，经过整理后，你得到了类似这样一个序列
[[1,9),[2,4),[5,6),[3,7),[1,8)]。请实现一个算法：计算同一时间最多有几台设备连接了路由器。*/

const connectTimes = [[1, 9], [2, 4], [5, 6], [3, 7], [1, 8]];

function maxConnectedDevices(connectTimes) {
    const events = [];

    for (const ct of connectTimes) {
        events.push({time: ct[0], type: 'start'});
        events.push({time: ct[1], type: 'end'});
    }

    events.sort((a, b) => a.time - b.time || (a.type === 'start' ? -1 : 1));

    let maxDevices = 0;
    let currentDevices = 0;

    for (const event of events) {
        if (event.type === 'start') {
            currentDevices++;
            maxDevices = Math.max(maxDevices, currentDevices);
        } else {
            currentDevices--;
        }
    }

    return maxDevices;
}

console.log(maxConnectedDevices(connectTimes));