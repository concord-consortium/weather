# Weather Nutella Components

A catalog of the `bots` and `interfaces` in the weather/nutella application with a list of Nutella calls made by each one.

## Bots

#### activity
manages the current activity
- `getMongoObjectStore('activity')`
- `publish('activity_set')`
- `handle_requests('get_activity')`
- `subscribe('set_activity', ...)`
- `publish('activity_set')`

#### roomcast
manages the portals, activities, resources, and distribution
- `getMongoObjectStore('portals')`
- `getMongoObjectStore('activities')`
- `getMongoObjectStore('resources2')`
- `getMongoObjectStore('distribution')`
- `handle_requests('get_portals')`
- `handle_requests('get_activities')`
- `handle_requests('get_resources')`
- `handle_requests('get_distribution')`
- `subscribe('set_portals', ...)`
- `publish('portals_set')`
- `subscribe('set_activities', ...)`
- `publish('activities_set')`
- `subscribe('set_resources', ...)`
- `publish('resources_set')`
- `subscribe('set_distribution', ...)`
- `publish('distribution_set')`
- `handle_requests('selected_resources')`

#### rosters-bot
manages the rosters
- `getMongoObjectStore('rosters')`
- `handle_requests('get_rosters')`
- `subscribe('set_rosters', ...)`
- `publish('rosters_set')`

#### test-bot
dummy bot template

## Interfaces

#### activity
select an activity
- `subscribe('activities_set', ...)`
- `request('get_activities', ...)`
- `request('get_activity', ...)`
- `publish('set_activity')`

#### designer
add/remove portals and activities
- `subscribe('resources_set', ...)`
- `request('get_portals', ...)`
- `request('get_activities', ...)`
- `request('get_resources', ...)`
- `request('get_distribution', ...)`
- `publish('set_portals')`
- `publish('set_activities')`
- `publish('set_distribution')`

#### forecast
stub which simply shows HTML prototype of student prediction interface

#### map
stub which simply shows prototype class map image (jpeg)

#### playground
- `request('selected_resources', ...)`

#### portals
- `subscribe('rosters_set', ...)`
- `subscribe('portals_set', ...)`
- `request('get_portals', ...)`
- `request('get_rosters', ...)`
- `request('get_activity', ...)`

#### resources
- `request('get_resources', ...)`
- `publish('set_resources')`

#### roomcast
presents tabbed interface with a separate `resource` in an iframe in each tab
- `subscribe('distribution_set', ...)`
- `subscribe('activity_set', ...)`
- `request('get_activity', ...)`
- `request('selected_resources', ...)`

#### rosters
interface for configuring rosters
- `subscribe('portals_set', ...)`
- `request('get_portals', ...)`
- `request('get_rosters', ...)`
- `publish('set_rosters')`

#### test-interface
shows prototype of simulation selection interface; runs same hard-coded simulation every time
- `publish('ping')`
- `publish('temp_update')`

#### weather-station
prototype of student station; allows input of grid location; shows current time and temperature
- `subscribe('temp_update', ...)`

#### website
dummy page

