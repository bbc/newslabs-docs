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

 
### Postman

## JUICER Triplestore Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Semantic API examples using this URL:

**https://www.getpostman.com/collections/45b8263f16422ddd9794**

This allows you to easily try out the API and explore how it works without writing any code.

## REST API Endpoints

### 1. GET a concept from the knowledge base

____

#### URL

```
http://data.test.bbc.co.uk/v1/bbcrd-newslabs`
```




