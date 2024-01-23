#!/bin/bash

# Endpoint base URL
BASE_URL="http://192.168.56.1:3000/api"

echo "1. Registering a new user..."
# Register a new user
REGISTRATION_RESPONSE=$(curl -X POST "http://192.168.56.1:3000/api/users/register" -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com", "password": "123456"}')
echo "Registration Response: $REGISTRATION_RESPONSE"
USER_ID=$(echo $REGISTRATION_RESPONSE | jq -r '.session.user.id')
SESSION_ID=$(echo $REGISTRATION_RESPONSE | jq -r '.session._id')
TOKEN=$(echo $REGISTRATION_RESPONSE | jq -r '.session.token')
echo "\n"
echo USER_ID: $USER_ID
echo SESSION_ID: $SESSION_ID
echo "\n"
echo "--------------------------------------------------"

echo "2. Createing a new project..."
# Create a new project
CREATE_PROJECT_RESPONSE=$(curl -s -X POST "http://192.168.56.1:3000/api/projects" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"title": "My Project", "description": "This is my project", "createdBy": "'"$USER_ID"'", "status": "Open", "deadline": "2022-12-31"}')
echo "Create Project Response: $CREATE_PROJECT_RESPONSE"
PROJECT_ID=$(echo $CREATE_PROJECT_RESPONSE | jq -r '._id')
echo "\n"
echo PROJECT_ID: $PROJECT_ID
echo "\n"
echo "--------------------------------------------------"

echo "3. Getting the project by ID..."
# Get the project by ID
GET_PROJECT_RESPONSE=$(curl -s -X GET "http://192.168.56.1:3000/api/projects/$PROJECT_ID" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN")
echo "Get Project Response: $GET_PROJECT_RESPONSE"

echo "4. Listing all projects..."
# # List all projects
LIST_PROJECTS_RESPONSE=$(curl -s -X GET "$BASE_URL/projects" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN")
echo "List Projects Response: $LIST_PROJECTS_RESPONSE"

echo "5. Updating project information..."
# # Update project information
UPDATE_RESPONSE=$(curl -s -X PATCH "$BASE_URL/projects/$PROJECT_ID" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"title": "My Updated Project"}')
echo "Update Response: $UPDATE_RESPONSE"

echo "6. Deleting the project..."
# # Delete the project
DELETE_PROJECT_RESPONSE=$(curl -s -X DELETE "http://192.168.56.1:3000/api/projects/$PROJECT_ID" -H "Authorization: Bearer $TOKEN")
echo "Delete Project Response: $DELETE_PROJECT_RESPONSE"


echo "7. Deleting the user..."
# # Delete the user
DELETE_RESPONSE=$(curl -s -X DELETE "http://192.168.56.1:3000/api/users/$USER_ID" -H "Authorization: Bearer $TOKEN")
echo "Delete Response: $DELETE_RESPONSE"