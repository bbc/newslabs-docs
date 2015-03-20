#  Juicer v2 API Documentation

> This is an early release of the new Juicer v2 API. See the [Juicer v1 API documentation](Juicer.html) for documentation for original version.

## About the Juicer

The Juicer API allows you search articles by text and filter by concepts, dates, and sources. It also provides aggregations and co-occurrences.

[Read more about the Juicer](http://www.bbc.co.uk/partnersandsuppliers/connectedstudio/newslabs/projects/juicer.html)

## API Key

You will need a Juicer API Key to access this API. These are the same keys as for the v1.0 API. Keys are available from the BBC News Labs team [BBC News Labs team](http://twitter.com/BBC_News_Labs).

## Juicer Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Juicer 2 API into using this URL:

**https://www.getpostman.com/collections/cebe998a209d9862135b**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls, add `apikey` as a key and your Juicer API key as the value, this will replace {{apikey}} in the requests and the URL variables to your key.

## REST API Endpoints

### 1. Get Articles

#### URL

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?apikey={apikey}
```

#### Options

You can filter and sort the articles returned from the `articles` endpoint. Parameters can be provided in the query string.

Note: arguments must be URLEncoded. For example, the url `"http://dbpedia.org/page/Barack_Obama"` must be encoded as `"http%3A%2F%2Fdbpedia.org%2Fresource%2FBarack_Obama"`

Available parameters:

* `q`: keywords to search for. Searches in title, description and body of the article.
* `sources[]`: scopes the results to certain sources. Multiple products can be specified by adding multiple `sources[]` values. The parameter is a number that correspond to a _source id_.
* `facets[]`:  filter the results by facets. The facets parameter is a URL-Encoded resource from dbpedia. Multiple facets can be specified by adding multiple `facets[]` keys and values. The parameter is a string and it refers to a dbpedia resource.
* `size`: number of results to be returned. The parameter is a number.
* `offset`: number of results to skip. It can be used with `size` for pagination. The parameter is a number.
* `published_after`: fetch articles published after a date. The date format is in UTC. Ex:
`2015-02-02T00:00:00.000Z`.
* `published_before`: fetch articles published before a date. The date format is in UTC. Ex:
`2015-02-02T00:00:00.000Z`.
* `recent_first`: Sort results by date (with most recent first) instead of by relevance to keywords. The parameter can be either `yes` or empty.
* `like-text`: Return a list of articles with a text similar to the parameter. The `like-text` parameter is a string.
* `like-ids[]`: Return a list of articles similar to other articles. The parameter is a string (internal id).

All parameters are optional. If parameters are omitted, the endpoint will just return the latest articles.

#### Example Request

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London&apikey={apikey}
```

#### Complex Query Example

The Juicer supports doing complex queries across multiple sources. For example, the following query uses the search phrase `kenya OR nairobi AND (government OR "Uhuru Kenyatta")` which returns articles that match that specific query.

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=kenya%20OR%20nairobi%20AND%20(government%20OR%20%22Uhuru%20Kenyatta%22)&apikey={apikey}
```

### 2. Get Article

You can get the full text of a specific article by using its `id`. The `id` is a SHA1 hash of the fully resolved URL of an article. E.g the SHA1 (the `id`) for an article located at http://www.bbc.co.uk/news/business-31980802 is `414adf52b72e2eac9ffd9beaf6eb02725053e9c4`.

#### URL

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles/{article-id}?apikey={apikey}
```

#### Example Request

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles/414adf52b72e2eac9ffd9beaf6eb02725053e9c4&apikey={apikey}
```

### 2. Get Similar Articles

You can get a list of similar articles by using  `like-ids`.

#### URL

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?like-ids[]={article-id}&apikey={apikey}
```

#### Example Request

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?like-ids[]=792c35d51f3f8d3c01bf74d940aaf4e2893fc968&apikey={apikey}
```


#### 3. Get Articles from a Source

Get a list of articles from a source

#### Example request 

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?sources[]=1&apikey={apikey}
```

Get a list of articles from two different sources:

#### Example request 

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?sources[]=1&sources[]=2&apikey={apikey}
```

#### 4.Filter by Facets


Get a list of Articles filtered by a list of facets.

Example, we want to filter by
    
    * http://dbpedia.org/resource/David_Cameron
    * http://dbpedia.org/resource/Liberal_Democrats
    * http://dbpedia.org/resource/United_Kingdom


```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FDavid_Cameron&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FLiberal_Democrats&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FUnited_Kingdom&apikey={apikey}
```


### 5. Get Sources

Get the a list of `sources` currently indexed and avalible from the Juicer. Sources are newspapers, broadcast TV channels and other sources.


Available parameters:

* `name`: keyword to search for. It searches in name of the source.

#### Example request 


Get all sources:

```
http://data.test.bbc.co.uk/bbcrd-juicer/sources&apikey={apikey}
```


Get all sources by name: 

```
http://data.test.bbc.co.uk/bbcrd-juicer/sources?name=sun&apikey={apikey}
```
