var kid = require('../models/kid'); 
 
// List of all kid 
exports.kid_list = async function(req, res) { 
    try{ 
        thekid = await kid.find(); 
        res.send(thekid); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific kid. 
exports.kid_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid detail: ' + req.params.id); 
}; 
 
// Handle kid create on POST. 
exports.kid_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid create POST'); 
}; 
 
// Handle kid delete form on DELETE. 
exports.kid_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid delete DELETE ' + req.params.id); 
}; 
 
// Handle kid update form on PUT. 
exports.kid_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid update PUT' + req.params.id); 
}; 