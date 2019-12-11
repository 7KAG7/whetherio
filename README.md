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

* Codepen for continuous integration monitoring

Deployment instructions: from the CLI: clone the master version, then yarn start for react side rendering and Rail s for rails server in two seperate terminal tabs. then navigate to http://localhost:3000/ 

A personalized DarkSky API key will be needed in order to populate weather condtions.

Run Locally
Git Clone the repo and run both commands in your terminal:

bundle install
yarn install
After that create your database by:

bundle exec rake db:create
bundle exec rake db:migrate
Once that is finished start running the servers!

rails s
yarn start
