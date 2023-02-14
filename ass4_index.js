import * as readline from 'node:readline/promises'
import { insert } from './ass4_insert.js'
import { insertAll } from './ass4_insert_all.js'
import { writeFile } from './ass4_writeFile.js'
import { stdin as input, stdout as output } from 'node:process'
import { select } from './select.js'

async function getQuery() {
    const rl =  readline.createInterface({input, output, terminal: false})

    let userQuery = "";

    while (userQuery === ""){

        userQuery = await rl.question("what is your query? ")
        
        if ((/^INSERT INTO/i).test(userQuery)) {
            
            let objQuery = insert(userQuery)
            writeFile(objQuery)
            
        } else if ((/^SELECT /i).test(userQuery)) {
            
            let selected = select(userQuery)
            console.log(selected)

        } else if (userQuery.startsWith("UPDATE")) {
            
        } else if (userQuery.startsWith("DELETE FROM")) {
            
        } else {
            console.log(`${userQuery} is not a valid SQL request.`)
            
            userQuery = "";
        }
    }

    return rl.close()
}

getQuery()



