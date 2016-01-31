#  Nitro API

## About the Nitro API

*Anyone can ask Nitro anything about BBC programmes.*

Nitro is a read-only API that offers filterable and sortable feeds of metadata on BBC programmes, services, schedules and more. In particular, it can determine "availability" of assets (such as episodes, clips and image galleries) for programmes. 

Metadata includes programme descriptions, images and contributors.

### Feeds

Programmes - Start here for programmes metadata: Brands, Series, Episodes and Clips - `/nitro/api/programmes`

Availability - Discover details of on-demand availability for programmes and their versions - `/nitro/api/availabilities`

Broadcasts - Build schedules and find metadata for TV and radio broadcasts - `/nitro/api/broadcasts`

Groups - Find metadata for curated groups: seasons, collections, image galleries or franchises - `/nitro/api/groups`

Images - Find metadata for images - `/nitro/api/images`

Items - Look inside programmes to find segments: chapters, tracks and more - `/nitro/api/items`

Masterbrands - List all Master Brands - `/nitro/api/master_brands`

People - Find the people behind and in programmes: cast, crew, guests and more - `/nitro/api/people`

Pips - Look inside PIPs (Programme Information Platform) entities - `/nitro/api/pips`

Promotions - Discover metadata for content promotions - `/nitro/api/promotions`

Schedules - Build schedules and find metadata for TV and radio broadcasts and webcasts - `/nitro/api/schedules`

Services - Information about the linear services used for broadcast transmissions - `/nitro/api/services`

Versions - Helps you handle the editorial "versions" of episodes (eg signed, cut for language, regional variations, etc) - `/nitro/api/versions`

### Tailoring feeds

Filter - You can filter the results of your query further by adding filters to your request. Generally, adding filters improves the performance of your query as it reduces the search space of you query. For example, filtering by PID (programme ID) returns only programmes matching that PID.

Sort - You can sort the results of your query by adding sorts to your request.

Mixin - Mixins allow you to specify optional elements you would like included in the output, on the understanding that they will impact performance (but save you making additional Nitro calls). For instance, the titles mixin exposes all the titles and pids of the ancestors of a given object.

Pagination - Nitro output is paginated. You can request how many items you want returned, but Nitro does not guarantee to honour this, only to return as many as possible.

### Developer guide

[Click here](https://developer.bbc.co.uk/nitro) to view the Nitro developer documentation.

### Sample responses

Some examples of what the responses from the Nitro API look like.

* [Example /api JSON response](Nitro/nitro-api-json-example.html)