class PagesController < ApplicationController
  def hello
  end

  def json
    render json: {name: 'Tommy'}
  end
end
