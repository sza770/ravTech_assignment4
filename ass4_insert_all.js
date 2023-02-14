import { insert_all_regex } from './ass4_regex.js'

export function insertAll(userQuery) {


    const match = insert_all_regex.exec(userQuery);

    if (!match) {
        console.error("not a valid 'INSERT INTO *' query")
        return;
    }

    // const columns = match[1].split(',');
    const values = match[1].split(',');
    
    const obj = {};
    obj["israelID"] = values[0];
    obj["name"] = values[1];
    obj["address"] = values[2];
    obj["phone"] = values[3];
    

    return obj
}
// insertAll("INSERT INTO tablename * VALUES (200140762,shneoramramy,sza770gmailcom,0543201099);")



