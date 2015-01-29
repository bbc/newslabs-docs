#  Juicer API Documentation

## About the Juicer

The BBC Labs News Juicer is the software responsible for fetching content from the web – articles, videos and images from the BBC, other news sites, Twitter, etc. – parsing content and tagging it with people, organisations and places that correspond to DBpedia entries.

The public Juicer API allows you to specify start and end dates for articles, select which sources or concepts you wish to search for and to free text search in real time, as articles, tweets and other content is ingested.

[Read more about the Juicer](http://www.bbc.co.uk/partnersandsuppliers/connectedstudio/newslabs/projects/juicer.html)

## Juicer Client Libraries

* There is a Juicer client library for node.js called [newsQuery](https://www.npmjs.com/package/newsquery)
* There is also a [Juicer client GEM for Ruby](https://rubygems.org/gems/juicer-client)

If you are not using Ruby or Node.JS (or just want to use the REST API directly) see the documentation for REST API endpoints below.

## REST API Endpoints

### 1. Get Articles

#### URL

```
http://data.bbc.co.uk/bbcrd-juicer/articles.json
```

#### Options

You can filter and sort the articles returned from the `articles` endpoint. Parameters can be provided in the query string.

Available parameters:

* `text`: keywords to search for. Searches in title, description and body of the article.
* `product[]`: scopes the results to certain products. Multiple products can be specified by adding multiple `product[]` keys and values. Just specify 'NewsWeb' to return only BBC News articles.
* `content_format[]`: scopes the results to certain formats. Multiple formats can be specified by adding multiple `content_format[]` keys and values.
* `section[]`: scopes the results to certain sections. Multiple sections can be specified by adding multiple `section[]` keys and values.
* `site[]`: scopes the results to certain sites. Multiple sites can be specified by adding multiple `site[]` keys and values.
* `published_after`: fetch articles published after `published_after`. The date format is `yyyy-mm-yy`.
* `published_before`: fetch articles published before `published_before`. The date format is `yyyy-mm-yy`.
* `recent_first`: Specify 'yes' to sort results by date (with most recent first) instead of by relevance to keywords.

All parameters are optional. If parameters are omitted, the endpoint will just return the latest articles.

#### Example Request

```
http://data.bbc.co.uk/bbcrd-juicer/articles.json?text=London&product[]=NewsWeb&content_format[]=TextualFormat&recent_first=yes&apikey={{apikey}}
```

#### Complex Query Example

The Juicer supports doing complex queries across multiple sources. For example, the following query uses the search phrase `kenya || nairobi AND (government || president || "Uhuru Kenyatta")` which returns articles only from the listed products that match that specific query.

```
http://data.bbc.co.uk/bbcrd-juicer/articles.json?&text=kenya+%7C%7C+nairobi+AND+%28government+%7C%7C+president+%7C%7C+%22Uhuru+Kenyatta%22%29&product[]=DailyNewsEgypt&product[]=KenyaBroadcastingCorporation&product[]=TechMoran&product[]=NigerDeltaStandard&product[]=NationalElectionCommissionSudan&content_format[]=TextualFormat&recent_first=yes&apikey={{apikey}}
```

### 2. Get Article

You can get the full text of a specific article by using it's `id` (this property is sometimes called the `cps_id`).

#### URL

```
http://data.bbc.co.uk/bbcrd-juicer/articles/{{article-id}}.json
```

#### Example Request

```
http://data.bbc.co.uk/bbcrd-juicer/articles/news_web_5da5811f84a8c718689bbb831f0098bc4c5e4a1c.json?apikey={{apikey}}
```

### 3. Get Products

Get the a list of `products` currently indexed and avalible from the Juicer.

"Products" are newspapers, broadcast TV channels and other sources.

To return only BBC News articles, specify `product[]=NewsWeb` when calling `articles.json`.

#### URL

```
http://data.bbc.co.uk/bbcrd-juicer/products.json
```

#### Example Request

```
http://data.bbc.co.uk/bbcrd-juicer/products.json?apikey={{apikey}}
```