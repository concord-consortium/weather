
var NUTELLA = require('nutella_lib');

// Get configuration parameters and init nutella
var cliArgs = NUTELLA.parseArgs();
var componentId = NUTELLA.parseComponentId();
var nutella = NUTELLA.init(cliArgs.broker, cliArgs.app_id, cliArgs.run_id, componentId);
// Optionally you can set the resource Id
nutella.setResourceId('my_resource_id');


var portals = nutella.persist.getMongoObjectStore('portals');
portals.load(function(){ 
    if (portals.data == undefined){
        portals.data = {topID: 0, portalList: []};
        portals.save();
    }
    console.log ('portals loaded');
    console.log (portals.data);

    var activities = nutella.persist.getMongoObjectStore('activities');
    activities.load(function(){ 
        if (activities.data == undefined){
            activities.data = {topID: 0, activityList: []};
            activities.save();
        }
        console.log ('activities loaded');
        console.log (activities.data);

        var resources = nutella.persist.getMongoObjectStore('resources2');
        resources.load(function(){ 
            if (resources.data == undefined){
                resources.data = {topID: 0, resourceList: []};
                resources.save();
            }
            console.log('resources loaded');
            console.log (resources.data);

            var distribution = nutella.persist.getMongoObjectStore('distribution');
            distribution.load(function(){ 
                if (distribution.data == undefined){
                    distribution.data = [];
                    distribution.save();
                }
                console.log('distribution loaded');
                console.log (distribution.data);
                console.log ('Completed initialization. Read Portals, Activities, Resources, and Distribution files');
                console.log ('Listening for requests');

// all files loaded

// open request handlers

// these are used primarily by the distribution editor



                nutella.net.handle_requests('get_portals', function (message, from){
                    console.log('request: get_portals        ' + message);
                    return (portals.data);
                });
                nutella.net.handle_requests('get_activities', function (message, from){
                    console.log('request: get_activities     ' + message);
                    return (activities.data);
                });
                nutella.net.handle_requests('get_resources', function (message, from){
                    console.log('request: get_resources      ' + message);
                    return (resources.data);
                });
                nutella.net.handle_requests('get_distribution', function (message, from){
                    console.log('request: get_distribution   ' + message);
                    return (distribution.data);
                });


                nutella.net.subscribe('set_portals', function (message, from){
                    console.log('request: set_portals        ' + message);
                    portals.data = message;
                    portals.save();
                });
                nutella.net.subscribe('set_activities', function (message, from){
                    console.log('request: set_activities     ' + message);
                    activities.data = message;
                    activities.save();
                });
                nutella.net.subscribe('set_resources', function (message, from){
                    console.log('request: set_resources      ' + message);
                    resources.data = message;
                    resources.save();
                });
                nutella.net.subscribe('set_distribution', function (message, from){
                    console.log('request: set_distribution   ' + message);
                    distribution.data = message;
                    distribution.save();
                });

                // this is used by the application website interface to implement roomcast. this is the heart of roomcast
                // activity + portal = resources


                //nutella.net.request('selected_resources',{portalID: p,activityID: a}, function...)
                //returns an array of objects of the form: {printname, URL}
                // returns an empty array if no resources found for this portal and activity

                nutella.net.handle_requests('selected_resources', function (message, from){ 
                    console.log('request: selected_resources ' + message.activityID + ' ' + message.portalID);
                    return (distribution.data.filter(function(arg){
                            return ((arg.activityID == message.activityID) && (arg.portalID == message.portalID));
                        }).map(function(arg){
                            return arg.resourceID;
                        }).map(function(arg){
                            var target = resources.data.filter(function(arg2){ return (arg2.resourceID == arg);})[0];
                            return {name: target.name, URL: target.URL};
                        })
                    );
                });



            });
        });
    });
});

