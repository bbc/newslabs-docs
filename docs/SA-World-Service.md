# World Service South Africa Development Studio 

<p class="lead">
We are inviting news organisations from around South Africa to generate new products and technologies that better distribute BBC audio content to an African audience. A pilot service of the best of these will be built and tested.  
</p>

**[See the #newsHACK site for more information](http://newshack.co.uk/connected-studio-world-service-africa-capetown/)**

**[See also the event brief here](http://downloads.bbc.co.uk/connectedstudio/connected_studio_world_service_africa_cape_town_brief.pdf).**

## [<i class="fa fa-youtube"></i> Explainer Videos](Videos.html)

We've put together some [explainer videos](Videos.html) for our APIs which give a quick overview of the different services and API endpoints available.

## API Documentation

### API Key

To use some of the BBC APIs you will need an API Key, which we have created for this event:

>    `3O320TNQSzygKXF8frRiNBQnAANSyUl7`

You should replace the text `{{apikey}}` in the examples with this key.

### [Audio Sources](Audio.html)

The BBC, and in particular the World Service, has a wide range of sources of Audio content.  For this event we are providing direct access to some of these sources and demonstration data for some others.

### [Juicer API](Juicer.html)

*Please note that content from the Juicer is suitable for use only for Research and Development purposes.*

The Juicer is tool for automatic entity extraction and artchiving from BBC News Labs.

You can use it fetch the latest news as well running queries for news coverage from the BBC and other news organisations.

[Check out the documentation for the Juicer API](Juicer.html)

### [Need geospatial or semantic multi-hop queries?](Triplestore.html)

[Check out the documentation for the Juicer Triplestore API](Triplestore.html)

### [Locator API](Locator.html)

The Locator service is a HTTP API that allows you to discover and ask geospatial questions about places and other entities such as postcodes, news regions, councils etc.

[Check out the documentation for the Locator API](Locator.html)

### [Content Store API](CANDY.html)

The BBC Content Store API (aka CANDY) provides an interface to BBC News content with structured metadata.

CANDY stands for "CPS and Dynamic", it integrates the Content Production System (CPS) with the Dynamic Semantic Publishing system (DSP).

The Content Store API is a production platform, used internally by the BBC on the BBC website and in BBC mobile apps.

In addition to English, the Content Store includes articles written in several languages.

[Check out the documentation for the Content Store API](CANDY.html)

### [Travel API Documentation](Travel.html)

The Travel service is a HTTP API that allows you to discover real-time travel incidents throughout the UK.  The Travel API can be queried by location, post code district, BBC News region or public transport operator.

### Weather Forecast Data

* #### [How to get forecast data for next 24 hours (in 3 hour intervals)](Weather-3-Hourly-Forecast.html)

* #### [How to get forecast data for next 3 days](Weather-3-Day-Forecast.html)

### Food for thought: other APIs

We also recommend you have a look at what is available elsewhere in terms of content stores and services. Here are some examples that you may find useful: 

* [Twitter API](https://dev.twitter.com/)
* [Facebook Developers portal](https://developers.facebook.com/)
* [Nexmo API](https://docs.nexmo.com/) - voice calls and SMS with local numbers; [South Africa features/restrictions info](https://help.nexmo.com/hc/en-us/articles/204017063-South-Africa-Direct-route-)
* [Twilio API](https://www.twilio.com/docs/api) - alternative platform for voice calls + SMS
* [Ushahidi Crowdmap](http://www.ushahidi.com/product/crowdmap/) - crowd source info on maps
* [Ushahidi CrisisNET](http://api.crisis.net/) - a firehose for worldwide crisis data
* [Open Data for South Africa portal](http://southafrica.opendataforafrica.org/data#menu=source)
* Code for South Africa - [open data portal](https://data.code4sa.org/) and [tools for Data Journos](http://code4sa.org/journos/)
* [City of Cape Town data portal](https://web1.capetown.gov.za/web1/opendataportal/)
* [Data and pattern ideas with Streamtools](https://gist.github.com/jacqui/7a133fa560bebac01de9) - talk to [Jacqui](http://twitter.com/jacqui) to get setup or help with [streamtools](http://nytlabs.github.com/streamtools)
