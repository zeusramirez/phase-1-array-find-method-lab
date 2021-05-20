const superbowlWin = (records) =>{
    const win = records.find(book => book.result === 'W')
    if (win === undefined){
        return win
    }else 
    return win.year
} 