import { open, readFile } from 'node:fs/promises';
import { select_regex, select_where_regex } from './ass4_regex.js'
import { readLines } from './ass4_readFile.js'



async function select_all(userQuery) {
    let allData = await readLines()
    let columns = Object.keys(allData[0])
    
    console.log(columns)
    for (let i = 0; i < allData.length ; i++) {
        let user = "";
        for (let y = 0; y < columns.length ; y++) {
            user += (allData[i][columns[y]]) + "|"
        }
        console.log(user)
    }


}


async function select_some(userQuery) {
    
    const match = select_regex.exec(userQuery);
    if (!match) {
        console.log("COLUMNS not match")
        return
    }
    
    let allData = await readLines()
    let columns = match[1].split(",")
    console.log(columns)

    for (let i = 0; i < allData.length ; i++) {
        let user = "";
        for (let y = 0; y < columns.length ; y++) {
            user += (allData[i][columns[y]]) + "|"
        }
        console.log(user)
    }  
}

async function select_where(userQuery) {
    
    const match = select_regex.exec(userQuery);
    let allData = await readLines()
    let columns = match[1].split(",")
    console.log(columns)
    let whereColumn = match[3];

    for (let i = 0; i < allData.length ; i++) {
        let user = "";
        for (let y = 0; y < columns.length ; y++) {
            if (allData[i][whereColumn] == match[4]) {
                user += (allData[i][columns[y]]) + "|"
            }
        }
        console.log(user)
    }  
}

export async function select(userQuery) {
    
    if (select_where_regex.test(userQuery)) {

        // return select_where(userQuery)

    } else if  ((/^SELECT \* FROM /i).test(userQuery)) {
        
        return select_all(userQuery)

    } else if ((/^SELECT \((\w+(,\w+)*)\) FROM /i).test(userQuery)) {
        
        return select_some(userQuery)

    } else {
        console.log("not a valid SELECT request")
    }
}

select("SELECT (name,israelID,phone) FROM file WHERE israelID=200140762")