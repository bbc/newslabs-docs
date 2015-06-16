#  Juicer v2 API Documentation

> This is an early release of the new Juicer v2 API. See the [Juicer v1 API documentation](Juicer.html) for documentation for first version.

## About the Juicer

The Juicer API allows you search articles by text and filter by concepts, dates, and sources. It also provides aggregations and co-occurrences of people, places, organisations and 'things' as tags.

[Read more about the Juicer](http://www.bbc.co.uk/partnersandsuppliers/connectedstudio/newslabs/projects/juicer.html)

## API Key

To use this API you will need a Juicer API Key. Keys are available from the [BBC News Labs team](http://twitter.com/BBC_News_Labs). (If you have an API Key from the Juicer v1, that will still work.)


## If you know what you are doing: REST API Endpoints - a cheatsheet. 
**Endpoint ... What ?!? - Check out the [Step-by-Step-Guide to the API](#stepbystep).**

#### The URL to retrieve articles
```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?apikey={apikey}
```

#### Options

Filter and sort the articles returned from the `articles` endpoint. Parameters are provided in the query string.

Note: arguments must be **URL-encoded**. For example, the url `"http://dbpedia.org/page/Barack_Obama"` must be encoded as `"http%3A%2F%2Fdbpedia.org%2Fresource%2FBarack_Obama"`

Available parameters:

* `q`: Keywords to search for. Searches in title, description and body of the article.

* `sources[]`: Scopes the results to certain sources, i.e. news outlets. The parameter is a number that correspond to a _source id_. To specify multiple sources add multiple `sources[]` options, e.g.  `...&sources[]=1&sources[]=5`. Find the source IDs for the news outlets you're interested in via `http://data.test.bbc.co.uk/bbcrd-juicer/sources`.

* `facets[]`:  Filter the results by facets, i.e. entities from [dbpedia](http://wiki.dbpedia.org/). The parameter is a string and it refers to a dbpedia resource, e.g. `"http://dbpedia.org/page/Barack_Obama"`. To specify multiple facets add multiple `facets[]` keys and values, just like with the sources. Note: The facet parameter is a URL-encoded!

* `size`: number of results to be returned. The parameter is a number.

* `offset`: number of results to skip. It can be used with `size` for pagination. The parameter is a number.

* `published_after`: fetch articles published after a date. The date format is in UTC. Ex:
`2015-02-02T00:00:00.000Z`.

* `published_before`: fetch articles published before a date. The date format is in UTC. Ex:
`2015-02-02T00:00:00.000Z`.

* `recent_first`: Sort results by date (with most recent first) instead of by relevance to keywords. The parameter can be either `yes` or empty.

* `like-text`: Return a list of articles with a text similar to the parameter. The `like-text` parameter is a string.

* `like-ids[]`: Return a list of articles similar to other articles. The parameter is a string (internal id).

* `hist_interval`: allows to specify the intervals for the time-series aggregation (The parameter is one of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`)

* `trending`: Additionally return a list of "trending" concepts for the specified query. Ex: `published_after=2015-06-07&published_before=2015-06-08&trending=true`. This uses Elasticsearch's [significant terms](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-significantterms-aggregation.html) functionality.

All parameters are optional. If parameters are omitted, the endpoint will just return the latest articles.

**That's it - Enjoy! Build great things on top of the Juicer, ask smart questions about the news! Questions and feedback to [@BCC_News_Labs](https://twitter.com/BBC_News_Labs)!**


## Endpoint...what? The Step-by-Step-Guide to the Juicer API. [stepbystep] 

If you go to the Frontend of the Juicer at [http://new.juicer.bbcnewslabs.co.uk](http://new.juicer.bbcnewslabs.co.uk) and search for a key word, say "London", you will see the URL change into something like this...

```
http://new.juicer.bbcnewslabs.co.uk/articles?q=London
```

`q=London` is your query term, which returns you all the articles that match this term in their text. Now, change the URL into...

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London&apikey={apikey}
```

... and you will see the result in JSON format. This is what you want to have - loads of possibilities start here!

### 1. Get Articles by query term

#### Some Examples Requests

Find articles with query `London`
```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London&apikey={apikey}
```

Find articles with query `London` AND `Festival` (watch out for `%20` which replaces the `space` in [URL encoding](http://www.w3schools.com/tags/ref_urlencode.asp))
```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London%20AND%20Festival&apikey={apikey}
```

The following query uses the search phrase `Kenya` OR `Nairobi` AND (`Government` OR `"Uhuru Kenyatta"`) 
```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=kenya%20OR%20nairobi%20AND%20(government%20OR%20%22Uhuru%20Kenyatta%22)&apikey={apikey}
```

### 2. Get one Article by ID

You can get the full text of a specific article by using its `id`. The `id` is a SHA1 hash of the fully resolved URL of an article. E.g the SHA1 (the `id`) for an article located at http://www.bbc.co.uk/news/business-31980802 is `414adf52b72e2eac9ffd9beaf6eb02725053e9c4`.

#### URL

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles/{article-id}?apikey={apikey}
```

#### Example Request

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles/414adf52b72e2eac9ffd9beaf6eb02725053e9c4&apikey={apikey}
```

### 3. Get Similar Articles

You can get a list of similar articles by using  `like-ids`.

#### URL

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?like-ids[]={article-id}&apikey={apikey}
```

#### Example Request

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?like-ids[]=792c35d51f3f8d3c01bf74d940aaf4e2893fc968&apikey={apikey}
```


### 4. Get Articles from a Source

The Juicer currently ingests news articles from over 200 sources (i.e. RSS feeds of news outlets). You can get a list of the available sources and corresponding IDs like this. 

```
http://data.test.bbc.co.uk/bbcrd-juicer/sources&apikey={apikey}
```

If you want to narrow down your search to specific sources, e.g. just the BBC (source ID is `1`), you use the `sources[]` bit and the source ID to filter your results:

#### Example requests 

Articles from BBC News with the query term `London`:

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London&sources[]=1&apikey={apikey}
```

Articles from BBC News and The Guardian with the query term `Paddington`:

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=Paddington&sources[]=1&sources[]=8&apikey={apikey}
```

### 5.Filter by Facets

Facets are a way to filter down your search. They are tags from [DBPedia](http://wiki.dbpedia.org/) annotated by our concept annotation system (Mango). It assigns `People`, `Places`, `Organisations`, and `intangible terms` (e.g. education) to news articles based on the text. You can filter articles for the ones that have one or more of those tags by referring to the URL of the tag in DBPedia, see below:
    
    * http://dbpedia.org/resource/David_Cameron
    * http://dbpedia.org/resource/Liberal_Democrats
    * http://dbpedia.org/resource/United_Kingdom

#### Example Request

Get articles with the query term `London` that have been tagged both with `David Cameron` and `United Kingdom`. 

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FDavid_Cameron&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FUnited_Kingdom&apikey={apikey}
```

Tags don't necessarily appear literally in the text. An article, which contains `Great Britain` may be tagged as `United Kingdom` and both `Liberal Democrats` and `LibDems` may be tagged as `Liberal Democrats`. The tagging process however is development and you may discover articles talking about 'liberals' being tagged as `Liberal Democrats`, too. We recommend to use the tags as a discovery tool for concepts that co-occurring with certain search terms. If you want to count the articles which actually contain `London` and `David Cameron`, you could rather use a query for the two topics:

```
http://data.test.bbc.co.uk/bbcrd-juicer/articles?q=London%20AND%David%20Cameron&apikey={apikey}
```

### 6. Specify time interval for time-series aggregation

One common use case would be to see the appearance of news articles over time, e.g. "How frequently was the term `money` mentioned over the time election campaign?" Since every news article has the date attached to it you could get this information day-by-day but if you wanted to look into a longer term coverage of a topic that maybe isn't picked up so frequently (e.g. Climate Change) you can retrieve the number of articles per week or month or year, too.

Add `&hist_interval=`, and the time unit to aggregate over, to your URL. Possible time units are `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

#### Example Requests

```
http://new.juicer.bbcnewslabs.co.uk/articles?q=David%20Cameron&hist_interval=day
http://new.juicer.bbcnewslabs.co.uk/articles?q=Climate%20Change&hist_interval=month
```


### 7. Get a list of available Sources

Get the a list of `sources` currently indexed and available from the Juicer. Sources are newspapers, broadcast TV channels and other sources.

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


## Juicer Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Juicer 2 API into using this URL:

**https://www.getpostman.com/collections/cebe998a209d9862135b**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls, add `apikey` as a key and your Juicer API key as the value, this will replace {{apikey}} in the requests and the URL variables to your key.
