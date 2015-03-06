#  Travel API Documentation

## About Travel

The Travel service is a HTTP API that allows you to discover real-time travel incidents throughout the UK.  The Travel API can be queried by [location](./Locator.html#locations), post code district, BBC News region or public transport operator.

### Core Concepts
#### Travel Incidents

A travel incident entity is either a road, rail, light rail or ferry event with the potential to disrupt a person's journey.  Each travel incident has a set of properties such as id, summary, severity, mode, type, statues (live or planned), locations, start time, stop time and update time.

The summary provides a description of the location, cause and impact of the incident is having on the surrounding area.

The severity provides context to the scale of impact.  The severity will have one of the following values:

* Very slight
* Slight
* Medium
* Severe
* Very severe

The mode describes the mode of transport the event is affecting.  The mode will have one of the following values:

* Road
* Rail
* Light rail
* Ferry

The type describes the type of event occurring.  For example, a road incident can be of type 'roadworks', 'accident', 'congestion' or 'disruption'.

The statuses lists the current state of an event.  A planned incident is one that is not currently occurring (e.g. planned engineering works on the rail network).  However, a planned incident can become live when the roadworks or engineering works start.

A travel incident can have one or two locations.  Each location has a latitude, longitude, qualifier and a set of descriptors.  The qualifier helps describe the relationship between the locations (e.g. 'Between', 'And', or 'At') whilst the descriptors provide information such as road name and town name.  The descriptors vary based on the type of incidents.

Rail and Light rail incidents have additional properties such as their operator (e.g. TfL).

We provide mechanisms by which you may discover incidents (e.g. [location](./Locator.html#locations), post code district, BBC News region or public transport operator).

#### Location

Locations within the Travel API are closely linked to the [locations in the Locator API](./Locator.html#locations).  Querying the Travel API by location will return a summary of location and all travel incidents occuring at this location.  The location in the response contains the properties such as id, latitude, longitude, name, container.  In addition to these properties some locations have nearby rail stations, light rail stations and ferry ports.  Stations and ports have a unique code and name.

## Travel Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Travel API into using this URL:

**https://www.getpostman.com/collections/8c9e9a7d1f142c477181**

This allows you to easily try out the API and explore how it works without writing any code.

<!--#You will need to configure an "Environment" within Postman to be able to make calls. You will need to set a host parameter with value http://travel-newshack-api.cloud.bbc.co.uk/ and an apikey.-->

<img src=" ./img/travel-postman.png" height="300" />

## REST API Endpoints

### 1. Location

Used to discover incidents for a [location](./Locator.html#locations)

#### URL

```
http://travel-newshack-api.cloud.bbc.co.uk/location/:location_id/incidents
```

##### Examples

###### Search for incidents near a location

http://travel-newshack-api.cloud.bbc.co.uk/location/2636432/incidents

###### Search for incidents near a post code

http://travel-newshack-api.cloud.bbc.co.uk/location/CF24/incidents

#### Parameters

The location is passed to the Travel API in the URL.  In the sample URL we've denoted named this `location_id`.  The location_id parameter can either be a Geoname ID or a post code.  The Geoname ID can be obtained from the [Locator API](./Locator.html).  We've compiled a [list of sample list of locations](./Travel/sample-locations.html) within the UK but locaations can be dynamically retrieved from the Locator API.

### 2. BBC News region

Allows you to ask for incidents occurring within a BBC News region.

#### URL

```
http://travel-newshack-api.cloud.bbc.co.uk/news/:news_region
```

#### Examples

###### Search for incidents within a BBC News region

http://travel-newshack-api.cloud.bbc.co.uk/news/northeastwales

#### Parameters

The BBC News region is passed to the Travel API in the URL.  In the sample URL we've named this `news_region`.  We've made available a [list of  BBC News regions](./Travel/bbc-news-regions.html) in the Travel API.  BBC News regions are also available from the [Locator API](./Locator.html).

### 3. Public Transport Operators

Allows you to ask for incidents occurring for a public transport operator

#### URL

```
http://travel-newshack-api.cloud.bbc.co.uk/tags/operator/:operator/incidents
```

#### Examples

###### Search for incidents within a BBC News region

http://travel-newshack-api.cloud.bbc.co.uk/tags/operator/crosscountry/incidents
#### Parameters

The public transport operator is passed to the Travel API in the URL.  In the sample URL we've named this `operator`, we've made available the [full list of available operators](./Travel/public-transport-operators.html).
