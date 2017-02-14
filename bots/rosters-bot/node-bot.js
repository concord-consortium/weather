
var NUTELLA = require('nutella_lib');

// Get configuration parameters and init nutella
var cliArgs = NUTELLA.parseArgs();
var componentId = NUTELLA.parseComponentId();
var nutella = NUTELLA.init(cliArgs.broker, cliArgs.app_id, cliArgs.run_id, componentId);
// Optionally you can set the resource Id
nutella.setResourceId('my_resource_id');


var rosters = nutella.persist.getMongoObjectStore('rosters');

rosters.load(function(){ 
    if (rosters.data == undefined){
        rosters.data = [{portalID:1, topRosterID:1, rosterList:[{ID:1,name:"developer"}]}];
        rosters.save();
    }
    console.log ('rosters loaded');
    console.log (rosters.data);
    console.log ('Completed initialization. Read rosters file.');
    console.log ('Listening for requests');

    nutella.net.handle_requests('get_rosters', function (message, from){
        console.log('request: get_rosters        ' + message);
        return (rosters.data);
    });

    nutella.net.subscribe('set_rosters', function (message, from){
        console.log('request: set_rosters        ' + message);
        rosters.data = message;
        rosters.save();
        nutella.net.publish('rosters_set',message);
    });




});

