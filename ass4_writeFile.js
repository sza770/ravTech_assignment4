import { readFile , appendFile , open } from 'node:fs/promises';


export async function writeFile (objQuery) {
    
    const buffer_length = 51;
    let buffer = Buffer.alloc(buffer_length, ".");
    
    
    async function writeNewUserToDataFile(obj) {

    obj.israelID !== undefined? buffer.write(obj.israelID, 0) : console.log("you did not enter ID")  

    obj.name !== undefined? buffer.write(obj.name, 9) : console.log("you did not enter NAME") 
    
    obj.address !== undefined? buffer.write(obj.address, 19) : console.log("you did not enter ADDRESS") 
    
    obj.phone !== undefined? buffer.write(obj.phone, 39) : console.log("you did not enter PHONE") 
    
    // buffer.write(obj.israelID, 0)
    // buffer.write(obj.name,9)
    // buffer.write(obj.address,19)
    // buffer.write(obj.phone,39)
  
    // console.log(buffer)
    console.log(buffer.toString())
    
    await appendFile("SQLfile.txt", `${buffer}\n`)
    }
    
    writeNewUserToDataFile(objQuery)
    
    async function countLinesInFiles(){
      let lineCount = 0;
      const file = await open("SQLfile.txt")  
      for await (const i of file.readLines()) {
        lineCount++;
      }
      console.log("line Count in sql file:", lineCount)
      return lineCount;
    }
    
    async function writeNewUserToIndex(userID){
      
      let count = await countLinesInFiles()
      
      await appendFile("indexFile.txt", `${userID}_${count}\n`)
      
      console.log("index saved")
      
    }
    writeNewUserToIndex(objQuery.israelID)
}