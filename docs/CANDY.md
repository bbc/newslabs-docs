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

#### Technology News
```
http://data.bbc.co.uk/content/asset/news/world/technology?api_key={{apikey}}
```

#### Business News
```
http://data.bbc.co.uk/content/asset/news/world/business?api_key={{apikey}}
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


### Example Index Request JSON Response

```
{
  "results" : [ {
    "title" : "World",
    "type" : "IDX",
    "lastUpdated" : "2015-01-23T13:05:57+00:00",
    "firstCreated" : "2010-03-09T09:52:41+00:00",
    "groups" : [ {
      "type" : "container-top-stories",
      "title" : "Top Stories",
      "items" : [ {
        "assetId" : "30945324",
        "assetUri" : "/news/world-middle-east-30945324",
        "firstCreated" : "2015-01-22T23:20:38+00:00",
        "hasShortForm" : true,
        "headline" : "Saudi Arabia's King Abdullah dies",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:55:47+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80033566" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80033000/jpg/_80033566_80028924.jpg",
                "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80462971" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462971_80028924.jpg",
                "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : true
        },
        "prominence" : "standard",
        "relatedGroups" : [ {
          "type" : "index",
          "items" : [ {
            "assetId" : "30944812",
            "assetUri" : "/news/world-middle-east-30944812",
            "firstCreated" : "2015-01-23T01:12:53+00:00",
            "headline" : "What happens next in Saudi Arabia?",
            "language" : "en-gb",
            "lastUpdated" : "2015-01-23T01:12:53+00:00",
            "mediaType" : "Video",
            "overtypedHeadline" : "What happens next?",
            "section" : {
              "name" : "Middle East",
              "id" : "99125",
              "uri" : "/news/world/middle_east",
              "urlIdentifier" : "/news/world/middle_east"
            },
            "summary" : "The BBC's Frank Gardner says the priority for Saudis following the death of King Abdullah will be to maintain stability.",
            "type" : "MAP"
          }, {
            "assetId" : "10214554",
            "assetUri" : "/news/world-middle-east-10214554",
            "firstCreated" : "2015-01-22T23:32:29+00:00",
            "headline" : "Obituary: King Abdullah",
            "language" : "en-gb",
            "lastUpdated" : "2015-01-23T07:29:23+00:00",
            "section" : {
              "name" : "Middle East",
              "id" : "99125",
              "uri" : "/news/world/middle_east",
              "urlIdentifier" : "/news/world/middle_east"
            },
            "summary" : "A monarch who pursued a gentle process of reform against strong opposition from religious conservatives.",
            "type" : "STY"
          }, {
            "assetId" : "30945925",
            "assetUri" : "/news/world-middle-east-30945925",
            "firstCreated" : "2015-01-23T04:20:54+00:00",
            "headline" : "Profile: King Salman of Saudi Arabia",
            "language" : "en-gb",
            "lastUpdated" : "2015-01-23T11:59:20+00:00",
            "overtypedHeadline" : "Who takes over now?",
            "section" : {
              "name" : "Middle East",
              "id" : "99125",
              "uri" : "/news/world/middle_east",
              "urlIdentifier" : "/news/world/middle_east"
            },
            "summary" : "A profile of King Salman bin Abdulaziz al-Saud, who has acceded to the Saudi throne on the death of his half-brother, King Abdullah.",
            "type" : "STY"
          }, {
            "assetId" : "29792691",
            "assetUri" : "/news/world-middle-east-29792691",
            "firstCreated" : "2014-11-18T01:41:11+00:00",
            "headline" : "Saudi Arabia: Why succession could become a princely tussle",
            "language" : "en-gb",
            "lastUpdated" : "2015-01-23T07:31:11+00:00",
            "overtypedHeadline" : "Analysis: Succession tussle",
            "section" : {
              "name" : "Middle East",
              "id" : "99125",
              "uri" : "/news/world/middle_east",
              "urlIdentifier" : "/news/world/middle_east"
            },
            "summary" : "The need for smooth and orderly transfers of power in Saudi Arabia has become more crucial than ever - but who will inherit the kingdom in the coming years is a thorny issue yet to be resolved, says Gerald Butt.",
            "type" : "STY"
          } ]
        } ],
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "summary" : "Saudi King Abdullah bin Abdulaziz has died in hospital, royal officials announce, weeks after being admitted with a lung infection.",
        "type" : "STY"
      }, {
        "assetId" : "30949527",
        "assetUri" : "/news/world-europe-30949527",
        "firstCreated" : "2015-01-23T09:31:04+00:00",
        "hasShortForm" : true,
        "headline" : "Ukraine rebels 'reject truce talks'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T12:02:53+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80468628" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468628_donetsktroopsnewreut.jpg",
                "altText" : "Rebel tank, 22 Jan 14",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80468630" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468630_donetsktroopsnewreut.jpg",
                "altText" : "Rebel tank, 22 Jan 14",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : true
        },
        "relatedGroups" : [ {
          "type" : "index",
          "items" : [ {
            "assetId" : "30901753",
            "assetUri" : "/news/world-europe-30901753",
            "firstCreated" : "2015-01-20T17:23:47+00:00",
            "headline" : "Is Russia pushing war in Ukraine or peace?",
            "language" : "en-gb",
            "lastUpdated" : "2015-01-20T17:23:47+00:00",
            "overtypedHeadline" : "Is Russia stoking war?",
            "section" : {
              "name" : "Europe",
              "id" : "99123",
              "uri" : "/news/world/europe",
              "urlIdentifier" : "/news/world/europe"
            },
            "summary" : "Sarah Rainsford asks if Russia is stoking conflict in eastern Ukraine or if it is seeking an end to the violence.",
            "type" : "STY"
          }, {
            "assetId" : "27308526",
            "assetUri" : "/news/world-europe-27308526",
            "firstCreated" : "2014-05-09T00:14:52+00:00",
            "headline" : "Ukraine in maps: How the crisis spread",
            "language" : "en-gb",
            "lastUpdated" : "2014-11-04T15:25:42+00:00",
            "overtypedHeadline" : "Crisis mapped",
            "section" : {
              "name" : "Europe",
              "id" : "99123",
              "uri" : "/news/world/europe",
              "urlIdentifier" : "/news/world/europe"
            },
            "summary" : "Find out how the crisis in Ukraine has spread since November 2013, from Kiev and cities in the west, to Crimea and the eastern regions and Odessa.",
            "type" : "STY"
          } ]
        } ],
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "The main pro-Russian rebel leader in eastern Ukraine says his troops are on the offensive and he does not want truce talks.",
        "type" : "STY"
      }, {
        "assetId" : "30943377",
        "assetUri" : "/news/health-30943377",
        "byline" : {
          "name" : "By Smitha Mundasad",
          "persons" : [ {
            "name" : "Smitha Mundasad",
            "function" : "Health reporter"
          } ],
          "title" : "Health reporter, BBC News "
        },
        "firstCreated" : "2015-01-23T06:28:57+00:00",
        "hasShortForm" : true,
        "headline" : "Ebola vaccine 'shipped to Liberia'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T09:01:25+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80461434" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461434_ebola_vaccine_trial-spl.jpg",
                "caption" : "The Ebola vaccine has been tested on 200 volunteers so far",
                "altText" : "A vaccine trial in the US",
                "copyrightHolder" : "NATIONAL INSTITUTES OF HEALTH/SPL",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80461433" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461433_ebola_vaccine_trial-spl.jpg",
                "caption" : "The Ebola vaccine has been tested on 200 volunteers so far",
                "altText" : "A vaccine trial in the US",
                "copyrightHolder" : "NATIONAL INSTITUTES OF HEALTH/SPL",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Health",
          "id" : "99108",
          "uri" : "/news/health",
          "urlIdentifier" : "/news/health"
        },
        "summary" : "The first batch of a vaccine against Ebola is on its way to Liberia and trials are expected to start soon.",
        "type" : "STY"
      }, {
        "assetId" : "30928835",
        "assetUri" : "/news/world-asia-30928835",
        "firstCreated" : "2015-01-23T01:25:23+00:00",
        "hasShortForm" : true,
        "headline" : "Thai ex-PM banned from politics",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T09:54:06+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80440346" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80440000/jpg/_80440346_025525409-1.jpg",
                "caption" : "Former PM Ms Yingluck was ousted in May 2014 days before the army seized control",
                "altText" : "Ousted Thai prime minister Yingluck Shinawatra looks on as she faces impeachment proceedings by the military-stacked National Legislative Assembly (NLA) at the parliament in Bangkok on 22 January 2015",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80440349" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80440000/jpg/_80440349_025525409-1.jpg",
                "caption" : "Former PM Ms Yingluck was ousted in May 2014 days before the army seized control",
                "altText" : "Ousted Thai prime minister Yingluck Shinawatra looks on as she faces impeachment proceedings by the military-stacked National Legislative Assembly (NLA) at the parliament in Bangkok on 22 January 2015",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Asia",
          "id" : "101360",
          "uri" : "/news/world/asia",
          "urlIdentifier" : "/news/world/asia"
        },
        "summary" : "Thai authorities ban former PM Yingluck Shinawatra from office for five years and launch criminal charges that could see her jailed.",
        "type" : "STY"
      }, {
        "assetId" : "30949917",
        "assetUri" : "/news/world-europe-30949917",
        "firstCreated" : "2015-01-23T11:20:59+00:00",
        "hasShortForm" : true,
        "headline" : "Paris attacker Coulibaly is buried",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:20:59+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80470421" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80470000/jpg/_80470421_80468859.jpg",
                "caption" : "Coulibaly is believed to have been involved in drug crime and knew one of the Kouachis",
                "altText" : "Amedy Coulibaly",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80470423" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80470000/jpg/_80470423_80468859.jpg",
                "caption" : "Coulibaly is believed to have been involved in drug crime and knew one of the Kouachis",
                "altText" : "Amedy Coulibaly",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "An Islamist militant shot dead by French commandos after he attacked a Jewish supermarket two weeks ago is buried near Paris.",
        "type" : "STY"
      }, {
        "assetId" : "30936940",
        "assetUri" : "/news/world-middle-east-30936940",
        "firstCreated" : "2015-01-22T17:15:50+00:00",
        "hasShortForm" : true,
        "headline" : "Yemen's embattled president quits",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T03:54:22+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80462125" : {
                "height" : 432,
                "width" : 768,
                "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462125_80462124.jpg",
                "altText" : "Shia Houthi rebels in Sanaa, 22 January",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80462127" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462127_80462124.jpg",
                "altText" : "Shia Houthi rebels in Sanaa, 22 January",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "summary" : "The president of Yemen resigns in protest at the takeover of the capital Sanaa by Shia Houthi rebels, creating a dangerous political vacuum.",
        "type" : "STY"
      }, {
        "assetId" : "30949074",
        "assetUri" : "/news/world-europe-30949074",
        "firstCreated" : "2015-01-23T12:27:28+00:00",
        "hasShortForm" : true,
        "headline" : "Call for Greece to stay with Europe",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T12:27:28+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80471356" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80471000/jpg/_80471356_syr.jpg",
                "altText" : "Supporters of Syriza hold a banner saying \"Change Greece, Change Europe\" at a pre-election rally in central Athens on 22 January 2015",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80471358" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80471000/jpg/_80471358_syr.jpg",
                "altText" : "Supporters of Syriza hold a banner saying \"Change Greece, Change Europe\" at a pre-election rally in central Athens on 22 January 2015",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "German Chancellor Angela Merkel says she wants Greece to \"remain part of our story\" ahead of elections that could throw the country's eurozone future into doubt.",
        "type" : "STY"
      }, {
        "assetId" : "30945562",
        "assetUri" : "/news/business-30945562",
        "firstCreated" : "2015-01-23T02:11:49+00:00",
        "hasShortForm" : true,
        "headline" : "Asian shares up on oil and ECB moves",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T09:53:57+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80463430" : {
                "height" : 1152,
                "width" : 2048,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463430_japan_shares.jpg",
                "altText" : "Japanese shares",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80463432" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463432_japan_shares.jpg",
                "altText" : "Japanese shares",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "Asian shares rose on Friday encouraged by a rise in oil prices following news of the death of Saudi Arabia's King Abdullah.",
        "type" : "STY"
      }, {
        "assetId" : "30950628",
        "assetUri" : "/news/world-africa-30950628",
        "firstCreated" : "2015-01-23T11:34:29+00:00",
        "hasShortForm" : true,
        "headline" : "UN 'not needed to defeat Boko Haram'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T12:10:59+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80470641" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80470000/jpg/_80470641_80470640.jpg",
                "altText" : "Nigeria soldiers in Borno state - June 2013",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80470643" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80470000/jpg/_80470643_80470640.jpg",
                "altText" : "Nigeria soldiers in Borno state - June 2013",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Africa",
          "id" : "99121",
          "uri" : "/news/world/africa",
          "urlIdentifier" : "/news/world/africa"
        },
        "summary" : "Nigeria does not need the help of UN or African Union troops to take on Boko Haram, the country's national security adviser tells the BBC.",
        "type" : "STY"
      }, {
        "assetId" : "30946059",
        "assetUri" : "/news/world-asia-30946059",
        "firstCreated" : "2015-01-23T12:52:20+00:00",
        "hasShortForm" : true,
        "headline" : "Philippines 'hid homeless from Pope'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T12:52:20+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80474100" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80474000/jpg/_80474100_025438977-1.jpg",
                "caption" : "Pope Francis met with street children during his recent visit to the Philippines",
                "altText" : "Pope Francis is pictured with youths at ANAK-Tnk foundation during his pastoral visit in Manila 16 January 2015",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80474099" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80474000/jpg/_80474099_025438977-1.jpg",
                "caption" : "Pope Francis met with street children during his recent visit to the Philippines",
                "altText" : "Pope Francis is pictured with youths at ANAK-Tnk foundation during his pastoral visit in Manila 16 January 2015",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Asia",
          "id" : "101360",
          "uri" : "/news/world/asia",
          "urlIdentifier" : "/news/world/asia"
        },
        "summary" : "The government in the Philippines is facing calls for an inquiry after it temporarily relocated homeless people during Pope Francis' visit.",
        "type" : "STY"
      }, {
        "assetId" : "30947880",
        "assetUri" : "/news/world-africa-30947880",
        "firstCreated" : "2015-01-23T10:23:02+00:00",
        "hasShortForm" : true,
        "headline" : "Congo senate amends census law",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T10:54:19+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80440138" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80440000/jpg/_80440138_80440137.jpg",
                "altText" : "A man walks past a tyre set alight during a nationwide protest as opposition parties tried to block a change in the law that may delay elections - Goma, DR Congo, 19 January 2015",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80440140" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80440000/jpg/_80440140_80440137.jpg",
                "altText" : "A man walks past a tyre set alight during a nationwide protest as opposition parties tried to block a change in the law that may delay elections - Goma, DR Congo, 19 January 2015",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Africa",
          "id" : "99121",
          "uri" : "/news/world/africa",
          "urlIdentifier" : "/news/world/africa"
        },
        "summary" : "The Democratic Republic of Congo senate amends a controversial census bill following four days of violent nationwide protests.",
        "type" : "STY"
      } ],
      "semanticGroupName" : "Top Stories"
    }, {
      "type" : "single-section-digest",
      "title" : "News event promotion",
      "strapline" : {
        "name" : "Davos 2015",
        "links" : {
          "enhancedmobile" : "http://www.bbc.co.uk/news/business-30776755",
          "desktop" : "http://www.bbc.co.uk/news/business-30776755",
          "highweb" : "http://www.bbc.co.uk/news/business-30776755",
          "mobile" : "http://www.bbc.co.uk/news/business-30776755"
        },
        "type" : "LINK"
      },
      "items" : [ {
        "assetId" : "30907630",
        "assetUri" : "/news/business-30907630",
        "byline" : {
          "name" : "By Joe Miller",
          "persons" : [ {
            "name" : "Joe Miller",
            "function" : "BBC News"
          } ],
          "title" : "BBC News, Davos"
        },
        "firstCreated" : "2015-01-20T22:48:25+00:00",
        "hasShortForm" : true,
        "headline" : "Ebola scientist warns business elite",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-21T10:55:51+00:00",
        "media" : {
          "images" : {
            "index" : {
              "77675945" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/77675000/jpg/_77675945_77673083.jpg",
                "altText" : "Guinean health workers wearing protective suits at a hospital in Conakry - 14 September 2014",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80406513" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80406000/jpg/_80406513_77673083.jpg",
                "altText" : "Guinean health workers wearing protective suits at a hospital in Conakry - 14 September 2014",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "Leading Ebola scientist Prof Peter Piot warns the World Economic Forum that developed nations are \"vulnerable\" to epidemics and must invest more in research.",
        "type" : "STY"
      }, {
        "assetId" : "30907627",
        "assetUri" : "/news/business-30907627",
        "byline" : {
          "name" : "By Emily Young",
          "persons" : [ {
            "name" : "Emily Young",
            "function" : "BBC News"
          } ],
          "title" : "BBC News, in Davos"
        },
        "firstCreated" : "2015-01-20T20:13:57+00:00",
        "hasShortForm" : true,
        "headline" : "Bosses 'less optimistic' on economy",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-21T11:14:10+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80404227" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80404000/jpg/_80404227_80404226.jpg",
                "altText" : "Davos logo",
                "copyrightHolder" : "European Photopress Agency",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80414169" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80414000/jpg/_80414169_80404226.jpg",
                "altText" : "Davos logo",
                "copyrightHolder" : "European Photopress Agency",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "Chief executives are less optimistic about the economy this year than last, a survey unveiled at the World Economic Forum by PwC suggests.",
        "type" : "STY"
      }, {
        "assetId" : "30832627",
        "assetUri" : "/news/business-30832627",
        "byline" : {
          "name" : "By Joe Miller",
          "persons" : [ {
            "name" : "Joe Miller",
            "function" : "Technology Reporter"
          } ],
          "title" : "Business reporter"
        },
        "firstCreated" : "2015-01-15T12:46:34+00:00",
        "hasShortForm" : true,
        "headline" : "Global conflicts top Davos agenda",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-15T12:46:34+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80287625" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80287000/jpg/_80287625_885afd59-a955-4d9c-bcbd-0cb9e012bf5c.jpg",
                "altText" : "Broken Glass",
                "copyrightHolder" : "Thinkstock",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80287627" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80287000/jpg/_80287627_885afd59-a955-4d9c-bcbd-0cb9e012bf5c.jpg",
                "altText" : "Broken Glass",
                "copyrightHolder" : "Thinkstock",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "The risks posed by global conflicts will be at the top of the agenda when politicians and industry leaders meet in Switzerland next week.",
        "type" : "STY"
      }, {
        "assetId" : "30875633",
        "assetUri" : "/news/business-30875633",
        "firstCreated" : "2015-01-19T04:49:03+00:00",
        "hasShortForm" : true,
        "headline" : "Richest 1% to own more than the rest",
        "includeComments" : true,
        "language" : "en-gb",
        "lastUpdated" : "2015-01-19T12:52:59+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80354724" : {
                "height" : 1152,
                "width" : 2048,
                "href" : "http://news.bbcimg.co.uk/media/images/80354000/jpg/_80354724_wealthy_1.jpg",
                "altText" : "Homeless people beg in a street next to a luxury store in Paris",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80354726" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80354000/jpg/_80354726_wealthy_1.jpg",
                "altText" : "Homeless people beg in a street next to a luxury store in Paris",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "Wealth amassed by the richest 1% will soon overtake the amount owned by everyone else in the world, says charity group Oxfam.",
        "type" : "STY"
      }, {
        "assetId" : "30802166",
        "assetUri" : "/news/business-30802166",
        "firstCreated" : "2015-01-13T21:05:21+00:00",
        "hasShortForm" : true,
        "headline" : "World Bank cuts global growth forecast",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-13T22:10:22+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80247563" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80247000/jpg/_80247563_7b5671cd-c9bf-463c-a0cf-0c7125acc627.jpg",
                "caption" : "Cheaper oil creates economic \"winners and losers\" says the World Bank",
                "altText" : "oil refinery",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80247565" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80247000/jpg/_80247565_7b5671cd-c9bf-463c-a0cf-0c7125acc627.jpg",
                "caption" : "Cheaper oil creates economic \"winners and losers\" says the World Bank",
                "altText" : "oil refinery",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Business",
          "id" : "99104",
          "uri" : "/news/business",
          "urlIdentifier" : "/news/business"
        },
        "summary" : "The World Bank has cut its global growth forecast, warning the US alone cannot drive an economic recovery.",
        "type" : "STY"
      } ],
      "semanticGroupName" : "News event promotion"
    }, {
      "type" : "av-stories-now",
      "title" : "Watch/Listen",
      "strapline" : {
        "name" : "Watch/Listen"
      },
      "items" : [ {
        "assetId" : "30946806",
        "assetUri" : "/news/world-africa-30946806",
        "firstCreated" : "2015-01-23T09:39:08+00:00",
        "headline" : "Foreign shops looted in Soweto",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T09:39:08+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80467012" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80467000/jpg/_80467012_80467010.jpg",
                "altText" : "Police stand guard",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80467014" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80467000/jpg/_80467014_80467010.jpg",
                "altText" : "Police stand guard",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80467257" : {
                "duration" : "PT1M49S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80467000/jpg/_80467011_80467010.jpg",
                  "altText" : "Police stand guard",
                  "copyrightHolder" : "BBC",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-africa-30946806A/playlist.sxml",
                "externalId" : "p02hh6h1",
                "caption" : "Milton Nkosi reports from Soweto where a crowd had gathered outside a foreign shop",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Africa",
          "id" : "99121",
          "uri" : "/news/world/africa",
          "urlIdentifier" : "/news/world/africa"
        },
        "summary" : "Milton Nkosi reports from Soweto where crowds have gathered outside foreign owned shops after a teenager was shot dead during an attempted robbery.",
        "type" : "MAP"
      }, {
        "assetId" : "30944814",
        "assetUri" : "/news/world-africa-30944814",
        "firstCreated" : "2015-01-23T06:44:54+00:00",
        "headline" : "Is this the world's oldest pupil?",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T06:44:54+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80463990" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463990_gogo2.jpg",
                "altText" : "90-year-old Kenyan student Priscilla Sitienei , in school uniform, holding a pencil",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80464010" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464010_gogo2.jpg",
                "altText" : "90-year-old Kenyan student Priscilla Sitienei in school uniform, holding a pencil",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80464540" : {
                "duration" : "PT2M34S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463989_gogo2.jpg",
                  "altText" : "90-year-old Kenyan student Priscilla Sitienei , in school uniform, holding a pencil",
                  "copyrightHolder" : "BBC",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-africa-30944814A/playlist.sxml",
                "externalId" : "p02hgz2j",
                "caption" : "Priscilla Sitienei: \"I want to inspire children\"",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Africa",
          "id" : "99121",
          "uri" : "/news/world/africa",
          "urlIdentifier" : "/news/world/africa"
        },
        "summary" : "Ninety-year-old Kenyan student Priscilla Sitienei says she wants to inspire children, especially girls, to get an education.",
        "type" : "MAP"
      }, {
        "assetId" : "30942485",
        "assetUri" : "/news/science-environment-30942485",
        "firstCreated" : "2015-01-22T21:11:08+00:00",
        "headline" : "Comet shows off its 'goosebumps'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-22T21:11:08+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80460248" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80460000/jpg/_80460248_80460247.jpg",
                "altText" : "Pitted surface of the comet",
                "copyrightHolder" : "ESA",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80461668" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461668_80460247.jpg",
                "altText" : "Pitted surface of the comet",
                "copyrightHolder" : "ESA",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80461718" : {
                "duration" : "PT2M30S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80460000/jpg/_80460248_80460247.jpg",
                  "altText" : "Pitted surface of the comet",
                  "copyrightHolder" : "ESA",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/science-environment-30942485A/playlist.sxml",
                "externalId" : "p02hg13c",
                "caption" : "Scientists working on Europe's Rosetta probe, which is tracking Comet 67P, say they may have found evidence for how such icy objects were formed",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Science & Environment",
          "id" : "99110",
          "uri" : "/news/science_and_environment",
          "urlIdentifier" : "/news/science_and_environment"
        },
        "summary" : "Scientists working on Europe's Rosetta probe, which is tracking Comet 67P, say they may have found evidence for how such icy objects were formed.",
        "type" : "MAP"
      }, {
        "assetId" : "30949365",
        "assetUri" : "/news/world-middle-east-30949365",
        "firstCreated" : "2015-01-23T10:25:16+00:00",
        "headline" : "Archive: Saudi king speaks to BBC",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T10:25:16+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80468906" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468906_80468904.jpg",
                "altText" : "King Abdullah bin Abdulaziz in 2007",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80468908" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468908_80468904.jpg",
                "altText" : "King Abdullah bin Abdulaziz in 2007",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80468901" : {
                "duration" : "PT6M13S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468905_80468904.jpg",
                  "altText" : "King Abdullah bin Abdulaziz in 2007",
                  "copyrightHolder" : "BBC",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30949365A/playlist.sxml",
                "externalId" : "p02hhb2h",
                "caption" : "King Abdullah spoke to the BBC's John Simpson in 2007",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "summary" : "The BBC's John Simpson interviewed Saudi Arabia's King Abdullah bin Abdulaziz in 2007, in the aftermath of the 7/7 London terrorist attacks.",
        "type" : "MAP"
      }, {
        "assetId" : "30946798",
        "assetUri" : "/news/world-europe-30946798",
        "firstCreated" : "2015-01-23T07:58:11+00:00",
        "headline" : "Ukraine troops withdraw from airport",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:58:11+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80464993" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464993_80464990.jpg",
                "altText" : "Ukrainian rebels",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80466986" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466986_80464990.jpg",
                "altText" : "Ukrainian rebels",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80466394" : {
                "duration" : "PT2M3S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464992_80464990.jpg",
                  "altText" : "Ukrainian rebels",
                  "copyrightHolder" : "Reuters",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-europe-30946798A/playlist.sxml",
                "externalId" : "p02hh3xf",
                "caption" : "As Laura Westbrook reports, civilians are caught in the crossfire",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "Ukrainian troops have withdrawn from the main terminal of Donetsk Airport, the scene of bitter fighting in recent weeks.",
        "type" : "MAP"
      }, {
        "assetId" : "30939917",
        "assetUri" : "/news/science-environment-30939917",
        "firstCreated" : "2015-01-23T08:38:50+00:00",
        "headline" : "Jellyfish reveal swimming secrets",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T10:42:13+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80452672" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80452000/jpg/_80452672_80452669.jpg",
                "altText" : "Tagged jellyfish (c) Graeme Hays",
                "copyrightHolder" : "Graeme Hays",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80452674" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80452000/jpg/_80452674_80452669.jpg",
                "altText" : "Tagged jellyfish (c) Graeme Hays",
                "copyrightHolder" : "Graeme Hays",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80469393" : {
                "duration" : "PT50S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80452000/jpg/_80452671_80452669.jpg",
                  "altText" : "Tagged jellyfish (c) Graeme Hays",
                  "copyrightHolder" : "Graeme Hays",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/science-environment-30939917A/playlist.sxml",
                "externalId" : "p02hhc7t",
                "caption" : "The swimming jellyfish were tagged with data loggers fitted to their bodies with cable ties",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Science & Environment",
          "id" : "99110",
          "uri" : "/news/science_and_environment",
          "urlIdentifier" : "/news/science_and_environment"
        },
        "summary" : "Jellyfish tagging study reveals the creatures' ability to swim against the current, researchers say.",
        "type" : "MAP"
      }, {
        "assetId" : "30944815",
        "assetUri" : "/news/world-middle-east-30944815",
        "firstCreated" : "2015-01-23T07:07:03+00:00",
        "headline" : "King Tut's beard raises concerns",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:07:03+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80464756" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464756_80464754.jpg",
                "altText" : "File image of King Tutankhamen's death mask",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80464758" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464758_80464754.jpg",
                "altText" : "File image of King Tutankhamen's death mask",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80464964" : {
                "duration" : "PT2M21S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463880_tut2.jpg",
                  "altText" : "Close up of King Tutankhamen's death mask showing repair to beard",
                  "copyrightHolder" : "Al-Araby Al-Jadeed",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30944815A/playlist.sxml",
                "externalId" : "p02hh0hb",
                "caption" : "The incident has raised concerns about how Egypt's ancient treasures are being treated, reports Orla Guerin from Cairo",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "summary" : "Reports that the burial mask of King Tutankhamen has been damaged and badly repaired are raising concerns about how Egypt's ancient treasures are being treated.",
        "type" : "MAP"
      }, {
        "assetId" : "30944817",
        "assetUri" : "/news/world-asia-30944817",
        "firstCreated" : "2015-01-23T06:33:20+00:00",
        "headline" : "Impeachment for Thai ex-leader",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:34:25+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80464184" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464184_hi025526160.jpg",
                "altText" : "Yingluck Shinawatra greeted by supporters as she arrives for impeachment hearing",
                "copyrightHolder" : "PORNCHAI KITTIWONGSAKUL",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80464186" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464186_hi025526160.jpg",
                "altText" : "Yingluck Shinawatra greeted by supporters as she arrives for impeachment hearing",
                "copyrightHolder" : "PORNCHAI KITTIWONGSAKUL",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80469062" : {
                "duration" : "PT1M33S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468081_80468080.jpg",
                  "altText" : "National Legislative Assembly members vote on impeaching",
                  "copyrightHolder" : "Reuters",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-asia-30944817A/playlist.sxml",
                "externalId" : "p02hhb7p",
                "caption" : "Jonathan Head said the impeachment sent a clear signal from the Thai military",
                "guidance" : "This video contains flash photography",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "section" : {
          "name" : "Asia",
          "id" : "101360",
          "uri" : "/news/world/asia",
          "urlIdentifier" : "/news/world/asia"
        },
        "summary" : "Thailand's attorney general says the country's former prime minister, Yingluck Shinawatra, is to face a criminal corruption charge over her controversial rice subsidy scheme.",
        "type" : "MAP"
      } ],
      "semanticGroupName" : "Watch/Listen"
    }, {
      "type" : "feature-main",
      "title" : "Features",
      "strapline" : {
        "name" : "Features & Analysis"
      },
      "items" : [ {
        "assetId" : "30935874",
        "assetUri" : "/news/world-africa-30935874",
        "byline" : {
          "name" : "By Ed Thomas",
          "persons" : [ {
            "name" : "Ed Thomas",
            "function" : "BBC News, Kenya"
          } ],
          "title" : "BBC News, Ndalat, Kenya"
        },
        "firstCreated" : "2015-01-23T00:41:40+00:00",
        "headline" : "Kenyan grandmother at school with her great-great-grandchildren",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T00:41:40+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80454398" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80454000/jpg/_80454398_photo4_.jpg",
                "altText" : "Priscilla Sitienei",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80460866" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80460000/jpg/_80460866_photo4_.jpg",
                "altText" : "Priscilla Sitienei",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "World's oldest pupil?",
        "overtypedSummary" : "The 90-year-old Kenyan at school with her great great grandchildren",
        "section" : {
          "name" : "Africa",
          "id" : "99121",
          "uri" : "/news/world/africa",
          "urlIdentifier" : "/news/world/africa"
        },
        "summary" : "A 90-year-old Kenyan woman, who goes to class with six of her great-great-grandchildren, is believed to be the oldest primary school pupil in the world, writes the BBC's Ed Thomas.",
        "type" : "STY"
      }, {
        "assetId" : "30924409",
        "assetUri" : "/news/world-europe-30924409",
        "byline" : {
          "name" : "By Hugh Schofield",
          "persons" : [ {
            "name" : "Hugh Schofield",
            "function" : "BBC News, Paris"
          } ],
          "title" : "BBC News, Paris"
        },
        "firstCreated" : "2015-01-23T02:02:16+00:00",
        "headline" : "Can France integrate humiliated suburbs?",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T02:02:16+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80461217" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461217_025319927-1.jpg",
                "altText" : "Flag outside Charlie Hebdo offices (8 Jan)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80461219" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461219_025319927-1.jpg",
                "altText" : "Flag outside Charlie Hebdo offices (8 Jan)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "'Apartheid France'",
        "overtypedSummary" : "Can disaffected suburbs be integrated after Paris attacks?",
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "Members of France's impoverished banlieues were glaringly absent from France's march in support of Charlie victims, writes Hugh Schofield.",
        "type" : "STY"
      }, {
        "assetId" : "30937495",
        "assetUri" : "/news/world-middle-east-30937495",
        "byline" : {
          "name" : "By Frank  Gardner",
          "persons" : [ {
            "name" : "Frank Gardner",
            "function" : "BBC security correspondent"
          } ],
          "title" : "BBC security correspondent"
        },
        "firstCreated" : "2015-01-22T19:22:03+00:00",
        "headline" : "Yemen proves security nightmare for US",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-22T19:22:03+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80459169" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80459000/jpg/_80459169_yemenct2003.jpg",
                "altText" : "Yemen’s Counter-terrorism forces have been trained by US Special Forces for years.",
                "copyrightHolder" : "Frank Gardner",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80459974" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80459000/jpg/_80459974_yemenct2003.jpg",
                "altText" : "Yemen’s Counter-terrorism forces have been trained by US Special Forces for years.",
                "copyrightHolder" : "Frank Gardner",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "Security nightmare",
        "overtypedSummary" : "The conflict in Yemen between Shia rebels and Sunni tribes causes headaches in Washington ",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "summary" : "The chaos in Yemen shows no sign of letting up and a looming showdown between Shia rebels and Sunni tribes will cause headaches in Washington, says the BBC's Frank Gardner.",
        "type" : "STY"
      }, {
        "assetId" : "30941638",
        "assetUri" : "/news/magazine-30941638",
        "byline" : {
          "name" : "By Athar  Ahmad",
          "persons" : [ {
            "name" : "Athar Ahmad",
            "function" : "BBC Asian Network"
          } ],
          "title" : "BBC Asian Network"
        },
        "firstCreated" : "2015-01-23T01:15:59+00:00",
        "headline" : "Captain America dons a turban",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T01:15:59+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80461090" : {
                "height" : 549,
                "width" : 976,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461090_sikh_captain_america.jpg",
                "altText" : "Vishavjit Singh",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80461092" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461092_sikh_captain_america.jpg",
                "altText" : "Vishavjit Singh",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "Captain America's turban",
        "overtypedSummary" : "A superhero Sikh fights stereotypes",
        "section" : {
          "name" : "Magazine",
          "id" : "99189",
          "uri" : "/news/magazine",
          "urlIdentifier" : "/news/magazine"
        },
        "summary" : "A new film chronicles the experience of Vishavjit Singh, who walks the streets of New York dressed as the superhero Captain America.",
        "type" : "STY"
      }, {
        "assetId" : "30922080",
        "assetUri" : "/news/magazine-30922080",
        "firstCreated" : "2015-01-22T22:03:44+00:00",
        "headline" : "FreeSpeechStories: 'A message for the Taliban'",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-22T22:03:44+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80429328" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80429000/jpg/_80429328_talibanphoto.jpg",
                "altText" : "You will be scared now, Taliban",
                "copyrightHolder" : "Tamasha Productions",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80429412" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80429000/jpg/_80429412_talibanphoto.jpg",
                "altText" : "You will be scared now, Taliban",
                "copyrightHolder" : "Tamasha Productions",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80426966" : {
                "duration" : "PT2M16S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80429000/jpg/_80429418_talibanphoto.jpg",
                  "altText" : "You will be scared now, Taliban",
                  "copyrightHolder" : "Tamasha Productions",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/magazine-30922080A/playlist.sxml",
                "externalId" : "p02hcp8t",
                "caption" : "",
                "allowOffSiteEmbedding" : true,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "'You'll be scared'",
        "overtypedSummary" : "Young Pakistani filmmakers use Facebook to confront Taliban",
        "section" : {
          "name" : "Magazine",
          "id" : "99189",
          "uri" : "/news/magazine",
          "urlIdentifier" : "/news/magazine"
        },
        "summary" : "Two young Pakistani filmmakers are using Facebook to confront the extremist group.",
        "type" : "MAP"
      }, {
        "assetId" : "30939543",
        "assetUri" : "/news/world-europe-30939543",
        "byline" : {
          "name" : "By Richard Galpin",
          "persons" : [ {
            "name" : "Richard Galpin",
            "function" : "BBC News, near Utoeya",
            "thumbnail" : "http://news.bbcimg.co.uk/media/images/66450000/jpg/_66450019_66450018.jpg"
          } ],
          "title" : "BBC News Correspondent"
        },
        "firstCreated" : "2015-01-23T01:09:41+00:00",
        "headline" : "Refugee's 'Moscow agent' claims",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T01:09:41+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80452788" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80452000/jpg/_80452788_strasbourg.jpg",
                "caption" : "The French city of Strasbourg, where the abduction and torture allegedly took place",
                "altText" : "Picture of the Strasbourg's cathedral taken on June 29, 2009",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80454584" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80454000/jpg/_80454584_img_0645.jpg",
                "altText" : "Said Emin Ibragimov",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          }
        },
        "options" : {
          "isBreakingNews" : false
        },
        "overtypedHeadline" : "'Nowhere to run'",
        "overtypedSummary" : "Chechen dissident says Moscow agents tortured him",
        "section" : {
          "name" : "Europe",
          "id" : "99123",
          "uri" : "/news/world/europe",
          "urlIdentifier" : "/news/world/europe"
        },
        "summary" : "A Chechen refugee in France says he was tortured by agents he believes were sent by Moscow.",
        "type" : "STY"
      } ],
      "semanticGroupName" : "Features"
    } ],
    "options" : {
      "allowAdvertising" : true
    },
    "language" : "en-gb",
    "id" : "http://www.bbc.co.uk/asset/b5c53243-7126-e059-e040-850a02846523/mobile/domestic",
    "assetUri" : "/news/world",
    "platform" : "mobile",
    "audience" : "domestic",
    "assetId" : "10059378",
    "section" : {
      "name" : "World",
      "id" : "99115",
      "uri" : "/news/world",
      "urlIdentifier" : "/news/world"
    },
    "site" : {
      "name" : "BBC News",
      "code" : "news-v6",
      "urlIdentifier" : "/news",
      "frontPageUri" : "/news/front_page"
    },
    "primaryConceptId" : "http://www.bbc.co.uk/things/9b85dc4b-a14c-4e13-b45b-977d68301562#id",
    "workerCallingCard" : "NOLAPPS571-6003",
    "iStatsCounterName" : "news.world.page"
  } ]
}
```

### Example Article Request JSON Response

```
{
  "results" : [ {
    "title" : "BBC News - Saudi Arabia's King Abdullah bin Abdulaziz dies",
    "summary" : "Saudi King Abdullah bin Abdulaziz has died in hospital, royal officials announce, weeks after being admitted with a lung infection.",
    "type" : "STY",
    "lastUpdated" : "2015-01-23T11:55:47+00:00",
    "firstCreated" : "2015-01-22T23:20:38+00:00",
    "hasShortForm" : true,
    "body" : "<body xmlns=\"http://www.bbc.co.uk/asset\" xml:space=\"preserve\" xml:base=\"http://www.bbc.co.uk/article/c5613327-a7bb-d642-9258-ef1203878c70\"><!-- Embedded video --><video media-id=\"80463285\">    <caption>Abdullah bin Abdulaziz was the fifth of his brothers to take the throne </caption>  </video><paragraph role=\"introduction\">Saudi King Abdullah bin Abdulaziz has died, royal officials have announced, weeks after he was admitted to hospital.</paragraph><paragraph>Abdullah, who had ruled since 2005 and was said to be aged about 90, had been suffering from a lung infection.</paragraph><paragraph>His 79-year-old half-brother, Salman, has been confirmed as the new king.</paragraph><paragraph>Within hours of his accession to the throne of the oil-rich kingdom, King Salman vowed to maintain the same policies as his predecessors.</paragraph><paragraph>\"We will continue adhering to the correct policies which Saudi Arabia has followed since its establishment,\" he said in a speech broadcast on state television.</paragraph><paragraph>Abdullah had suffered frequent bouts of ill health in recent years, and King Salman had recently taken on the ailing monarch's responsibilities. </paragraph><paragraph>Prior to announcing Abdullah's death, Saudi television cut to Koranic verses, which often signifies the passing of a senior royal.</paragraph><paragraph>A statement said Abdullah had died at 01:00 (22:00 GMT Thursday).</paragraph><image id=\"80463177\"/><crosshead>At the scene: Sylvia Smith, BBC News, Jeddah</crosshead><paragraph>Here in Saudi Arabia's second city, the streets were quiet this morning as many people flocked to mosques for Friday prayers. There is a subdued sadness in the air as Saudis take in the loss of their king. </paragraph><paragraph>People throughout the kingdom are mourning a man whom many viewed as a good monarch. A Jedawi I spoke to said that although it was known that Abdullah was ailing, to wake up to news of the king's death was distressing. Another Jedawi referred to the loss as like a family member passing away. </paragraph><paragraph>It is only after the king is later laid to rest, that people here and in the kingdom at large can begin to adjust to his passing.</paragraph><image id=\"80463177\"/><paragraph>Another of the late king's half-brothers, Muqrin, who is in his late 60s, has been named the new crown prince, according to an official statement. </paragraph><paragraph>Abdullah, Salman and Muqrin are all sons of the founder of modern Saudi Arabia, King Abdulaziz, usually referred to as Ibn Saud, who died in 1953. </paragraph><paragraph>King Salman called on the royal family's Allegiance Council to recognise Muqrin as his heir. He swiftly appointed Interior Minister Prince Mohammed bin Nayef as deputy crown prince, making him second in line to the throne, and named his own son, Mohammed bin Salman, as defence minister.</paragraph><paragraph>Other ministers, including foreign, oil and finance were kept in place, state TV reported.</paragraph><!-- Embedded video --><video media-id=\"80468880\">    <caption>King Salman bin Abdulaziz Al Saud: \"We will never deviate from our constitution\"</caption>  </video><paragraph>The new king's profile was updated on his <!-- CPS Asset ID: 30947756 --><link><caption>official Twitter account</caption><url platform=\"highweb\" href=\"https://twitter.com/KingSalman\"/></link>, where he wrote: \"I ask God to help me succeed in my service of the dear [Saudi] people.\"</paragraph><paragraph>In keeping with traditions of Wahhabism - the ultra-conservative form of Sunni Islam followed by the kingdom - King Abdullah will be buried in an unmarked grave immediately after Friday prayers. </paragraph><paragraph>The Saudi religious establishment views every aspect of life and death as a submission to God's supreme will, and protocol permits no official mourning period. Government offices stay open and flags remain at full mast.</paragraph><image id=\"80463177\"/><crosshead>Analysis: Frank Gardner, BBC security correspondent</crosshead><paragraph>Saudi Arabia under King Salman faces a number of challenges. The first is ensuring the succession passes smoothly without any divisive jockeying for power within the ruling family. Then there is the ongoing threat from jihadists, both at home and across its borders. </paragraph><paragraph>Saudi Arabia is now sandwiched between an aggressive Islamic State (IS) to the north and al-Qaeda in Yemen to the south. Saudi warplanes have joined the US-led coalition in air strikes against IS, but this is deeply unpopular with many Saudis. </paragraph><paragraph>The government has yet to find a way to cope with mild calls for reforms, and is abusing anti-terror laws to silence reformers and punish its critics. Longer term, it faces a growing unemployment problem. About half the population is under 25 and there are nowhere near enough meaningful jobs for young Saudis. </paragraph><paragraph>But the country does at least have oil in its favour. With prices below $45 a barrel, Saudi Arabia is one of the very few exporting countries to still make big margins on production and exploration. That puts it in a powerful position on the world stage.</paragraph><image id=\"80463177\"/><paragraph>US President Barack Obama expressed his personal sympathies, and those of the American people, on Abdullah's death.</paragraph><paragraph>\"As a leader, he was always candid and had the courage of his convictions. One of those convictions was his steadfast and passionate belief in the importance of the US-Saudi relationship as a force for stability and security in the Middle East and beyond,\" he said.</paragraph><paragraph>Vice-President Joe Biden <!-- CPS Asset ID: 30947754 --><link><caption>tweeted</caption><url platform=\"highweb\" href=\"https://twitter.com/VP/status/558475859367964672\"/></link> that he would lead a delegation to Riyadh to pay respects.</paragraph><paragraph>UK Prime Minister David Cameron said Abdullah would be remembered for his \"commitment to peace and for strengthening understanding between faiths\".</paragraph><paragraph>Jordan's King Abdullah II cut short a visit to Davos, Switzerland, to travel to Saudi Arabia, as Jordan's royal court declared 40 days of mourning.</paragraph><paragraph>Israeli President Reuven Rivlin praised Abdullah's \"grounded, considered and responsible leadership\", while Iran offered Saudi Arabia its condolences and said its foreign minister would travel to Riyadh for an \"official ceremony\" on Saturday.</paragraph><!-- Embedded video --><video media-id=\"80463396\">    <caption>Frank Gardner says Saudi Arabia could face an increasing internal security problem following the death of King Abdullah</caption>  </video><paragraph><!-- CPS Asset ID: 10214554 --><itemMeta overtyped-headline=\"King Abdullah\"><url href=\"/news/world-middle-east-10214554\" xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\"/><assetTypeCode xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">STY</assetTypeCode><assetId xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">10214554</assetId><headline xml:base=\"http://www.bbc.co.uk/article/b5c53243-9619-e059-e040-850a02846523\">Obituary: King Abdullah</headline><shortHeadline xml:base=\"http://www.bbc.co.uk/article/b5c53243-9619-e059-e040-850a02846523\">Obituary: King Abdullah</shortHeadline><summary xml:base=\"http://www.bbc.co.uk/article/b5c53243-9619-e059-e040-850a02846523\">A monarch who pursued a gentle process of reform against strong opposition from religious conservatives.</summary><section id=\"99125\" name=\"Middle East\" uri=\"/news/world/middle_east\" url-identifier=\"/news/world/middle_east\" xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\"/><title xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">BBC News - Obituary: King Abdullah</title><firstCreated xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">2010-06-02T10:43:10+00:00</firstCreated><firstPublished xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">2015-01-22T23:32:29+00:00</firstPublished><lastUpdated xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">2015-01-23T07:29:23+00:00</lastUpdated><lastPublished xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">2015-01-23T10:59:05+00:00</lastPublished><publicationStatus xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">PUBLISHED</publicationStatus><language xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">en-gb</language><site id=\"825\" code=\"news-v6\" name=\"BBC News\" front-page-uri=\"/news/front_page\" url-identifier=\"/news\" xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\"/><provider xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">cps</provider><workerCallingCard xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">NOLAPPS702-6007</workerCallingCard><hasShortForm xml:base=\"http://www.bbc.co.uk/asset/b5c53243-9618-e059-e040-850a02846523\">false</hasShortForm></itemMeta> was the 13th of the 45 sons of King Abdulaziz. He is believed to have been born in August 1924 in Riyadh, although there is some dispute about his actual birth date. </paragraph><paragraph>When he came to the throne in 2005 he succeeded another half-brother, Fahd. However, he had already been Saudi Arabia's de-facto leader for 10 years because his predecessor had been debilitated by a stroke.</paragraph><paragraph>In recent months Abdullah's age and failing health had led to increasing focus on the issue of the Saudi royal succession.</paragraph><paragraph>The crown has traditionally passed between Ibn Saud's sons, but few are still alive.</paragraph><paragraph>King Salman's appointment of Mohammed bin Nayef - a grandson of Ibn Saud - as deputy crown prince effectively smoothes the line of succession for years to come.</paragraph><paragraph>Correspondents say Abdullah was seen as a reformer at home, albeit a slow and steady one.</paragraph><paragraph>He allowed mild criticism of his government in the press, and hinted that more women should be allowed to work. </paragraph><paragraph>King Salman spent 48 years as governor of Riyadh Province before becoming crown prince and defence minister. </paragraph><paragraph>BBC security correspondent Frank Gardner says it is thought unlikely that he will embark on any great changes.</paragraph><paragraph>In a recent meeting with the BBC in Jeddah, he appeared alert and well-briefed but walked with the aid of a stick, our correspondent adds.</paragraph><image id=\"80463177\"/><image id=\"80466074\"/><crosshead>King Salman</crosshead>  <list type=\"unordered\">    <listItem>Born on 31 December 1935</listItem>    <listItem>Son of Princess Hassa al-Sudairi</listItem>    <listItem>Governor of Riyadh from 1955-1960 and 1963-2011</listItem>    <listItem>Appointed defence minister upon death of his brother Crown Prince Sultan</listItem>    <listItem>Owns important stake in one of the Arab world's largest media groups</listItem>  </list><paragraph><!-- CPS Asset ID: 30947755 --><link><caption>Profile: King Salman</caption><url platform=\"highweb\" href=\"http://m.bbc.co.uk/news/world-middle-east-30945925\"/></link></paragraph><image id=\"80463177\"/></body>",
    "shortFormBody" : "<shortFormBody xmlns=\"http://www.bbc.co.uk/asset\" xml:space=\"preserve\" xml:base=\"http://www.bbc.co.uk/article/c5613327-a7bb-d642-9258-ef1203878c70\"><paragraph>Saudi King Abdullah bin Abdulaziz has died, royal officials have announced, weeks after he was admitted to hospital.</paragraph><paragraph>Abdullah, who had ruled since 2005 and was said to be aged about 90, had been suffering from a lung infection.</paragraph><paragraph>His 79-year-old half-brother, Salman, has been confirmed as the new king.</paragraph><paragraph>Within hours of his accession to the throne of the oil-rich kingdom, King Salman vowed to maintain the same policies as his predecessors.</paragraph></shortFormBody>",
    "media" : {
      "images" : {
        "body" : {
          "80463134" : {
            "height" : 351,
            "width" : 624,
            "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463134_80028924.jpg",
            "caption" : "King Abdullah had been suffering from a lung infection",
            "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
            "positionHint" : "full-width",
            "copyrightHolder" : "AP",
            "originCode" : "mcs"
          },
          "78585627" : {
            "height" : 351,
            "width" : 624,
            "href" : "http://news.bbcimg.co.uk/media/images/78585000/jpg/_78585627_253d6c3f-aeb1-46ad-94c1-2a2128bb6754.jpg",
            "caption" : "King Salman has succeeded Abdullah",
            "altText" : "Saudi Crown Prince Salman (02/09/14)",
            "positionHint" : "full-width",
            "copyrightHolder" : "AP",
            "originCode" : "mcs"
          },
          "80463177" : {
            "height" : 2,
            "width" : 464,
            "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463177_464x2.jpg",
            "altText" : "BBC",
            "positionHint" : "body-width",
            "copyrightHolder" : "Grey line",
            "originCode" : "mcs"
          },
          "80465840" : {
            "height" : 171,
            "width" : 304,
            "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465840_80465839.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "positionHint" : "body-narrow-width",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80465844" : {
            "height" : 126,
            "width" : 224,
            "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465844_80465843.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80465845" : {
            "height" : 126,
            "width" : 224,
            "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465845_80465843.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80465847" : {
            "height" : 282,
            "width" : 226,
            "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465847_80465846.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80465848" : {
            "height" : 282,
            "width" : 226,
            "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465848_80465846.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80466072" : {
            "height" : 224,
            "width" : 224,
            "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466072_80466071.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          },
          "80466074" : {
            "height" : 224,
            "width" : 224,
            "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466074_80466071.jpg",
            "altText" : "Then Crown Prince Salman bin Abdulaziz Al-Saud, 6 January 2015",
            "copyrightHolder" : "AFP",
            "originCode" : "mcs"
          }
        },
        "index" : {
          "80033566" : {
            "height" : 351,
            "width" : 624,
            "href" : "http://news.bbcimg.co.uk/media/images/80033000/jpg/_80033566_80028924.jpg",
            "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
            "copyrightHolder" : "AP",
            "originCode" : "mcs"
          }
        },
        "index-thumbnail" : {
          "80462971" : {
            "height" : 180,
            "width" : 320,
            "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462971_80028924.jpg",
            "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
            "copyrightHolder" : "AP",
            "originCode" : "mcs"
          }
        },
        "slideshow" : {
          "80462972" : {
            "height" : 216,
            "width" : 384,
            "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462972_80028924.jpg",
            "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
            "copyrightHolder" : "AP",
            "originCode" : "mcs"
          },
          "80463087" : {
            "height" : 216,
            "width" : 384,
            "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463087_80463086.jpg",
            "altText" : "King Abdullah with former US President George W Bush - 2008 photo",
            "copyrightHolder" : "Reuters",
            "originCode" : "mcs"
          },
          "80463089" : {
            "height" : 216,
            "width" : 384,
            "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463089_80463088.jpg",
            "altText" : "King Abdullah at Arab Summit in Doha - 2009",
            "copyrightHolder" : "Reuters",
            "originCode" : "mcs"
          },
          "80463091" : {
            "height" : 216,
            "width" : 384,
            "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463091_80463090.jpg",
            "altText" : "King Abdullah with Syrian President Bashar al-Assad - 2009",
            "copyrightHolder" : "Reuters",
            "originCode" : "mcs"
          }
        }
      },
      "videos" : {
        "body" : {
          "80463396" : {
            "duration" : "PT3M34S",
            "available" : true,
            "mimeType" : "application/xml",
            "image" : {
              "height" : 360,
              "width" : 640,
              "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462419_hi025539379.jpg",
              "altText" : "Saudi King Abdullah who has died in his 90s",
              "copyrightHolder" : "Chip Somodevilla",
              "originCode" : "mcs"
            },
            "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30944812A/playlist.sxml",
            "externalId" : "p02hgh3b",
            "caption" : "The BBC's Frank Gardner says Saudi Arabia could face an increasing internal security problem following the death of King Abdullah",
            "allowOffSiteEmbedding" : false,
            "live" : false,
            "entityType" : "Version"
          },
          "80468880" : {
            "duration" : "PT45S",
            "available" : true,
            "mimeType" : "application/xml",
            "image" : {
              "height" : 360,
              "width" : 640,
              "href" : "http://news.bbcimg.co.uk/media/images/80472000/jpg/_80472085_80472084.jpg",
              "altText" : "The new King of Saudi Arabia",
              "copyrightHolder" : "EPA",
              "originCode" : "mcs"
            },
            "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30949699A/playlist.sxml",
            "externalId" : "p02hh9yj",
            "caption" : "King Salman bin Abdulaziz Al Saud: \"We will never deviate from our constitution\"",
            "allowOffSiteEmbedding" : false,
            "live" : false,
            "entityType" : "Version"
          },
          "80463285" : {
            "duration" : "PT2M1S",
            "available" : true,
            "mimeType" : "application/xml",
            "image" : {
              "height" : 360,
              "width" : 640,
              "href" : "http://news.bbcimg.co.uk/media/images/80461000/jpg/_80461836_80028924.jpg",
              "caption" : "King Abdullah had been suffering from a lung infection",
              "altText" : "Saudi King Abdullah speaks at his private residence in the Red Sea city of in Jeddah, Saudi Arabia. 27 June 2014",
              "copyrightHolder" : "AP",
              "originCode" : "mcs"
            },
            "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30943256A/playlist.sxml",
            "externalId" : "p02hgfb4",
            "caption" : "Abdullah bin Abdulaziz was the fifth of his brothers to take the throne",
            "allowOffSiteEmbedding" : false,
            "live" : false,
            "entityType" : "Version"
          }
        }
      }
    },
    "relatedGroups" : [ {
      "type" : "index",
      "items" : [ {
        "assetId" : "30944812",
        "assetUri" : "/news/world-middle-east-30944812",
        "firstCreated" : "2015-01-23T00:59:14+00:00",
        "hasShortForm" : false,
        "headline" : "What happens next in Saudi Arabia?",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T01:12:53+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80462420" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462420_hi025539379.jpg",
                "altText" : "Saudi King Abdullah who has died in his 90s",
                "copyrightHolder" : "Chip Somodevilla",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80462422" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462422_hi025539379.jpg",
                "altText" : "Saudi King Abdullah who has died in his 90s",
                "copyrightHolder" : "Chip Somodevilla",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80463396" : {
                "duration" : "PT3M34S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80462000/jpg/_80462419_hi025539379.jpg",
                  "altText" : "Saudi King Abdullah who has died in his 90s",
                  "copyrightHolder" : "Chip Somodevilla",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30944812A/playlist.sxml",
                "externalId" : "p02hgh3b",
                "caption" : "The BBC's Frank Gardner says Saudi Arabia could face an increasing internal security problem following the death of King Abdullah",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "overtypedHeadline" : "What happens next?",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "What happens next in Saudi Arabia?",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The BBC's Frank Gardner says the priority for Saudis following the death of King Abdullah will be to maintain stability.",
        "title" : "BBC News - What happens next in Saudi Arabia?",
        "type" : "MAP",
        "workerCallingCard" : "NOLAPPS201-6007"
      }, {
        "assetId" : "10214554",
        "assetUri" : "/news/world-middle-east-10214554",
        "firstCreated" : "2010-06-02T10:43:10+00:00",
        "hasShortForm" : false,
        "headline" : "Obituary: King Abdullah",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:29:23+00:00",
        "media" : {
          "images" : {
            "body" : {
              "73886791" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886791_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "73887001" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887001_bush_abdullah.jpg",
                "caption" : "He was sometimes a critic of US foreign policy in the Middle East",
                "altText" : "George W Bush poses with Saudi King Abdullah during the Summit on Financial Markets on November 15, 2008 in Washington DC",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887177" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887177_abdullah_mohammed.jpg",
                "caption" : "King Abdullah tried to promote the cause of Arab unity, fostering ties with King Mohammed VI of Morocco",
                "altText" : "Saudi Arabia's King Abdullah bin Abdul Aziz (L) and King Mohammed VI of Morocco wave to well-wishers as they drive through the streets of Fes, 17 May 2007",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887179" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887179_queen_abdullah.jpg",
                "caption" : "He continued Saudi Arabia's pro-Western foreign policy",
                "altText" : "Queen Elizabeth II (L) and King Abdullah of Saudi Arabia are greeted by officials at a ceremonial welcome in Horse Guards in London, 30 October 2007",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887568" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887568_saudi_women.jpg",
                "caption" : "The king had hinted at relaxing some of the traditional restrictions on women",
                "altText" : "Saudi women arrive at the Janadriyah festival of Heritage and Culture held in the village of Al-Thamama, 50 kilometres north of the capital Riyadh, on February 22, 2014",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "73886793" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886793_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "73886795" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886795_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Obituary: King Abdullah",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A monarch who pursued a gentle process of reform against strong opposition from religious conservatives.",
        "title" : "BBC News - Obituary: King Abdullah",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS702-6007"
      }, {
        "assetId" : "30945925",
        "assetUri" : "/news/world-middle-east-30945925",
        "firstCreated" : "2015-01-23T04:01:09+00:00",
        "hasShortForm" : false,
        "headline" : "Profile: King Salman of Saudi Arabia",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:59:20+00:00",
        "media" : {
          "images" : {
            "body" : {
              "80463738" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463738_025540474.jpg",
                "caption" : "King Salman of Saudi Arabia oversaw Riyadh's development into a modern city",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "80465427" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465427_80465426.jpg",
                "caption" : "King Salman may seek a closer accommodation with the Saudi religious leadership",
                "altText" : "King Salman, pictured in 2014",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "80463177" : {
                "height" : 2,
                "width" : 464,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463177_464x2.jpg",
                "altText" : "BBC",
                "positionHint" : "body-width",
                "copyrightHolder" : "Grey line",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "80463734" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463734_025540474.jpg",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80463736" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463736_025540474.jpg",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "overtypedHeadline" : "Who takes over now?",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Profile: King Salman of Saudi Arabia",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A profile of King Salman bin Abdulaziz al-Saud, who has acceded to the Saudi throne on the death of his half-brother, King Abdullah.",
        "title" : "BBC News - Profile: King Salman of Saudi Arabia",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS201-6004"
      }, {
        "assetId" : "29792691",
        "assetUri" : "/news/world-middle-east-29792691",
        "firstCreated" : "2014-10-27T16:14:03+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia: Why succession could become a princely tussle",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:31:11+00:00",
        "media" : {
          "images" : {
            "body" : {
              "78577992" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577992_ee84997b-d1f4-4530-8402-fc9a1d3fc39c.jpg",
                "caption" : "King Abdullah was the fifth son of Saudi Arabia's founding father to rule",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "78585627" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78585000/jpg/_78585627_253d6c3f-aeb1-46ad-94c1-2a2128bb6754.jpg",
                "caption" : "Salman was swiftly confirmed as successor to King Abdullah",
                "altText" : "Saudi King Salman (02/09/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "78585632" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78585000/jpg/_78585632_2d46d19b-28d3-4b98-8ef0-591ccff74272.jpg",
                "caption" : "Prince Muqrin was named Saudi Arabia's first deputy heir, skipping older brothers",
                "altText" : "Deputy Crown Prince Muqrin (10/08/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              },
              "79122018" : {
                "height" : 650,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/79122000/gif/_79122018_saudi_succession_tree_624.gif",
                "altText" : "Saudi lines of succession",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "80466042" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466042_fbc5b137-f7d2-42c8-bf19-2b5541948c5c.jpg",
                "caption" : "Salman was swiftly confirmed as successor to King Abdullah",
                "altText" : "King Salman (21/02/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "80466044" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466044_1043b94a-dc6d-4a07-a116-5cb3d41595d8.jpg",
                "caption" : "Abdullah named Prince Muqrin as Saudi Arabia's first deputy heir, skipping older brothers",
                "altText" : "Prince Muqrin (file photo)",
                "positionHint" : "full-width",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              },
              "80466045" : {
                "height" : 830,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466045_saudi_succession_tree_layers_624(4).jpg",
                "altText" : "Saudi key figures graphic",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "80474996" : {
                "height" : 800,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80474000/jpg/_80474996_saudi_succession_tree_layers_624.jpg",
                "altText" : "Saudi lines of succession",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "78577994" : {
                "height" : 432,
                "width" : 768,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577994_78577993.jpg",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "78577996" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577996_78577995.jpg",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "overtypedHeadline" : "Analysis: Succession tussle",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia: Why succession could become a princely tussle",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The need for smooth and orderly transfers of power in Saudi Arabia has become more crucial than ever - but who will inherit the kingdom in the coming years is a thorny issue yet to be resolved, says Gerald Butt.",
        "title" : "BBC News - Saudi Arabia: Why succession could become a princely tussle",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS202-6004"
      }, {
        "assetId" : "30949365",
        "assetUri" : "/news/world-middle-east-30949365",
        "firstCreated" : "2015-01-23T10:14:03+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia's King Abdullah spoke to John Simpson in 2007",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T10:25:16+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80468906" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468906_80468904.jpg",
                "altText" : "King Abdullah bin Abdulaziz in 2007",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80468908" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468908_80468904.jpg",
                "altText" : "King Abdullah bin Abdulaziz in 2007",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80468901" : {
                "duration" : "PT6M13S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80468000/jpg/_80468905_80468904.jpg",
                  "altText" : "King Abdullah bin Abdulaziz in 2007",
                  "copyrightHolder" : "BBC",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30949365A/playlist.sxml",
                "externalId" : "p02hhb2h",
                "caption" : "King Abdullah spoke to the BBC's John Simpson in 2007",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "overtypedHeadline" : "Archive: King speaks to BBC",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Archive: Saudi king speaks to BBC",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The BBC's John Simpson interviewed Saudi Arabia's King Abdullah bin Abdulaziz in 2007, in the aftermath of the 7/7 London terrorist attacks.",
        "title" : "BBC News - Saudi Arabia's King Abdullah spoke to John Simpson in 2007",
        "type" : "MAP",
        "workerCallingCard" : "NOLAPPS203-6006"
      }, {
        "assetId" : "30949699",
        "assetUri" : "/news/world-middle-east-30949699",
        "firstCreated" : "2015-01-23T10:31:09+00:00",
        "hasShortForm" : false,
        "headline" : "New Saudi Arabia King Salman makes continuity pledge",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:21:27+00:00",
        "media" : {
          "images" : {
            "index" : {
              "80472086" : {
                "height" : 360,
                "width" : 640,
                "href" : "http://news.bbcimg.co.uk/media/images/80472000/jpg/_80472086_80472084.jpg",
                "altText" : "The new King of Saudi Arabia",
                "copyrightHolder" : "EPA",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80472088" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80472000/jpg/_80472088_80472084.jpg",
                "altText" : "The new King of Saudi Arabia",
                "copyrightHolder" : "EPA",
                "originCode" : "mcs"
              }
            }
          },
          "videos" : {
            "primary" : {
              "80468880" : {
                "duration" : "PT45S",
                "available" : true,
                "mimeType" : "application/xml",
                "image" : {
                  "height" : 360,
                  "width" : 640,
                  "href" : "http://news.bbcimg.co.uk/media/images/80472000/jpg/_80472085_80472084.jpg",
                  "altText" : "The new King of Saudi Arabia",
                  "copyrightHolder" : "EPA",
                  "originCode" : "mcs"
                },
                "href" : "http://playlists.bbc.co.uk/news/world-middle-east-30949699A/playlist.sxml",
                "externalId" : "p02hh9yj",
                "caption" : "King Salman bin Abdulaziz Al Saud: \"We will never deviate from our constitution\"",
                "allowOffSiteEmbedding" : false,
                "live" : false,
                "entityType" : "Version"
              }
            }
          }
        },
        "mediaType" : "Video",
        "overtypedHeadline" : "New king vows continuity",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "New Saudi king in continuity vow",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The new king of Saudi Arabia has pledged to continue the policies of his predecessor following the death of his half-brother King Abdullah bin Abdulaziz.",
        "title" : "BBC News - New Saudi Arabia King Salman makes continuity pledge",
        "type" : "MAP",
        "workerCallingCard" : "NOLAPPS702-6007"
      }, {
        "assetTypeCode" : "PRO",
        "avRestriction" : "Global",
        "contentType" : "Audio",
        "firstCreated" : "2015-01-23T08:18:16+00:00",
        "lastUpdated" : "2015-01-23T08:18:16+00:00",
        "links" : {
          "desktop" : "http://www.bbc.co.uk/programmes/p02hh37p",
          "highweb" : "http://www.bbc.co.uk/programmes/p02hh37p"
        },
        "title" : "Ex-ambassador on legacy",
        "type" : "LINK"
      }, {
        "assetId" : "30946159",
        "assetUri" : "/news/uk-30946159",
        "firstCreated" : "2015-01-23T05:27:08+00:00",
        "hasShortForm" : true,
        "headline" : "Saudi King Abdullah death: Cameron leads UK tributes",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T13:05:49+00:00",
        "media" : {
          "images" : {
            "body" : {
              "80464350" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464350_004693368-1.jpg",
                "caption" : "Prime Minister Gordon Brown received King Abdullah at Downing Street during his 2007 visit",
                "altText" : "Gordon Brown with King Abdullah bin Abdulaziz of Saudi Arabia",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "80464352" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464352_004691617-1.jpg",
                "caption" : "King Abdullah met the Queen during a visit to the UK in 2007",
                "altText" : "Queen Elizabeth II in a carriage with King Abdullah bin Abdulaziz of Saudi Arabia",
                "positionHint" : "full-width",
                "copyrightHolder" : "PA",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "80464594" : {
                "height" : 432,
                "width" : 768,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464594_80464593.jpg",
                "altText" : "King Abdullah bin Abdulaziz",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80464596" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80464000/jpg/_80464596_80464593.jpg",
                "altText" : "King Abdullah bin Abdulaziz",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              }
            }
          }
        },
        "overtypedHeadline" : "PM leads UK tributes",
        "section" : {
          "name" : "UK",
          "id" : "99116",
          "uri" : "/news/uk",
          "urlIdentifier" : "/news/uk"
        },
        "shortHeadline" : "PM leads UK tributes to Saudi king",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "David Cameron says he is \"deeply saddened\" to hear of the death of Saudi Arabia's King Abdullah bin Abdulaziz.",
        "title" : "BBC News - Saudi King Abdullah death: Cameron leads UK tributes",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS702-6004"
      } ]
    }, {
      "type" : "grouped-assets",
      "headline" : "Saudi Arabia's King Abdullah bin Abdulaziz dies ",
      "items" : [ {
        "assetId" : "30945324",
        "assetUri" : "/news/world-middle-east-30945324",
        "firstCreated" : "2015-01-22T23:20:38+00:00",
        "hasShortForm" : true,
        "headline" : "Saudi Arabia's King Abdullah bin Abdulaziz dies",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:55:47+00:00",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia's King Abdullah dies",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "Saudi King Abdullah bin Abdulaziz has died in hospital, royal officials announce, weeks after being admitted with a lung infection.",
        "title" : "BBC News - Saudi Arabia's King Abdullah bin Abdulaziz dies",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS203-6002"
      }, {
        "assetId" : "10214554",
        "assetUri" : "/news/world-middle-east-10214554",
        "firstCreated" : "2010-06-02T10:43:10+00:00",
        "hasShortForm" : false,
        "headline" : "Obituary: King Abdullah",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:29:23+00:00",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Obituary: King Abdullah",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A monarch who pursued a gentle process of reform against strong opposition from religious conservatives.",
        "title" : "BBC News - Obituary: King Abdullah",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS702-6007"
      }, {
        "assetId" : "30948142",
        "assetUri" : "/news/world-middle-east-30948142",
        "firstCreated" : "2015-01-23T10:33:44+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia's King Abdullah spoke to John Simpson in 2007",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T10:33:44+00:00",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Archive interview",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The BBC's John Simpson interviewed Saudi Arabia's King Abdullah bin Abdulaziz in 2007 about the terrorist threat in the aftermath of the 7/7 attacks.",
        "title" : "BBC News - Saudi Arabia's King Abdullah spoke to John Simpson in 2007",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS702-6007"
      }, {
        "assetId" : "30945925",
        "assetUri" : "/news/world-middle-east-30945925",
        "firstCreated" : "2015-01-23T04:01:09+00:00",
        "hasShortForm" : false,
        "headline" : "Profile: King Salman of Saudi Arabia",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:59:20+00:00",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Profile: King Salman of Saudi Arabia",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A profile of King Salman bin Abdulaziz al-Saud, who has acceded to the Saudi throne on the death of his half-brother, King Abdullah.",
        "title" : "BBC News - Profile: King Salman of Saudi Arabia",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS201-6004"
      }, {
        "assetId" : "29792691",
        "assetUri" : "/news/world-middle-east-29792691",
        "firstCreated" : "2014-10-27T16:14:03+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia: Why succession could become a princely tussle",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:31:11+00:00",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia: Why succession could become a princely tussle",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The need for smooth and orderly transfers of power in Saudi Arabia has become more crucial than ever - but who will inherit the kingdom in the coming years is a thorny issue yet to be resolved, says Gerald Butt.",
        "title" : "BBC News - Saudi Arabia: Why succession could become a princely tussle",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS202-6004"
      } ]
    }, {
      "type" : "see-alsos",
      "items" : [ {
        "assetId" : "29792691",
        "assetUri" : "/news/world-middle-east-29792691",
        "firstCreated" : "2014-10-27T16:14:03+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia: Why succession could become a princely tussle",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:31:11+00:00",
        "media" : {
          "images" : {
            "body" : {
              "78577992" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577992_ee84997b-d1f4-4530-8402-fc9a1d3fc39c.jpg",
                "caption" : "King Abdullah was the fifth son of Saudi Arabia's founding father to rule",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "78585627" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78585000/jpg/_78585627_253d6c3f-aeb1-46ad-94c1-2a2128bb6754.jpg",
                "caption" : "Salman was swiftly confirmed as successor to King Abdullah",
                "altText" : "Saudi King Salman (02/09/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "78585632" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/78585000/jpg/_78585632_2d46d19b-28d3-4b98-8ef0-591ccff74272.jpg",
                "caption" : "Prince Muqrin was named Saudi Arabia's first deputy heir, skipping older brothers",
                "altText" : "Deputy Crown Prince Muqrin (10/08/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              },
              "79122018" : {
                "height" : 650,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/79122000/gif/_79122018_saudi_succession_tree_624.gif",
                "altText" : "Saudi lines of succession",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "80466042" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466042_fbc5b137-f7d2-42c8-bf19-2b5541948c5c.jpg",
                "caption" : "Salman was swiftly confirmed as successor to King Abdullah",
                "altText" : "King Salman (21/02/14)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "80466044" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466044_1043b94a-dc6d-4a07-a116-5cb3d41595d8.jpg",
                "caption" : "Abdullah named Prince Muqrin as Saudi Arabia's first deputy heir, skipping older brothers",
                "altText" : "Prince Muqrin (file photo)",
                "positionHint" : "full-width",
                "copyrightHolder" : "Reuters",
                "originCode" : "mcs"
              },
              "80466045" : {
                "height" : 830,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80466000/jpg/_80466045_saudi_succession_tree_layers_624(4).jpg",
                "altText" : "Saudi key figures graphic",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "80474996" : {
                "height" : 800,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80474000/jpg/_80474996_saudi_succession_tree_layers_624.jpg",
                "altText" : "Saudi lines of succession",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "78577994" : {
                "height" : 432,
                "width" : 768,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577994_78577993.jpg",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "78577996" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/78577000/jpg/_78577996_78577995.jpg",
                "altText" : "Saudi King Abdullah (27/06/14)",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "overtypedHeadline" : "Succession tussle",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia: Why succession could become a princely tussle",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "The need for smooth and orderly transfers of power in Saudi Arabia has become more crucial than ever - but who will inherit the kingdom in the coming years is a thorny issue yet to be resolved, says Gerald Butt.",
        "title" : "BBC News - Saudi Arabia: Why succession could become a princely tussle",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS202-6004"
      }, {
        "assetId" : "10214554",
        "assetUri" : "/news/world-middle-east-10214554",
        "firstCreated" : "2010-06-02T10:43:10+00:00",
        "hasShortForm" : false,
        "headline" : "Obituary: King Abdullah",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T07:29:23+00:00",
        "media" : {
          "images" : {
            "body" : {
              "73886791" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886791_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "73887001" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887001_bush_abdullah.jpg",
                "caption" : "He was sometimes a critic of US foreign policy in the Middle East",
                "altText" : "George W Bush poses with Saudi King Abdullah during the Summit on Financial Markets on November 15, 2008 in Washington DC",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887177" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887177_abdullah_mohammed.jpg",
                "caption" : "King Abdullah tried to promote the cause of Arab unity, fostering ties with King Mohammed VI of Morocco",
                "altText" : "Saudi Arabia's King Abdullah bin Abdul Aziz (L) and King Mohammed VI of Morocco wave to well-wishers as they drive through the streets of Fes, 17 May 2007",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887179" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887179_queen_abdullah.jpg",
                "caption" : "He continued Saudi Arabia's pro-Western foreign policy",
                "altText" : "Queen Elizabeth II (L) and King Abdullah of Saudi Arabia are greeted by officials at a ceremonial welcome in Horse Guards in London, 30 October 2007",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "73887568" : {
                "height" : 401,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73887000/jpg/_73887568_saudi_women.jpg",
                "caption" : "The king had hinted at relaxing some of the traditional restrictions on women",
                "altText" : "Saudi women arrive at the Janadriyah festival of Heritage and Culture held in the village of Al-Thamama, 50 kilometres north of the capital Riyadh, on February 22, 2014",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "73886793" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886793_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "73886795" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/73886000/jpg/_73886795_3d5f2387-062f-4f1b-ad5a-9ffccc26963b.jpg",
                "altText" : "Saudi Arabia's King Abdullah speaks with US Secretary of State John Kerry before their meeting in Rawdat Khurayim, 5 January, 2014 file photo,",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Obituary: King Abdullah",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A monarch who pursued a gentle process of reform against strong opposition from religious conservatives.",
        "title" : "BBC News - Obituary: King Abdullah",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS702-6007"
      }, {
        "assetId" : "27619309",
        "assetUri" : "/news/world-middle-east-27619309",
        "firstCreated" : "2014-05-29T11:25:39+00:00",
        "hasShortForm" : false,
        "headline" : "Reporting Saudi Arabia's hidden uprising",
        "language" : "en-gb",
        "lastUpdated" : "2014-05-30T14:31:08+00:00",
        "media" : {
          "images" : {
            "body" : {
              "75195397" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/75195000/jpg/_75195397_safaincar.jpg",
                "altText" : "Safa al-Ahmad",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "75175323" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/75175000/png/_75175323_protest.png",
                "altText" : "Protest in Qatif",
                "positionHint" : "full-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "75204389" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/75204000/png/_75204389_bulletsinhand(2).png",
                "altText" : "Man holding bullets",
                "positionHint" : "body-narrow-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "75204386" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/75204000/png/_75204386_funeralprocession(2).png",
                "altText" : "Funeral procession in Saudia Arabia",
                "positionHint" : "body-narrow-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "75204392" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/75204000/jpg/_75204392_de27.jpg",
                "altText" : "Boy pointing in front of a Saudi roadblock",
                "positionHint" : "body-narrow-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "75208902" : {
                "height" : 549,
                "width" : 976,
                "href" : "http://news.bbcimg.co.uk/media/images/75208000/jpg/_75208902_safapic1.jpg",
                "altText" : "Safa al-Ahmad",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "75175570" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/75175000/jpg/_75175570_safapic3.jpg",
                "altText" : "Safa al-Ahmad",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          }
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia's hidden uprising",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "Safa al-Ahmad returns to her native Saudi Arabia, gaining unprecedented access to anti-government protesters in the oil-rich east of the country.",
        "title" : "BBC News - Reporting Saudi Arabia's hidden uprising",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS203-6006"
      }, {
        "assetId" : "30945925",
        "assetUri" : "/news/world-middle-east-30945925",
        "firstCreated" : "2015-01-23T04:01:09+00:00",
        "hasShortForm" : false,
        "headline" : "Profile: King Salman of Saudi Arabia",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T11:59:20+00:00",
        "media" : {
          "images" : {
            "body" : {
              "80463738" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463738_025540474.jpg",
                "caption" : "King Salman of Saudi Arabia oversaw Riyadh's development into a modern city",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "80465427" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80465000/jpg/_80465427_80465426.jpg",
                "caption" : "King Salman may seek a closer accommodation with the Saudi religious leadership",
                "altText" : "King Salman, pictured in 2014",
                "positionHint" : "full-width",
                "copyrightHolder" : "AP",
                "originCode" : "mcs"
              },
              "80463177" : {
                "height" : 2,
                "width" : 464,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463177_464x2.jpg",
                "altText" : "BBC",
                "positionHint" : "body-width",
                "copyrightHolder" : "Grey line",
                "originCode" : "mcs"
              }
            },
            "index" : {
              "80463734" : {
                "height" : 351,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463734_025540474.jpg",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "80463736" : {
                "height" : 180,
                "width" : 320,
                "href" : "http://news.bbcimg.co.uk/media/images/80463000/jpg/_80463736_025540474.jpg",
                "altText" : "King Salman bin Abdulaziz al-Saud (2014 file image)",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            }
          }
        },
        "overtypedHeadline" : "Profile: King Salman",
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Profile: King Salman of Saudi Arabia",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "A profile of King Salman bin Abdulaziz al-Saud, who has acceded to the Saudi throne on the death of his half-brother, King Abdullah.",
        "title" : "BBC News - Profile: King Salman of Saudi Arabia",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS201-6004"
      }, {
        "assetId" : "14702705",
        "assetUri" : "/news/world-middle-east-14702705",
        "firstCreated" : "2011-08-28T16:47:27+00:00",
        "hasShortForm" : false,
        "headline" : "Saudi Arabia profile - Overview",
        "language" : "en-gb",
        "lastUpdated" : "2015-01-23T09:23:04+00:00",
        "media" : {
          "images" : {
            "body" : {
              "54991268" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/54991000/gif/_54991268_saudi_map.gif",
                "altText" : "Map of Saudi Arabia",
                "positionHint" : "body-narrow-width",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              },
              "55172448" : {
                "height" : 2336,
                "width" : 3832,
                "href" : "http://news.bbcimg.co.uk/media/images/55172000/jpg/_55172448_sau_medinamosque2_afp.jpg",
                "altText" : "Al-Masjid al-Nabawi in Medina, Saudi Arabia",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "55172449" : {
                "height" : 2452,
                "width" : 3797,
                "href" : "http://news.bbcimg.co.uk/media/images/55172000/jpg/_55172449_sau_medinamosque_afp.jpg",
                "altText" : "Al-Masjid al-Nabawi in Medina, Saudi Arabia",
                "positionHint" : "full-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              },
              "62090607" : {
                "height" : 387,
                "width" : 624,
                "href" : "http://news.bbcimg.co.uk/media/images/62090000/jpg/_62090607_saudi_mecca_g.jpg",
                "caption" : "The holy city of Mecca is the destination for millions of Muslim pilgrims every year",
                "altText" : "Mecca, Saudi Arabia",
                "positionHint" : "full-width",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              },
              "62090608" : {
                "height" : 230,
                "width" : 448,
                "href" : "http://news.bbcimg.co.uk/media/images/62090000/jpg/_62090608_saudi_women3_g.jpg",
                "caption" : "Saudi women live under a wide range of restrictions, from dress to driving",
                "altText" : "Saudi women",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              },
              "75777807" : {
                "height" : 584,
                "width" : 976,
                "href" : "http://news.bbcimg.co.uk/media/images/75777000/jpg/_75777807_saudi_pilgrims_g.jpg",
                "caption" : "Millions of Muslim pilgrims from all over the world congregate in the holy city of Mecca every year",
                "altText" : "Pilgrims in Mecca",
                "positionHint" : "full-width",
                "copyrightHolder" : "Getty Images",
                "originCode" : "mcs"
              },
              "55172451" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/55172000/jpg/_55172451_sau_medinamosque2_afp.jpg",
                "altText" : "Al-Masjid al-Nabawi in Medina, Saudi Arabia",
                "positionHint" : "body-narrow-width",
                "copyrightHolder" : "AFP",
                "originCode" : "mcs"
              }
            },
            "index-thumbnail" : {
              "54991268" : {
                "height" : 171,
                "width" : 304,
                "href" : "http://news.bbcimg.co.uk/media/images/54991000/gif/_54991268_saudi_map.gif",
                "altText" : "Map of Saudi Arabia",
                "copyrightHolder" : "BBC",
                "originCode" : "mcs"
              }
            }
          }
        },
        "section" : {
          "name" : "Middle East",
          "id" : "99125",
          "uri" : "/news/world/middle_east",
          "urlIdentifier" : "/news/world/middle_east"
        },
        "shortHeadline" : "Saudi Arabia profile",
        "site" : {
          "name" : "BBC News",
          "code" : "news-v6",
          "urlIdentifier" : "/news",
          "frontPageUri" : "/news/front_page"
        },
        "summary" : "Provides an overview of Saudi Arabia, including key events and facts about the birthplace of Islam",
        "title" : "BBC News - Saudi Arabia profile - Overview",
        "type" : "STY",
        "workerCallingCard" : "NOLAPPS571-6003"
      } ]
    } ],
    "options" : {
      "allowRightHandSide" : true,
      "allowRelatedStoriesBox" : true,
      "includeComments" : false,
      "isIgorSeoTagsEnabled" : false,
      "hasNewsTracker" : true,
      "allowAdvertising" : false,
      "hasContentWarning" : false,
      "allowDateStamp" : true,
      "allowHeadline" : true,
      "isKeyContent" : false,
      "allowPrintingSharingLinks" : true,
      "isBreakingNews" : true,
      "suitableForSyndication" : true
    },
    "language" : "en-gb",
    "id" : "http://www.bbc.co.uk/asset/f6ee2668-324a-4b42-8945-b519a0222bb6",
    "assetUri" : "/news/world-middle-east-30945324",
    "assetId" : "30945324",
    "headline" : "Saudi Arabia's King Abdullah bin Abdulaziz dies",
    "shortHeadline" : "Saudi Arabia's King Abdullah dies",
    "section" : {
      "name" : "Middle East",
      "id" : "99125",
      "uri" : "/news/world/middle_east",
      "urlIdentifier" : "/news/world/middle_east"
    },
    "site" : {
      "name" : "BBC News",
      "code" : "news-v6",
      "urlIdentifier" : "/news",
      "frontPageUri" : "/news/front_page"
    },
    "workerCallingCard" : "NOLAPPS203-6002",
    "iStatsCounterName" : "news.world.middle_east.story.30945324.page"
  } ]
}
```
