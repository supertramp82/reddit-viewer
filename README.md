# reddit-viewer

run "npm i" to install all the necessary modules, then run "npm run dev-server" to start the app - your app is available at http://localhost:8080 in your browser

The hierarchy

- Subreddit
  - Title
  - Url
  - Thumbnail (if exists)
  - Author
  - TimeCreated
  - Comments/Url

Added Redux to be able transfering Feeds selection information down to the Reddit url inside Subreddit component

Added Jest and Enzyme libraries to test available functionality

Things to do:

- more testing coverage
- replace axios with RxJs using interval() to update the feed - the advantages of RxJs - usage of the same observable and ability to cancel or retry 
