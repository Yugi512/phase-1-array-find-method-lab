// write a functiion superbowlwins and hvae it return the years that the denver broncos have won a superbowl
// and then have it return undefined if the record has no win objects 
function callBack(eachRecord){
    console.log(eachRecord)
    let x = eachRecord.result;
    if( x === "W" ){
        return eachRecord;
    }

}

function superbowlWin(record){
   
    const win = record.find(callBack);
    if( win === undefined){
        return undefined;
    }
    return win.year;
}



