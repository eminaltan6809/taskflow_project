class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    logger.info "Creating task with params: #{task_params.inspect}"
    task = Task.new(task_params)
    if task.save
      logger.info "Task created successfully: #{task.inspect}"
      render json: task, status: :created
    else
      logger.error "Task creation failed: #{task.errors.full_messages}"
      render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :completed)
  end
end
