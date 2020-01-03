class Api::V1::WeathersController < ApplicationController

  def index
    location = JSON.parse(params["location"])
    results = Geocoder.search(location["city"])
    latitude = results.first.coordinates[0].round(4)
    longitude = results.first.coordinates[1].round(4)
    base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_KEY"]}/#{latitude}, #{longitude}"
    response = Faraday.get(base_url.gsub(/\s+/, ""))
    weather = JSON.parse(response.body)

    render json: {
      weather: weather,
      user: current_user
    }
  end
end
