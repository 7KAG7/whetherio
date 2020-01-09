[![Codeship Status for 7KAG7/whetherio](https://app.codeship.com/projects/0cf17690-dc82-0137-7761-5ade14e29270/status?branch=master)](https://app.codeship.com/projects/371654)
# README

http://whetherio.herokuapp.com/

WhetherIO is a site designed to allow a user to sign-in/up and see the days wheather and an outfit that correlates with the condtions.

* Ruby version 2.6.5

* ReactJS 16.8.0

* Rails 5.2.3

* Devise for users sign up 

* Database postgresQL

* Faraday GEM for API calls

* make_it_so GEM for ruby/react on rails framework

* Amazon affiliate marketing for outfits

* DarkSky API
  This gem provides a wrapper around the Dark Sky API for retrieving and analyzing past and current weather forecasts. In order   to use this gem, you'll need to register for an account on Dark Sky so that you can get an API key to make requests with. The   account is free, and your first 1,000 calls per day are also free. After that, you'll be billed for each subsequent call. See   the Dark Sky FAQ for more details.
  
  You must run
  ```
  atom .env
  ```
  from the CLI and add DARK_SKY_KEY=YOUR DARK SKY API KEY

* Codepen for continuous integration monitoring

## Run Locally

Git Clone the repo and run both commands in your terminal: 

```
bundle install
yarn install
```

After that create your database by: 

```
bundle exec rake db:create
bundle exec rake db:migrate
```

Once that is finished start running the servers!

```
rails s
yarn start
```
