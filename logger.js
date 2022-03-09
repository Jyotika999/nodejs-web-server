var url = "https://github.com/Jyotika999?tab=repositories"

function logg(message){
    // sending http request 
    console.log(message);
}

// creating a module
// exporting the log module as log 
module.exports.logg = logg;