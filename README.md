# Bluedit

## Overview

**Bluedit** is a clone of the site Reddit, where users can create posts, comment on these posts, and upvote or downvote posts and comments.

## MVP


The **Bluedit** MVP will allow users to create an account, create a post, comment on posts, and upvote or downvotes these posts.

<br>

### MVP Goals

- Main Page with all posts listed
- User page listing all posts and comments made by that user
- Full CRUD Backend
- Recursive, Reddit-style comments

<br>

#### Wireframes

![Dummy Link](https://i.imgur.com/qeHEAe2.png)

- Main Page

![Dummy Link](https://i.imgur.com/oim1dfL.png)

- Post Page

![Dummy Link](https://i.imgur.com/tgULjRj.png)

- User Page

#### Component Hierarchy

``` structure

src
|__ components/
      |__ Post.jsx
      |__ PostPreview.jsx
      |__ Comment.jsx
|__ services/
      |__ api_helper.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                         |
| :----------: | :--------: | :---: | :---: | :---------------------------------------------------------------    |
|    Post      | class      |   n   |   y   | _Post will render an individual post with all the comments._        |
|  PostPreview | class      |   n   |   n   | _PostPreview will render a post with a small image and no comments._|
|   Comment    | functional |   n   |   n   | _Comment will render a single Comment._                             |

### MVP Server (Back End)

#### ERD Model

![Dummy Link](https://i.imgur.com/6M5qlbe.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ posts/
|__ users/:id
|__ posts/:id
|__ posts/id:/comments
|__users/:id/comments
|__/users/:id/posts

```

<br>

***

## Post-MVP

After MVP is achieved, I will attempt to create an equivalent to "subreddits" from Reddit.

***

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
