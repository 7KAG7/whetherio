class GeoCoderWrapper

  def initialize()
  end

  def get_location_by_form
    # location = JSON.parse(params["location"])
    # results = geocode(location["city"])
    # latitude = results.first.coordinates[0].round(4)
    # longitude = results.first.coordinates[1].round(4)
    # base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_KEY"]}/#{latitude}, #{longitude}"
    # response = Faraday.get(base_url.gsub(/\s+/, ""))
    # weather = JSON.parse(response.body)
  end

  def geocode(location_parameter)
    # Geocoder.search(location_parameter)
  end

  def get_location_data_by_ip
    #
  end

  def default_location_data
    #
  end

end
