class AlbumsController < ApplicationController

  def new
    @album = Album.new
    @band_id = Band.find(params[:band_id]).id
    render :new
  end

  def create
    @album = Album.new(album_params)
    fail
    if @album.save
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit

  end

  def update

  end

  def show
    @album = Album.find(params[:id])

    if @album
      render :show
    else
      flash.now[:errors] = @album.errors.full_messages
      redirect_to bands_url
    end
  end

  def destroy

  end

  private

  def album_params
    params.require(:album).permit(:title, :album_id, :yr, :live, :band_id)
  end
end
