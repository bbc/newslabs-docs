#  Locator API Documentation

## About Locator

The Locator service is a HTTP API that allows you to discover and ask geospatial questions about places and other entities such as postcodes, news regions, councils etc.

### API Key

To use some of the BBC APIs you will need an API Key, which we have created for this event:

>    `YB0MY3VMHyllzPqEf5alVj5bUvGpvDVi`

You should replace the text `{{apikey}}` in the examples with this key.

### Core Concepts
#### Locations

A location entity is either a place or a post code for which we provide key properties such as a name, location (lat/lon point), country, timezone etc. Our location data is a subset of the Geonames gazetteer. We use the centre point of a postcode to determine it's location.

We provide mechanisms by which you may discover locations eg search, auto-complete, reverse-geocode (nearest location to a lat/lon).

#### Details

We use the term 'details' to describe other data sets eg news regions, weather forecast locations, administrative geography etc. We often hold such data for our customers eg weather station locations for /weather.

We can answer geospatial queries that relate a location entity to a detail dataset eg "which BBC news region is Cardiff within".

## Locator Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Juicer API into using this URL:

**https://www.getpostman.com/collections/8c9e9a7d1f142c477181**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls. You will need to set a host parameter with value http://data.bbc.co.uk/locservices-locator and an apikey.

<img src=" ./img/locator-postman.png" height="300" />

## REST API Endpoints

### 1. Locations

Used to discover locations eg placename search, reverse-geocode.

#### URL

```
http://data.bbc.co.uk/locservices-locator/locations
```

##### Examples

###### Search for a placename

http://data.bbc.co.uk/locservices-locator/locations?apikey={{apikey}}&vv=2&format=json&order=importance&filter=domestic&search=cardiff

###### Auto-complete a partial placename

http://data.bbc.co.uk/locservices-locator/locations?apikey={{apikey}}&vv=2&format=json&order=importance&filter=domestic&auto=true&search=car

###### Search with co-ordinated (reverse-geocode)

http://data.bbc.co.uk/locservices-locator/locations?apikey={{apikey}}&vv=2&format=json&order=importance&filter=domestic&longitude=-3.18&latitude=51.48


#### Options

You can filter and sort the articles returned from the `articles` endpoint. Parameters can be provided in the query string.

Available parameters:

* `search`: a search term eg 'cardiff'
* `auto`: when set to 'true' will return auto-complete results for the search value
* `longitude`: longitude value for reverse-geocode request
* `latitude`: latitude value for reverse-geocode request
* `format`: reponse format of either 'xml' (default) or 'json'
* `order`: sort the results by one of 'term' (default) or 'importance'
* `filter`: a filter combines both place-types and countries. May be one of of 'domestic' (countries set to 'GB, GG, JE, IM', placetype set to 'settlement, airport') or 'international' (countries set to 'GB, GG, JE, IM', placetype set to 'settlement, airport, country')
* `place-types`: filter by placetype eg 'settlement', 'airport', 'country', 'other'. You can specify multiple values eg 'airport,settlement'
* `countries`: filter by country eg 'GB', 'FR'. You can specify multiple values eg 'GB,GG,JE,IM'
* `start`: specify a result start offset (default 0)
* `rows`: specify how many results to return (default 10)
* `vv`: view version. use '2' for a friendlier result format

### 2. Location Details

Allows you to ask geospatial queries about a location.

#### URL

```
http://data.bbc.co.uk/locservices-locator/locations/<location Id>/details/<detailTypes>?apikey={{apikey}}&vv=2&format=json&op=<operator>
```

#### Examples

###### Nearest Rail Stations for a location

[http://data.bbc.co.uk/locservices-locator/locations/CF5 2YQ/details/railstation?apikey={{apikey}}&vv=2&format=json](http://data.bbc.co.uk/locservices-locator/locations/CF5 2YQ/details/railstation?apikey={{apikey}}&vv=2&format=json)

###### BBC Tv & Radio Service(s) for a location

[http://data.bbc.co.uk/locservices-locator/locations/2636432/details/tv,radio?apikey={{apikey}}&vv=2&format=json&operation=intersect](http://data.bbc.co.uk/locservices-locator/locations/2636432/details/tv,radio?apikey={{apikey}}&vv=2&format=json&operation=intersect)

###### BBC News Organisation(s) for a location
[http://data.bbc.co.uk/locservices-locator/locations/CF5 2YQ/details/news-organisation?apikey={{apikey}}&vv=2&format=json&operation=intersect](http://data.bbc.co.uk/locservices-locator/locations/CF5 2YQ/details/news-organisation?apikey={{apikey}}&vv=2&format=json&operation=intersect)

Available parameters:

* `operation`: geospatial operation. one of 'nearest' (default) or 'intersect'
* `start`: specify a result start offset (default 0)
* `rows`: specify how many results to return (default 10)
* `vv`: view version. use '2' for a friendlier result format

