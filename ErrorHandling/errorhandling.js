const fs = require('fs')

const safeJsonParse = function(str){
    let parsed;
    try{
        parsed = JSON.parse(str)
    } catch(err){
        return "Invalid JSON format"
    }
    return parsed
}

console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"

const readFileWithErrorHandling = function(file, handler){
    fs.readFile(file, 'utf8', (err,data)=>{
        if(err){
            switch(err.code){
                case 'ENOENT':
                    console.log(`File not found: ${file}`)
                    break;
                case 'EISDIR':
                    console.log("Directory chosen instead of file")
                    break;
                default:
                    console.log("default")
            }       
        }
        else{
            handler(data)
        }
    })
}

readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});