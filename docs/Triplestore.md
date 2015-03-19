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

**https://www.getpostman.com/collections/45b8263f16422ddd9794**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls:

```
host :  http://data.test.bbc.co.uk/v1/bbcrd-newslabs
apikey: YOUR API KEY
```

## REST API Endpoints
**NOTE: All request parameters must be URLEncoded**

### 1. GET a concept from the knowledge base
##### Gets a concept from the knowledge base, and the most recent creative works tagged with it.

*Parameters :*

 - **uri** : The URI of the concept to retrieve
 - **limit** : integer - max number of creative works to return with the concept
 - **createdBy** : filter associated creative works by the NewsService (source) they were createdBy
 
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
____





