# TaskFlow - Rails API (sample)

This is a minimal Rails API project scaffold prepared for local setup.

## Quick start (after extracting):
1. bundle install
2. rails db:create db:migrate
3. rails s
4. API endpoints:
   - GET /tasks
   - POST /tasks  (body: {"task": {"title": "..."}})
   - PATCH /tasks/:id (body: {"task": {"completed": true}})
