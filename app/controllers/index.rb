get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input].upcase == params[:user_input]
    @grandma = "NO NOT SINCE THE 80's"
  else
    @grandma = "SPEAK UP I CAN'T HEAR YOU"
  end
  erb :index
end
