require 'rails_helper'

RSpec.describe "Tasks API", type: :request do
  describe "GET /tasks" do
    it "returns all tasks" do
      Task.create!(title: "Test Görevi")
      get "/tasks"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /tasks" do
    it "creates a new task" do
      post "/tasks", params: { task: { title: "Yeni Görev" } }
      expect(response).to have_http_status(:created)
    end
  end

  describe "PATCH /tasks/:id" do
    it "updates a task" do
      task = Task.create!(title: "Güncellenecek Görev")
      patch "/tasks/#{task.id}", params: { task: { completed: true } }
      expect(response).to have_http_status(:success)
      expect(Task.find(task.id).completed).to eq(true)
    end
  end
end
