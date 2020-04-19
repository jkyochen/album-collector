# Table

**song**

| Key |  Field   |   Type  |
|-----|----------|---------|
| PK  | id       | sereial |
| FK  | album_id |         |
|     | name     | text    |

**album**

| Key |   Field   |   Type  |
|-----|-----------|---------|
| PK  | id        | sereial |
| FK  | singer_id |         |
|     | name      | text    |
|     | cover_url | text    |

**singer**

| Key | Field |   Type  |
|-----|-------|---------|
| PK  | id    | sereial |
|     | name  | text    |
