import { insertAll } from './ass4_insert_all.js';
import { insert_regex } from './ass4_regex.js'

function insertSome(userQuery) {
    const match = insert_regex.exec(userQuery);

    if (!match) {
        console.error("not a valid INSERT INTO query")
        return;
    }

    const columns = match[1].split(',');
    const values = match[3].split(',');
    
    const obj = {};
    for (let i = 0 ; i < columns.length; i++ ) {
        obj[columns[i]] = values[i].toString();
    }

    return obj
}

export function insert(userQuery) {

    if ((/^INSERT INTO \w+ \* VALUES/i).test(userQuery)) {
        return insertAll(userQuery)
    } else {
        return insertSome(userQuery)
    }
}

// insert("INSERT INTO file (name,city,email) VALUES (shnoer,tzfat,sza770);");


