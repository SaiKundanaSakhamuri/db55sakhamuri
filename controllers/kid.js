var kid = require('../models/kid');
// List of all kids
exports.kid_list = function(req, res) {
res.send('NOT IMPLEMENTED: kid list');
};

// for a specific kid.
exports.kid_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kid detail: ' + req.params.id);
};

// Handle kid create on POST.
exports.kid_create_post = async function (req, res) {
    console.log(req.body)
    let document = new kid();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
    document.Name = req.body.Name;
    document.Breed = req.body.Breed;
    document.Age = req.body.Age;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle kid delete form on DELETE.
exports.kid_delete = async function(req, res) 
{
    console.log("delete " + req.params.id)
    try {
    result = await kid.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
 
// Handle kid update form on PUT.
exports.kid_update_put =  async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await kid.findById( req.params.id)
// Do updates of properties
if(req.body.Name)toUpdate.Name = req.body.Name;
if(req.body.Breed)toUpdate.Breed = req.body.Breed;
if(req.body.Age)toUpdate.Age = req.body.Age;
let result = await toUpdate.save(); 
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


// List of all kid
exports.kid_list = async function (req, res) {
    try {
        thekid = await kid.find();
        res.send(thekid);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
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



// for a specific kid.
exports.kid_detail = async function(req, res) 
{
    console.log("detail" + req.params.id)
    try {
    result = await kid.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query
exports.kid_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await kid.findById( req.query.id)
    res.render('kiddetail',
    { title: 'kid Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


// Handle building the view for creating a kid.
// No body, no in path parameter, no query.
// Does not need to be async
exports.kid_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('kidcreate', { title: 'kid Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle building the view for updating a kid. 
// query provides the id 
exports.kid_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await kid.findById(req.query.id) 
        res.render('kidupdate', { title: 'kid Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};


// Handle a delete one view with id from query
exports.kid_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await kid.findById(req.query.id)
    res.render('kiddelete', { title: 'kid Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };



