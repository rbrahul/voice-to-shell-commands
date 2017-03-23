var exec = require('child_process').exec;

export const runVoiceCommand = function(req,res) {
    exec(req.body.command, function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
        return res.status(201).json({'message':'Internal server error','error':error});
    } 
    if(stderr){
        console.log('exec error from stderr: ' + stderr);
        return res.status(400).json({error:stderr});
    }
    if(stdout) {
         console.log('Shell Executed: ' + stderr);
         return res.status(201).json({message:stdout});
    }
});
}