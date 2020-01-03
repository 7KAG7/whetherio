class Api::V1::TestWeathersController < ApplicationController
  def index
    location = JSON.parse(params["location"])
    results = Geocoder.search(location["city"])
    #get the lat/long
    latitude = results.first.coordinates[0]
    longitude = results.first.coordinates[1]
    base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_KEY"]}/#{latitude}#{longitude}"
    response = Faraday.get(base_url)
    weather = JSON.parse(response.body)

    render json: {
      weather: weather,
      user: current_user
    }
  end
end
