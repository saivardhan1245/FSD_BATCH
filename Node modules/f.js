const fs= require('fs');
fs.appendFile('Lucas.txt', 'file added successfully',(err)=>{
    if(err)throw error;
    console.log('Data added in my file Successfully');
})