# API Resource Documentation 
## User

### Register


**Endpoint**: /user

**Method**: POST

**Body**:
    - username: String
    - password: String

### Authenticate

**Endpoint**: /user/login

**Method**: POST

**Body**:

    - username: String
    - password: String



### Get user by username

**Endpoint**: /user/:username

**Method**: GET

**Body**: N/A




### Get user by user ID
**Endpoint**: /user/:user_id

**Method**: GET

**Body**: N/A

---

## Event

### Get all events

**Endpoint**: /events

**Method**: GET

**Body**: N/A

### Get event by event ID
**Endpoint**: /events/:event_id

**Method**: GET

**Body**: N/A

### Get event participants by event ID
**Endpoint**: /events/:event_id/participants

**Method**: GET

**Body**: N/A

### Get an event file by file ID
**Endpoint**: /event/:event_id/file/:file_id

**Method**: GET

**Body**: N/A
