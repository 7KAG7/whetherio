class WeatherWrapper
  BASE_URL = "https://api.darksky.net/forecast/api_key=#{ENV["dark_sky_key"]}"

  attr_reader :weather_urls

  def initialize(urls)
    @weather_urls = urls
  end

  def self.retrieve_weather(query)
    weatherData = weather_request(query)
    urls = weather_urls(weatherData)
    WeatherWrapper.new(urls)
  end


  def self.weather_request(query)
    response = Faraday.get("#{BASE_URL}&q=#{query}")
    return JSON.parse(response.body)
  end

  def self.weather_urls(parsed_weather_array)
    weather_urls = []
    parsed_weather_array["data"].each do |weather_data|
      weather_urls << gif_data["summary"]["temperature"]["precipType"]
    end
    return weather_urls
  end
end
