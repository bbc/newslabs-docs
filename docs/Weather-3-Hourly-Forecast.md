# Weather API: 3-hourly forecast

## Description

The 3 hourly JSON Forecast feed provides forecast data for 3 hourly time intervals for the next 24 hours.

## Table of properties and values

The following properties are included in the JSON:

<table class="table table-striped" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td valign="middle" class="td1">
        <p class="p5"><span class="s2"><b>general properties </b></span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p5"><span class="s2"><b> </b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">locationId </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">the geoId, as stored in Locator</span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">locationName </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">name of the place, as stored in Locator </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">country </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">containing country, as stored in Locator </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">latitude </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">floating point to 3 decimal places </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">longitude </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">floating point to 3 decimal places </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p5"><span class="s2"><b>forecast </b></span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p5"><span class="s2"><b>every 3 hours for the next 24 hours </b></span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">timezoneName </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">eg UTC + 01 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">date </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">in ISO 8601 format </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">maxTemperature centigrade </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">maximum day temperature in C, e.g. 14 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">maxTemperature fahrenheit </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">maximum day temperature in F, e.g. 57 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">visibility </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. "Good" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">wind direction </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. "SW" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">wind direction desc </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. "South Westerly" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">windspeed mph </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. 15 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">windspeed kph </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. 24 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">iconGrey </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">URL of the Grey version of the wind rose </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">iconWhite </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">URL of the Grey version of the wind rose </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">weatherType </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">Met Office description, e.g. "Sunny intervals" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">weatherCode </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">Met Office descriptive code </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">dayName </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. "Thursday" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">dayNameAbbreviation </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. "Thu" </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">weatherSymbol mobile </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">URL of the relevant daytime weather icon image, smallest size </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">weatherSymbol webSmall </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">URL of the relevant daytime weather icon image, larger size </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">weatherSymbol webMedium </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">URL of the relevant daytime weather icon image, largest size </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">humidityPercent </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. 80 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">pressureMillibars </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">e.g. 1017 </span></p>
      </td>
    </tr>
    <tr>
      <td valign="middle" class="td1">
        <p class="p6"><span class="s2">timeSlot </span></p>
      </td>
      <td valign="middle" class="td2">
        <p class="p6"><span class="s2">eg "13:00" (time that should be displayed) </span></p>
      </td>
    </tr>
  </tbody>
</table>

## Example URL

http://weather-api-proxy.cloud.bbc.co.uk/weather/feeds/en/2655981/3hourlyforecast.json
