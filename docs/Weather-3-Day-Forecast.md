# Weather API: 3 day forecast

## Description

The 3 Day JSON Forecast feed provides forecast data for day and night weather for today and the following 2 days. The information switches automatically to show the overnight forecast at 16:00 GMT, and the current day changes at 04:00 GMT. If the feed is used correctly there is no effort involved in letting the feed switch over by itself.

You need to be aware that after 1600 GMT then the current days weather detail will appear as Null in the feed, as only the night time details are valid. The night time icons and Low temp should be shown as a minimum.

## Table of properties and values

The following properties are included in the JSON:

<table cellspacing="0" cellpadding="0" class="table table-striped">
  <tbody>
    <tr>
      <td valign="top" class="td5">
        <p class="p4"><span class="s1"><b>general properties</b></span></p>
      </td>
      <td valign="top" class="td6">
        <p class="p4"><span class="s1"><b> </b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">locationId<span class="Apple-converted-space"> </span></span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">the geoId, as stored in Locator</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">locationName</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">name of the place, as stored in Locator</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">country</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">containing country, as stored in Locator</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">latitude</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">floating point to 3 decimal places</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">longitude</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">floating point to 3 decimal places</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">timezoneName</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "Europe/London"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">date</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">in ISO 8601 format</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">dayName</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "Thursday"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">dayNameAbbreviation</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "Thu"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td9">
        <p class="p7"><span class="s1"><b>daytime forecast</b></span></p>
      </td>
      <td valign="top" class="td10">
        <p class="p7"><span class="s1"><b>(valid beween 0400 and 1600hrs)</b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">sunrise</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">in ISO 8601 format</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">visibility</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "Good"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherCode</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">Met Office descriptive code</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">wind direction</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "SW"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">wind direction desc</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. "South Westerly"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">windspeed mph</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. 15</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">windspeed kph</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. 24</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherType</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">Met Office description, e.g. "Sunny intervals"</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol mobile</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant daytime weather icon image, smallest size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol webSmall</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant daytime weather icon image, larger size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol webMedium</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant daytime weather icon image, largest size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">humidityPercent</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. 80</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">pressureMillibars</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">e.g. 1017</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">maxTemperature centigrade</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">maximum day temperature in C, e.g. 14</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">maxTemperature fahrenheit</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">maximum day temperature in F, e.g. 57</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td9">
        <p class="p7"><span class="s1"><b>night time forecast</b></span></p>
      </td>
      <td valign="top" class="td10">
        <p class="p7"><span class="s1"><b>Valid Between 1600 and 0400(+1day)</b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">sunset</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">in ISO 8601 format</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherCode</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">Met Office descriptive code</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherType</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1"> </span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol mobile</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant night-time weather icon image, smallest size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol webSmall</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant night-time weather icon image, larger size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">weatherSymbol webMedium</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">URL of the relevant night-time weather icon image, largest size</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">minTemperature centigrade</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">minimum night temperature in C, e.g. 14</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td7">
        <p class="p5"><span class="s1">minTemperature fahrenheit</span></p>
      </td>
      <td valign="top" class="td8">
        <p class="p5"><span class="s1">minimum night temperature in F, e.g. 57</span></p>
      </td>
    </tr>
  </tbody>
</table>

## URL

* http://weather-api-proxy.cloud.bbc.co.uk/weather/feeds/en/2655985/3dayforecast.json