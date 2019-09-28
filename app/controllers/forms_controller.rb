class FormsController < ApplicationController

  def index

  end

  def create
    params1 = params.permit(:title,  :description, :form_fields)
    begin
      FormTable.create(params1)
      redirect_to :action => "display_all"
    rescue => e 
      puts e
      redirect_to :action => "display_all"
    end
  end

  def new

  end

  
  def update
    begin
      params1 = params.permit(:title,  :description, :form_fields,:id,:lock_version)
      @form = FormTable.find(params1[:id]).update_attributes(params1) 
      flash[:success] = "Form updated successfully"
      redirect_to :action => "display_all"
    rescue => e
      # errors.add "unfortunately you cant update"
      flash[:error] = "unfortunately you cant update"
      redirect_to :action => "show"
      puts e
    end
  end

  def show
     @form = FormTable.find(params[:id])
  end

  def display_all
    @forms =  FormTable.all
  end


end