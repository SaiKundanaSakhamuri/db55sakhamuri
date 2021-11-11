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
exports.kid_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new kid(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"kid_type":"goat", "cost":12, "size":"large"} 
    document.age = req.body.age; 
    document.nationality = req.body.nationality; 
    document.blood_group = req.body.blood_group; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle kid delete form on DELETE. 
exports.kid_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid delete DELETE ' + req.params.id); 
}; 
 
// Handle kid update form on PUT. 
exports.kid_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: kid update PUT' + req.params.id); 
};

// VIEWS
// Handle a show all view
exports.kid_view_all_Page = async function(req, res) {
    try{
    thekid = await kid.find();
    res.render('kid', { title: 'kid Search Results', results: thekid });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };