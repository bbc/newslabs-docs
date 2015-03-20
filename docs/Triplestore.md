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

**https://www.getpostman.com/collections/aed791f5221f839728b6**

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
##### Gets a concept from the knowledge base, and the most recent creative works tagged with it.

*Parameters :*

 - **uri** : The URI of the concept to retrieve
 - **limit** : integer - max number of creative works to return with the concept
 - **createdBy** : filter associated creative works by the NewsService (source) they were createdBy
 
*Note, the NewsService must be supplied in URI form http://www.bbc.co.uk/things/{UUID}#id  where {UUID} identifies the NewsService source from the Juicer APIs.*

### 2. FIND tagged concepts from the knowledge base
###### Finds concepts in the knowledge base using a full text search term. Useful for building type ahead fields to find things. Returns only concepts that have been tagged on creative works. Use a multihop join to find concepts via some relationship in the wider DBpedia knowledge graph.
*Response is in OpenSearch Suggestions 1.1 JSON format*
*Typical use-case is for type-ahead find widgets*

*Parameters are:*

 - **q** : string - optional a full text search term
 - **limit** : integer - max num of suggestions to return
 - **type** : optional URI defining the ontology class to filter concepts on - multiple types can be specified
 - **join-predicate** : optional predicate URI from DBpedia ontology that concepts found will be joined with
 - **join-object** : optional concept URI from DBpedia ontology that concepts found will be joined with via the join-predicate

*The example below finds people associated with the conservative party with 'dav' in their mame*


### 2a. FIND any concept in the knowledge base
###### Finds concepts in the knowledge base using a full text search term. Useful for building type ahead fields to find things. Use a multihop join to find concepts via some relationship in the wider DBpedia knowledge graph.
*Response is in OpenSearch Suggestions 1.1 JSON format*
*Typical use-case is for type-ahead find widgets*
*Useful for finding All politicians members of a specific party, or all players of a football team etc.*

*Parameters are:*

 - **q** : string - optional a full text search term
 - **limit** : integer - max num of suggestions to return
 - **type** : optional URI defining the ontology class to filter concepts on - multiple types can be specified
 - **join-predicate** : optional predicate URI from DBpedia ontology that concepts found will be joined with
 - **join-object** : optional concept URI from DBpedia ontology that concepts found will be joined with via the join-predicate



### 3. Find Creative Works
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

### 4. Find Creative Works Using Graph Multi-Hop
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

### 5. Find Creative Works Geospatially
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


### 6. Find Creative Works Geospatially using Multi-Hop Graph joins
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






