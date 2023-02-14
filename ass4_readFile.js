import fs  from 'node:fs';
import readline from 'node:readline/promises';

export function readLines() {

    const rl = readline.createInterface({
        input: fs.createReadStream('SQLfile.txt'),
        crlfDelay: Infinity
    })
    
    const readLines = async () => {
        return new Promise((resolve) => {
            const lines = [];
            rl.on('line', line => {
                let user = {}
                user["israelID"] = line.substring(0,9);
                user["name"] = line.substring(9,19);
                user["address"] = line.substring(19,39);
                user["phone"] = line.substring(39,52);
                lines.push(user)
                
            })
            rl.on('close', () => {
                resolve(lines);
            });
        });
    };
    return readLines()
}