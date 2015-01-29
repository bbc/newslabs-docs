# BBC Connected Studio: World Service - Nairobi

The following information is intended for attendees of the [BBC Connected Studio: World Service](http://www.bbc.co.uk/corporate2/connectedstudio/events) event in Nairobi.

## BBC Content APIs

> **Please note:** You will need an API key to be able to make calls to these APIs.

### [Juicer API Documentation](Juicer.html)

You can check out the documentation for the BBC News Labs [Juicer REST API](Juicer.html) to started quickly with BBC content. It will allow you to search 

#### Regional Sources

In addition to being able to specify the 'NewsWeb' as the 'Product' to get BBC News content, you can also search from other publishers from the Juicer.

For example, you can pass any of these options to the 'product[]' parameter:

* KenyaBroadcastingCorporation
* NigerDeltaStandard
* NationalElectionCommissionSudan
* DailyNewsEgypt
* TechMoran 

##### Example of searching content from multiple other publications

```
http://data.bbc.co.uk/bbcrd-juicer/articles.json?product[]=DailyNewsEgypt&product[]=KenyaBroadcastingCorporation&product[]=TechMoran&product[]=NigerDeltaStandard&product[]=NationalElectionCommissionSudan&content_format[]=TextualFormat&recent_first=yes&apikey={{apikey}}
```


### [BBC Content Store API](CANDY.html) 

The BBC Content Store API (aka CANDY) provides an interface to BBC News content.

CANDY stands for "CPS and Dynamic", it integrates the Content Production System (CPS) with the Dynamic Semantic Publishing system (DSP).

## BBC Africa on Social Media

* Facebook, "BBC Africa News" https://www.facebook.com/bbcafrica
* Twitter https://twitter.com/BBCAfrica  and #BBCGoFigure
* Google+ https://plus.google.com/+BBCAfrica/posts 
* YouTube https://www.youtube.com/user/bbcafrica 
* SoundCloud https://soundcloud.com/bbcafrica 
* WhatsApp (Ebola:) +447702348651 - Send a subscribe request via WhatsApp.

     Alternatively we email numbers of the people/teams who want to access to Trushar who can add them. Requests through WhatsApp may be delayed. Subscribe by searching for the ID **BBC News** or by scanning this QR code:
     <br>
     ![QR Code ](http://qr-official.line.me/sid/L/bbcnews.png)

## BBC Programmes

* African programmes http://www.bbc.co.uk/programmes/p0107lkh 
* Focus On Africa http://www.bbc.co.uk/programmes/p00gbjvb 
* News Summaries http://www.bbc.co.uk/programmes/p002vsn1/episodes/player 
* Podcast - AfricaToday http://www.bbc.co.uk/podcasts/series/africa 

### Learning English Resources

* http://www.bbc.co.uk/learningenglish/ 
* https://www.youtube.com/user/bbclearningenglish 

## Sample BBC News Video & Audio

You can get images by using the BBC Juicer and Content APIs (which return images associated with articles).

As they don't currently expose video or audio content externally, we've provided some sample content for use during the event.

* Sample Video Content http://media.bbcnewslabs.co.uk/videos/
* Sample Short form Video http://media.bbcnewslabs.co.uk/shorts/
* Sample Audio Content http://media.bbcnewslabs.co.uk/audio/

## External Links

* Vumi http://vumi.org
* Mxit http://get.mxit.com
* Wechat http://www.wechat.com
* Wechat builder http://www.wechatbuilder.com
* Mara mesenger https://messenger.mara.com
* RapidPro https://www.rapidpro.io
* FrontlineSMS http://www.frontlinesms.com
* BRCK http://shop.brck.com