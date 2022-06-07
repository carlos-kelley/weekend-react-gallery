# React - Gallery of My Life

Server side code to retrieve data (`GET`) and like a photo (`PUT`) have been provided for you. For practice, we recommend testing out these routes in Postman. You should not need to modify these routes for base mode.

### Setup

There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).


```
npm install CHECK
npm run server CHECK
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## BASE MODE


### Task List
- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
- Create a new **component** for the `GalleryList`CHECK 
and pass it the gallery data stored in `App` via `props`.
    - Iterate (loop over) the list of gallery data
    - Make GalleryItems CHECK
- Create a new **component** called `GalleryItem.jsx`  CHECK 
and pass it the individual gallery item via `props`. 
    - Update the `GalleryList` to use this component to display an image.
    - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked.








