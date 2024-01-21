#!/bin/bash

# Endpoint base URL
BASE_URL="http://localhost:3000/api"

echo "1. Registering a new user..."
# Register a new user
REGISTRATION_RESPONSE=$(curl -s -X POST "$BASE_URL/users/register" -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com", "password": "123456"}')
echo "Registration Response: $REGISTRATION_RESPONSE"
USER_ID=$(echo $REGISTRATION_RESPONSE | jq -r '.session.user.id')
SESSION_ID=$(echo $REGISTRATION_RESPONSE | jq -r '.session._id')
echo "\n"
echo USER_ID: $USER_ID
echo SESSION_ID: $SESSION_ID
echo "\n"
echo "--------------------------------------------------"

echo "2. Getting the user by ID..."
# Get the user by ID
GET_USER_RESPONSE=$(curl -s -X GET "$BASE_URL/user/$USER_ID")
echo "Get User Response: $GET_USER_RESPONSE"

# echo "3. Listing all users..."
# # List all users
# LIST_USERS_RESPONSE=$(curl -s -X GET "$BASE_URL/user")
# echo "List Users Response: $LIST_USERS_RESPONSE"

# echo "4. Updating user information..."
# # Update user information
# UPDATE_RESPONSE=$(curl -s -X PATCH "$BASE_URL/user/$USER_ID" -H "Content-Type: application/json" -d '{"name": "John Updated"}')
# echo "Update Response: $UPDATE_RESPONSE"

# echo "5. Changing user password..."
# # Change user password
# PASSWORD_CHANGE_RESPONSE=$(curl -s -X PATCH "$BASE_URL/user/$USER_ID/password" -H "Content-Type: application/json" -d '{"oldPassword": "123456", "newPassword": "newpassword123"}')
# echo "Password Change Response: $PASSWORD_CHANGE_RESPONSE"

# echo "6. Logging out the user..."
# # Logout the user
# LOGOUT_RESPONSE=$(curl -s -X POST "$BASE_URL/user/logout")
# echo "Logout Response: $LOGOUT_RESPONSE"

# echo "7. Logging in with the new password..."
# # Login with the new password
# LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/user/login" -H "Content-Type: application/json" -d '{"email": "johndoe@example.com", "password": "newpassword123"}')
# echo "Login Response: $LOGIN_RESPONSE"

# echo "8. Deleting the user..."
# # Delete the user
# DELETE_RESPONSE=$(curl -s -X DELETE "$BASE_URL/user/$USER_ID")
# echo "Delete Response: $DELETE_RESPONSE"
