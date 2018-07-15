# nodejs-chat-backend

## Project's routes
### Get all users list
HTTP method: GET
```javascript
'http://localhost:8000/users/'
```

### Get user by id
HTTP method: GET

```javascript
'http://localhost:8000/users/:id'
```

### Create user profile
HTTP method: POST

```javascript
'http://localhost:8000/users/'
```

### Update user profile
HTTP method: PUT

```javascript
'http://localhost:8000/users/id'
```

### Delete user profile
HTTP method: DELETE

```javascript
'http://localhost:8000/users/id'
```

### Get all messages between two users
HTTP method: GET

```javascript
http://localhost:8000/message/senderId/receiverId
```

### Get  message
HTTP method: GET

```javascript
http://localhost:8000/message/id/
```
### Add message
HTTP method: POST

```javascript
http://localhost:8000/message/senderId/receiverId
```

### Edit message
HTTP method: PUT

```javascript
http://localhost:8000/message/id/
```

### Delete message
HTTP method: DELETE

```javascript
http://localhost:8000/message/id/
```
