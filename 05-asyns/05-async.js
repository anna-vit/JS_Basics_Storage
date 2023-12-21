//Event Loop 

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            reject('Error');
        },time);
    });
    return promise
};

delay(2500).then((data) => {
    console.log('Hi timeout');
    return data.map((x) => x** 2)
})
.then((data) => {console.log(data)})
.catch((err) =>{ console.log(err)})
.finally(() => { console.log('Finaly')});

const getData = () => new Promise((resolve) => resolve([1,2,3]));

async function asyncExample () {
    try {
        const data = await getData();
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Finally');
    }
};

asyncExample();