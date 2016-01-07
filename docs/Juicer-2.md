# The Juicer v2 API Documentation

This is the active version of the Juicer API. See the [Juicer v1 API documentation](Juicer.html) for documentation for the first version.

## About the Juicer

The Juicer API allows you to search articles by text, topics, dates, and sources. It also provides aggregations and co-occurrences of people, places, organisations and 'things' as tags.

[Read more about the Juicer](http://bbcnewslabs.co.uk/projects/juicer/)

## API Key

To use this API you will need a Juicer API Key. Keys are available from the [BBC News Labs team](http://twitter.com/BBC_News_Labs).

## The URL to retrieve articles

```
http://juicer.api.bbci.co.uk/articles?api_key={API_KEY}
```

## Options

Parameters can be provided in the query string.

Note: arguments must be [URL encoded](https://en.wikipedia.org/wiki/Query_string#URL_encoding). For example, the url `"http://dbpedia.org/page/Barack_Obama"` must be encoded as `"http%3A%2F%2Fdbpedia.org%2Fresource%2FBarack_Obama"`

Available parameters:

* `q`: Keywords to search for. Searches in title, description and body of the article.

* `lang`: Scopes the results to sources in the specified language. Available languages at the moment are `en` (English) and `es` (Spanish)

* `sources[]`: Scopes the results to certain sources, i.e. news outlets. The parameter is a number that correspond to a _source id_. To specify multiple sources add multiple `sources[]` options, e.g.  `...&sources[]=1&sources[]=5`.  Find the source IDs for the news outlets you're interested in via `http://juicer.api.bbci.co.uk/sources`.

* `facets[]`:  Filter the results by facets, i.e. entities from [DBpedia](http://wiki.dbpedia.org/). The parameter is a string and it refers to a DBpedia resource, e.g. `"http://dbpedia.org/page/Barack_Obama"`. To specify multiple facets add multiple `facets[]` keys and values, just like with the sources. Note: The facet parameter is [URL encoded](https://en.wikipedia.org/wiki/Query_string#URL_encoding)!

* `size`: number of results to be returned. The parameter is a number, the default value is 25.

* `offset`: number of results to skip. It can be used together with `size` for pagination. The parameter is a number, the default value is 0.

* `published_after`: fetch articles published after a date. The date format is in UTC. Ex: `2015-02-02T00:00:00.000Z`.

* `published_before`: fetch articles published before a date. The date format is in UTC. Ex: `2015-02-02T00:00:00.000Z`.

* `recent_first`: sort results by date (with most recent first) instead of by relevance to keywords. The parameter can be either `yes` or empty.

* `like-text`: return a list of articles with a text similar to the parameter. The `like-text` parameter is a string.

* `like-ids[]`: return a list of articles similar to other articles based on their textual content. The parameter is a string (the article id in the Juicer database). This feature is implemented using Elasticsearch's [More Like This API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-more-like-this.html).

* `hist_interval`: if this parameter is not empty, return a time series for the current query. The parameter specifies the granularity ot the time series and must be one of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`.

* `trending`: if `true` return a list of "trending" topics for the specified date range. Trending topics are DBpedia URLs that are appearing more frequently than usual in the specified date range. Ex: `published_after=2015-06-07&published_before=2015-06-08&trending=true`. This uses Elasticsearch's [significant terms](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-significantterms-aggregation.html) functionality.

* `concepts`: if `true` it will return an aggregation of all the topics found in the articles matching the current query, aggregated by Things, People, Places, Organisations.

* `sources_aggregation`: if `true` it will return the articles count grouped by source.

All parameters are optional. If parameters are omitted, the endpoint will just return the latest articles.

**That's it - Enjoy! Build great things on top of the Juicer, ask smart questions about the news! Questions and feedback to [@BBC_News_Labs](https://twitter.com/BBC_News_Labs)!**


## 1. Get Articles by query term

### Some Examples Requests

Find articles containing the word `London`
```
http://juicer.api.bbci.co.uk/articles?q=London&api_key={API_KEY}
```

Find articles containing `London` AND `Festival` (watch out for `%20` which replaces the `space` in [URL encoding](https://en.wikipedia.org/wiki/Query_string#URL_encoding))
```
http://juicer.api.bbci.co.uk/articles?q=London%20AND%20Festival&api_key={API_KEY}
```

The following query uses the search phrase `Kenya` OR `Nairobi` AND (`Government` OR `"Uhuru Kenyatta"`)
```
http://juicer.api.bbci.co.uk/articles?q=kenya%20OR%20nairobi%20AND%20(government%20OR%20%22Uhuru%20Kenyatta%22)&api_key={API_KEY}
```

## 2. Get one Article by ID

You can get the full text of a specific article by using its `id`. The `id` is a SHA1 hash of the fully resolved URL of an article. E.g. the SHA1 (the `id`) for an article located at http://www.bbc.co.uk/news/business-31980802 is `414adf52b72e2eac9ffd9beaf6eb02725053e9c4`.

### URL

```
http://juicer.api.bbci.co.uk/articles?q=kenya%20OR%20nairobi%20AND%20(government%20OR%20%22Uhuru%20Kenyatta%22)&api_key={api_key}
```

### Example Request

```
http://juicer.api.bbci.co.uk/articles/414adf52b72e2eac9ffd9beaf6eb02725053e9c4?api_key={api_key}
```

## 3. Get Similar Articles

You can get a list of similar articles by using `like-ids`.

### URL

```
http://juicer.api.bbci.co.uk/articles?like-ids[]={article-id}&api_key={api_key}
```

### Example Request

```
http://juicer.api.bbci.co.uk/articles?like-ids[]=792c35d51f3f8d3c01bf74d940aaf4e2893fc968&api_key={api_key}
```

## 4. Get Articles from a Source

The Juicer currently ingests news articles from over 400 sources (i.e. RSS feeds of news outlets). You can get a list of the available sources and corresponding IDs from the `/sources` endpoint.

```
http://juicer.api.bbci.co.uk/sources?api_key={api_key}
```

If you want to narrow down your search to specific sources, e.g. just the BBC (source ID is `1`), you use the `sources[]` bit and the source ID to filter your results.

### Example requests

Articles from BBC News with the query term `London`:

```
http://juicer.api.bbci.co.uk/articles?q=London&sources[]=1&api_key={api_key}
```

Articles from BBC News and The Guardian with the query term `Paddington`:

```
http://juicer.api.bbci.co.uk/articles?q=Paddington&sources[]=1&sources[]=8&api_key={api_key}
```

## 5.Filter by topics

Topics are a way to filter down your search. They are added by our topic extraction system called Mango: it finds relevant DBpedia entities based on the text of an article. You can filter articles for the ones that have one or more of those topics by referring to its DBpedia URL.

    * http://dbpedia.org/resource/David_Cameron
    * http://dbpedia.org/resource/Liberal_Democrats
    * http://dbpedia.org/resource/United_Kingdom

### Example Request

Get articles with the query term `London` that have been tagged both with `David Cameron` and `United Kingdom`.

```
http://juicer.api.bbci.co.uk/articles?q=London&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FDavid_Cameron&facets[]=http%3A%2F%2Fdbpedia.org%2Fresource%2FUnited_Kingdom&api_key={api_key}
```

Topics don't necessarily appear literally in the text. An article, which contains `Great Britain` may be tagged as `United Kingdom` and both `Liberal Democrats` and `LibDems` may be tagged as `Liberal Democrats`. The tagging process however is under development and you may discover articles talking about 'liberals' being tagged as `Liberal Democrats`, too. We recommend to use the topics as a discovery tool for topics that are co-occurring with certain search terms. If you want to count the articles which actually contain `London` and `David Cameron`, you could rather use a query for the two topics:

```
http://juicer.api.bbci.co.uk/articles?q=London%20AND%20David%20Cameron&api_key={api_key}
```

## 6. Specify time interval for time-series aggregation

One common use case would be to see the appearance of news articles over time, e.g. "How frequently was the term `money` mentioned over the time election campaign?". Since every news article has the date attached to it you could get this information day-by-day but if you wanted to look into a longer term coverage of a topic that maybe isn't picked up so frequently (e.g. Climate Change) you can retrieve the number of articles per week or month or year, too.

Add `&hist_interval=` and the time unit to aggregate over to your URL. Possible time units are `second`, `minute`, `hour`, `day`, `week`, `month`, `year`.

### Example Requests

```
http://juicer.api.bbci.co.uk/articles?q=David%20Cameron&hist_interval=day&api_key={api_key}
http://juicer.api.bbci.co.uk/articles?q=Climate%20Change&hist_interval=month&api_key={api_key}
```

## 7. Get a list of available Sources

Get the a list of `sources` currently indexed and available from the Juicer. Sources are newspapers, broadcast TV channels and other sources.

Available parameters:

* `name`: keyword to search for. It searches in name of the source.

### Example request

Get all sources:

```
http://juicer.api.bbci.co.uk/sources?api_key={api_key}
```

Get all sources by name:

```
http://juicer.api.bbci.co.uk/sources?name=sun&api_key={api_key}
```

## Juicer Postman Collection

If you install the free [Postman REST Client](https://www.getpostman.com) you can import the Juicer 2 API into using this URL:

**https://www.getpostman.com/collections/cebe998a209d9862135b**

This allows you to easily try out the API and explore how it works without writing any code.

You will need to configure an "Environment" within Postman to be able to make calls, add `api_key` as a key and your Juicer API key as the value, this will replace {{api_key}} in the requests and the URL variables to your key.
