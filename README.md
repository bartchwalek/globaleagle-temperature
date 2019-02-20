# globaleagle-temperature
Global Eagle Temperature List test assignment

2019-02-20 : 13:00 - From GlobalEagle
The original assignement:

# Temperature list 

We need you to create a Web application that allows to follow-up the temperatures. You have to:
- obtain a list of temperatures from the Yahoo Weather API,
- allow a user to enter new temperatures,
- Display the median, average, max and min temperatures from the list of temperatures fetched and added.

Consider the Yahoo API as a "back-end" database. In other words, the list of temperatures added and the one fetched from Yahoo API are the same list (see details of Yahoo API below).

Spend between 2 and 4 hours on this exercise.

You'll find a jpg file of the design that you need to replicate, as well as the logo in svg format that you need to use.

## User stories

- As a user, I want to see a list of temperatures in Celcius (source: Yahoo API).
- As a user, I want to be able to add a temperature to that list (non persistant when the page get refreshed).
- As a user, I want to see the median of temperatures displayed and updated each time the list of temperatures changes.
- As a user, I want to see the average of temperatures displayed and updated each time the list of temperatures changes.
- As a user, I want to see the min and max of temperatures displayed and updated each time the list of temperatures changes.


## Rules/Constraints

- Use Angular 2+ (If you can't or don't know Angular, use Javascript and jQuery)
- BONUS: Create your CSS using SASS

## Technical information about the Yahoo API

The URL needed to obtain the weather precisions is the following. You'll need to use the JSONP method. Use the "Forecast High" temperatures from that object.

http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)&format=json&callback=JSON_CALLBACK

## What need to be demonstrated:

In your code, you'll be judge on:

- The reusability, portability, modularity and scalability of your code and CSS (that demonstrate ideally an object oriented approach)
- An eye for visual details (Respect of the design)

## How to submit your work

Once your work is done, create a Github (or Bitbucket) repo and send us the access and credentials so we can download and view the project.

Don't forget to include the installation guide.

## Question

1. If you had more time, how you would have improved the project?
2. If you had the choice, what would be your ideal development environment? (IDE' stack, technology, etc.)
