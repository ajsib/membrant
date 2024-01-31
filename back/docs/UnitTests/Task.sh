#!/bin/bash
# Task route test script

# Endpoint base URL
BASE_URL="http://192.168.56.1:3000/api"
# when user and projects are created, add the token and project ID here
TOKEN=""
PROJECT_ID=""

echo "1. Creating a new task..."
# Create a new task
CREATE_TASK_RESPONSE=$(curl -s -X POST "$BASE_URL/tasks" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"title": "New Task", "description": "Task description", "projectId": "'"$PROJECT_ID"'", "status": "Open"}')
echo "Create Task Response: $CREATE_TASK_RESPONSE"
TASK_ID=$(echo $CREATE_TASK_RESPONSE | jq -r '._id')
echo "\n"
echo TASK_ID: $TASK_ID
echo "\n"
echo "--------------------------------------------------"

echo "2. Getting the task by ID..."
# Get the task by ID
GET_TASK_RESPONSE=$(curl -s -X GET "$BASE_URL/tasks/$TASK_ID" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN")
echo "Get Task Response: $GET_TASK_RESPONSE"

echo "3. Listing all tasks..."
# List all tasks
LIST_TASKS_RESPONSE=$(curl -s -X GET "$BASE_URL/tasks" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN")
echo "List Tasks Response: $LIST_TASKS_RESPONSE"

echo "4. Updating task information..."
# Update task information
UPDATE_TASK_RESPONSE=$(curl -s -X PATCH "$BASE_URL/tasks/$TASK_ID" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"title": "Updated Task Title"}')
echo "Update Task Response: $UPDATE_TASK_RESPONSE"

echo "5. Deleting the task..."
# Delete the task
DELETE_TASK_RESPONSE=$(curl -s -X DELETE "$BASE_URL/tasks/$TASK_ID" -H "Authorization: Bearer $TOKEN")
echo "Delete Task Response: $DELETE_TASK_RESPONSE"
