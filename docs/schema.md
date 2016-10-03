# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
answered    | boolean   | default: false

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed
body        | string    | not null
upvotes     | integer   | default: 0
downvotes   | integer   | default: 0

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
answer_id   | integer   | not null, foreign key (references answer), indexed
body        | string    | not null
upvotes     | integer   |
downvotes   | integer   |

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## topictaggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | not null, foreign key (references questions), indexed, unique [tag_id]
topic_id      | integer   | not null, foreign key (references tags), indexed
