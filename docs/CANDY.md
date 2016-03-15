#  Content Store API (aka CANDY)

## About the Content Store API

The Content Store API (aka CANDY) provides an interface to BBC News content.

CANDY stands for "CPS and Dynamic", it integrates the Content Production System (CPS) with the Dynamic Semantic Publishing system (DSP).

The Content Store API is a production platform, used internally by the BBC.

## API key

You need to provide a valid API key as a query parameter on every request, i.e.

```
http://content-api-a127.api.bbci.co.uk/asset/news/front_page?api_key={{api_key}}
```

## Headers

At a minimum, "X-Candy-Platform" and "X-Candy-Audience" and "Accept" headers must be set with valid values when making a request.

```
X-Candy-Platform: Desktop
X-Candy-Audience: International
Accept: application/json
```

### Header Options

* X-Candy-Audience: Domestic or International
* X-Candy-Platform: Desktop or Mobile
* Accept: application/json or application/xml

## REST API Endpoints

### /asset

The most common way to retrieve an asset from the Content API is to use its
relative URL.

The endpoint URL takes the form:

```
http://content-api-a127.api.bbci.co.uk/asset + [relative url]
```

Where the relative url is either `front_page` or the same suffix used in the
public-facing News website.

So for example:

```
http://content-api-a127.api.bbci.co.uk/asset/news/front_page
http://content-api-a127.api.bbci.co.uk/asset/news/technology
http://content-api-a127.api.bbci.co.uk/asset/news/uk-scotland-scotland-business-16166566
```

Content in other languages can be accessed in a similar way:

```
http://content-api-a127.api.bbci.co.uk/asset/mundo/front_page
http://content-api-a127.api.bbci.co.uk/asset/mundo/temas/america_latina
http://content-api-a127.api.bbci.co.uk/asset/mundo/especial/vert_fut/2016/03/160307_vert_beneficios_de_decir_groserias_yv
```

The full list of available languages can be found [here](http://www.bbc.co.uk/ws/languages).


### /recent-assets

The Recent Assets endpoint provides a list of the most recent assets to be
published in a given section. The assets are ordered by their first published
date with the most recent first.

The endpoint URL takes the form:

```
http://content-api-a127.api.bbci.co.uk/recent-assets/<CPS_SECTION_PATH>
```

So for example:

```
http://content-api-a127.api.bbci.co.uk/recent-assets/news/scotland/glasgow_and_west
```


## Example Responses

Some examples of what the responses from the Content Store API look like.

* [Example Index JSON Response](CANDY/index-json-example.html)
* [Example Article JSON Response](CANDY/article-json-example.html)
