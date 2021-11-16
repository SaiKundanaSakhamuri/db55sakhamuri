var kid = require('../models/kid'); 
 
// List of all kids 
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
exports.kid_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await kid.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
//  Handle kid update form on PUT. 
exports.kid_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await kid.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.kid_type)  
               toUpdate.age = req.body.age; 
        if(req.body.nationality) toUpdate.nationality = req.body.nationality; 
        if(req.body.blood_group) toUpdate.blood_group = req.body.blood_group; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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