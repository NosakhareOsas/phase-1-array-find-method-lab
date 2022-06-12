// code your solution here
const winner = (item) => {
    return (item.result === "W");
}

//const year = obj => obj.find(winner);

const superbowlWin = (array) => {  
    const item = array.find(winner);
    if (item === undefined){
        return undefined;
    }else{
        const value = Object.values(item);
        return value[0];
    }   
};
