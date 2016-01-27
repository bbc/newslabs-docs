#  Content Store API (aka CANDY)

## About the Content Store API

The Content Store API (aka CANDY) provides an interface to BBC News content.

CANDY stands for "CPS and Dynamic", it integrates the Content Production System (CPS) with the Dynamic Semantic Publishing system (DSP).

The Content Store API is a production platform, used internally by the BBC.

## REST API Endpoints

### Headers

At a minimum, "X-Candy-Platform" and "X-Candy-Audience" and "Accept" headers must be set with valid values when making a request.

```
X-Candy-Platform: Desktop
X-Candy-Audience: International
Accept: application/json
```

#### Header Options

* X-Candy-Audience: Domestic or International
* X-Candy-Platform: Desktop or Mobile or EnhancedMobile
* Accept: application/json or application/xml

### Index URL Endpoints

There are various indexes provided to surface BBC News content by region (e.g. "Africa", "Europe") and by topic (e.g. "Business", "Technology").

#### World News
```
http://data.bbc.co.uk/content/asset/news/world?api_key={{apikey}}
```

#### UK
```
http://data.bbc.co.uk/content/asset/news/uk?api_key={{apikey}}
```

####  Africa
```
http://data.bbc.co.uk/content/asset/news/world/africa?api_key={{apikey}}
```

#### Europe
```
http://data.bbc.co.uk/content/asset/news/world/europe?api_key={{apikey}}
```

#### Asia
```
http://data.bbc.co.uk/content/asset/news/world/asia?api_key={{apikey}}
```

#### Australia
```
http://data.bbc.co.uk/content/asset/news/world/australia?api_key={{apikey}}
```

#### Latin America
```
http://data.bbc.co.uk/content/asset/news/world/latin_america?api_key={{apikey}}
```

#### Middle East
```
http://data.bbc.co.uk/content/asset/news/world/middle_east?api_key={{apikey}}
```

#### US and Canada
```
http://data.bbc.co.uk/content/asset/news/world/us_and_canada?api_key={{apikey}}
```

#### Technology News
```
http://data.bbc.co.uk/content/asset/news/technology?api_key={{apikey}}
```

#### Business News
```
http://data.bbc.co.uk/content/asset/news/business?api_key={{apikey}}
```

#### Sport: Football
```
http://data.bbc.co.uk/content/asset/sport/football?api_key={{apikey}}
```

### Article URL Endpoint

To get the full text of an article you can use it's "assetUri" to determine how to request an article in full:

```
http://data.bbc.co.uk/content/asset/news/world-middle-east-30945324?api_key={{apikey}}
```

#### Content in other languages

The Content Store also includes content in languages other than English, for example:

````
http://data.bbc.co.uk/content/asset/hausa/news/2015/01/150130_au_boko_haram?api_key={{apikey}}
````

## Example Responses

Some examples of what the responses from the Content Store API look like.

* [Example Index JSON Response](CANDY/index-json-example.html)
* [Example Article JSON Response](CANDY/article-json-example.html)
