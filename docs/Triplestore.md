#  JUICER V2 - Triplestore API Documentation

## About JUICER Semantic API
This API is provided to allow semantic querying of the JUICER content.

### How does it Work
All the content (creative works) that we have juiced are fed into a triplestore (a semantic repository).
The triplestore is also loaded with the [DBpedia](http://dbpedia.org) knowledge graph.
The knowledge graph describes the concepts that the content is tagged with, 
letting us semantically explore the content using the relationships between concepts in the graph.  

The API allows us to exploit the higher level relationships in the DBpedia knowledge graph to find and aggregate content.
The triplestore stores all this information as RDF, and is queried using SPARQL.  The API provides an abstraction layer on top of this.

For example, in the following diagram, we have two news articles, both tagged with someone associated with the Liberal Democrats.
We can use the API to find Creative Works tagged with people associated with the Liberal Democrats using the relationships in that graph.

<img src=" ./img/cw-graph-1.png" height="300" />

The graphs are described using ontologies (semantic models).

The ontology used to describe the concepts is the [DBpedia Ontology](http://dbpedia.org/ontology)

The ontology used to describe the content is the [BBC Creative Work Ontology](http://www.bbc.co.uk/ontologies/creativework)
 
### Postman

## JUICER Triplestore Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Semantic API examples using this URL:

**https://www.getpostman.com/collections/a2e4c51efa0005564fca**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls:

```
host :  http://data.test.bbc.co.uk/v1/bbcrd-newslabs
apikey: YOUR API KEY
```

## REST API Endpoints
**NOTE: All request parameters must be URLEncoded**

The Response format for all the Creative Work API requests is [JSON-LD](http://json-ld.org/)

Examples for all of these can be found in the Postman collection referenced above.

### 1. GET a concept from the knowledge base
##### Gets a Thing from the knowledge base, and the most recent creative works tagged with it.

*Parameters :*

 - **uri** : The URI of the thing to retrieve
 - **limit** : integer - max number of creative works to return
 - **createdBy** : URI - optional filter associated creative works by the NewsService (source) they were createdBy

*Note, the NewsService must be supplied in URI form http://www.bbc.co.uk/things/{UUID}#id  where {UUID} identifies the NewsService source from the Juicer APIs.*


### 2. Find Creative Works
##### A semantic search for creative work using tagged concepts

*Parameters are:*

 - **tag**: URI of a concept - multiple tag parameters can be used
 - **tagop** : {and | or | fingerprint} The operations to apply to the supplied tags. Default is 'and'. 'fingerprint' returns creative works best matching the set of tags supplied. (Warning fingerprint search is not fast!)
 - **before** : optional date in YYYY-MM-DD format defining the date before which articles were published
 - **after** : optional date in YYYY-MM-DD format defining the date after which articles were published
 - **createdBy** : optionally filter by NewsService (source) using cwork:createdBy URIs
 - **limit** : integer - max number of articles to return, default 10
 - **offset** : integer - offset to start results from to allow for paging / infinite scroll

*Headers are:*

 - **Accept** : application/json | application/ld+json

### 3. Find Creative Works Using Graph Multi-Hop
##### A multi-hop semantic search for creative work via the graph of tagged concepts

*The DBpedia ontology is used extensively as a backing knowledge graph. All classes and predicates from this ontology are exposed. See : [http://dbpedia.org/ontology](http://dbpedia.org/ontology)*

*Parameters are:*

 - **about-tag-type**: Ontology class URI, find creative works by the type (class) of thing they are tagged with, eg http://dbpedia.org/ontology/Person
 - **about-tag-predicate**: Ontology predicate URI - find creative works tagged with concepts that have wider associations with this predicate. eg http://dbpedia.org/ontology/party</li>
 - **about-tag-object**: Concept URI - find creative works tagged with concepts that have wider associations where the about-tag-predicate is associated with this object/concept. eg http://dbpedia.org/resource/Conservative_Party_(UK)
 - **tag**: URI of a concept - multiple tag parameters can be used
 - **tagop** : {and | or | fingerprint} The operations to apply to the supplied tags. Default is 'and'. 'fingerprint' returns creative works best matching the set of tags supplied. (Warning fingerprint search is not fast!)
 - **before** : optional date in YYYY-MM-DD format defining the date before which articles were published
 - **after** : optional date in YYYY-MM-DD format defining the date after which articles were published
 - **createdBy** : optionally filter by NewsService (source) using cwork:createdBy URIs
 - **limit** : integer - max number of articles to return, default 10
 - **offset** : integer - offset to start results from to allow for paging / infinite scroll

*Headers are:*

 - **Accept** : application/json | application/ld+json
 
*The example in the postman collection finds creative works tagged with people associated with the Conservative Party* 

### 4. Find Creative Works Geospatially
##### A geospatial semantic search for creative work. Finds creative works tagged with places with a radius of a supplied latitude and longitude.

*Parameters are:*

 - **point**: {lat,long}, eg:  51.5,-1.0
 - **radius**: {Nmi|km}, eg 10mi , 20km
 - **tag**: URI of a concept - multiple tag parameters can be used
 - **tagop** : {and | or | fingerprint} The operations to apply to the supplied tags. Default is 'and'. 'fingerprint' returns creative works best matching the set of tags supplied. (Warning fingerprint search is not fast!)
 - **before** : optional date in YYYY-MM-DD format defining the date before which articles were published
 - **after** : optional date in YYYY-MM-DD format defining the date after which articles were published
 - **createdBy** : optionally filter by NewsService (source) using cwork:createdBy URIs
 - **limit** : integer - max number of articles to return, default 10
 - **offset** : integer - offset to start results from to allow for paging / infinite scroll

*Headers are:*

 - **Accept** : application/json | application/ld+json


### 5. Find Creative Works Geospatially using Multi-Hop Graph joins
#### Combining geospatial with graph search.
##### A geospatial multi-hop semantic search for creative work via the graph of tagged concepts within a radius of some location.

*Parameters are:*

 - **point**: {lat,long}, eg:  51.5,-1.0
 - **radius**: {Nmi|km}, eg 10mi , 20km
 - **about-tag-type**: Ontology class URI, find creative works by the type (class) of thing they are tagged with, eg http://dbpedia.org/ontology/Person
 - **about-tag-predicate**: Ontology predicate URI - find creative works tagged with concepts that have wider associations with this predicate. eg http://dbpedia.org/ontology/party</li>
 - **about-tag-object**: Concept URI - find creative works tagged with concepts that have wider associations where the about-tag-predicate is associated with this object/concept. eg http://dbpedia.org/resource/Conservative_Party_(UK)
 - **tag**: URI of a concept - multiple tag parameters can be used
 - **tagop** : {and | or | fingerprint} The operations to apply to the supplied tags. Default is 'and'. 'fingerprint' returns creative works best matching the set of tags supplied. (Warning fingerprint search is not fast!)
 - **before** : optional date in YYYY-MM-DD format defining the date before which articles were published
 - **after** : optional date in YYYY-MM-DD format defining the date after which articles were published
 - **createdBy** : optionally filter by NewsService (source) using cwork:createdBy URIs
 - **limit** : integer - max number of articles to return, default 10
 - **offset** : integer - offset to start results from to allow for paging / infinite scroll

*Headers are:*

 - **Accept** : application/json | application/ld+json
 
*The example in the postman collection finds creative works tagged with people who have played for Manchester United football club and also tagged with a place within 15km of Sheffield*

### 6. Find Tagged Things Multi-hop
###### Finds things in the knowledge base using a full text search term. Useful for building type ahead fields to find things. Returns only things that have been tagged on creative works. Use an optional multi-hop join to find things via some relationship in the wider DBpedia knowledge graph.
*Typical use-case is for type-ahead find widgets*

*Parameters are:*

 - **q** : string - optional -a full text search term
 - **limit** : integer - max num of suggested things to return
 - **type** : optional URI defining the ontology class to filter things on - multiple types can be specified
 - **join-predicate** : optional predicate URI from DBpedia ontology that things found will be joined with
 - **join-object** : optional concept URI from DBpedia ontology that things found will be joined with via the join-predicate

*The example in the postman collection finds people associated with the conservative party with 'dav' in their mame*


### 7. Find Things Multi-hop
###### Finds things in the knowledge base. Useful for building typeahead fields to find things.  Use an optional multi-hop join to find things via some relationship in the wider DBpedia knowledge graph.
*Typical use-case is for type-ahead find widgets*

*Parameters are:*

 - **q** : string - optional a full text search term
 - **limit** : integer - max num of suggestions to return
 - **type** : optional URI defining the ontology class to filter things on - multiple types can be specified
 - **join-predicate** : optional predicate URI from DBpedia ontology that concepts found will be joined with
 - **join-object** : optional thing URI from DBpedia ontology that concepts found will be joined with via the join-predicate

*The example in the postman collection finds all members of UKIP party *

### 8. Find Thing Occurrences Multi-hop
###### Finds most frequently tagged things in the knowledge base.

*Parameters are:*

 - **limit** : integer - max num of things to return
 - **type** : optional/multiple URI defining the ontology class to filter concepts on
 - **before** : date in YYYY-MM-DD format defining the date before which tag frequencies should be calculated
 - **after** : date in YYYY-MM-DD format defining the date after which tag frequencies should be calculated
 - **join-predicate** : optional predicate URI from DBpedia ontology that things found will be joined with
 - **join-object** : optional thing URI from DBpedia ontology that things found will be joined with via the join-predicate

*The example in the postman collection finds the most frequently occurring conservative MPs in the news in the last week*

NOTE, quite a heavy weight query so don't expect this to be rocket fast, please keep date ranges narrow.
Defaults to the last week until now.

### 9. Find Thing Co-Occurrences Multi-hop
###### Finds most frequently tagged things in the knowledge base, co-occurring with a supplied thing

*Parameters are:*

 - **uri** : URI of a thing to find co-occurrences with
 - **limit** : integer - max num of things to return
 - **type** : optional/multiple URI defining the ontology class to filter things on
 - **before** : date in YYYY-MM-DD format defining the date before which tag frequencies should be calculated
 - **after** : date in YYYY-MM-DD format defining the date after which tag frequencies should be calculated
 - **join-predicate** : optional predicate URI from DBpedia ontology that things found will be joined with
 - **join-object** : optional thing URI from DBpedia ontology that things found will be joined with via the join-predicate

*The example in the postman collection finds the most frequently occurring Labour party people in the news co-occuring with Len McClusky in 2015*

Date range defaults to the last week until now.
