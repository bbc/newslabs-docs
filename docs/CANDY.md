#  BBC Content Store API

## About the Content Store API

The BBC Content Store API (aka CANDY) provides an interface to BBC News content.

CANDY stands for "CPS and Dynamic", it integrates the Content Production System (CPS) with the Dynamic Semantic Publishing system (DSP).

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

### URL Endpoints

You can fetch content from the content API by using an index endpoint, such as one of the below:

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
http://data.bbc.co.uk/content/asset/news/world/africa?api_key={{apikey}}
```

#### Asia
```
http://data.bbc.co.uk/content/asset/news/world/asia?api_key={{apikey}}
```

#### Australia
```
http://data.bbc.co.uk/content/asset/news/world/asia?api_key={{apikey}}
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


