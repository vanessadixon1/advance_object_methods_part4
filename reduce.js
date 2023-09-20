function extractValue(arr, key) {
    return arr.reduce((acc,current) => {
        let val = current[key];
        acc.push(val);
        return acc;
    },[]);
}

function vowelCount(str) {
    let arr = str.split("");

    return arr.reduce((acc,current)=> {
        let val = current.toLowerCase();
       if("aeiou".indexOf(val)!== -1 && acc[val] != null) {
            acc[val] += 1;
       }else if("aeiou".indexOf(val) !== -1) {
            acc[val] = 1;
       }
       return acc;

    },{});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((acc,current,index)=> {
    
        acc[index][key] = value;
        return acc;
    
    },arr);
}

function partition(arr, callback) {
    return arr.reduce((acc, current) => {
        if(callback(current)) {
            acc[0].push(current);
        }else {
            acc[1].push(current)
        }
        return acc;
    },[[],[]])
}
