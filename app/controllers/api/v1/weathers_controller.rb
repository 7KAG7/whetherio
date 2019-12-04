class Api::V1::WeathersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_KEY"]}/42.3601,%20-71.0589"
    response = Faraday.get("#{base_url}")
    weather = JSON.parse(response.body)

    render json: {
      weather: weather,
      user: current_user
    }
  end
end
