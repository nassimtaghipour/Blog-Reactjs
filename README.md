Blog web app developed by React.js and Bootstrap4	

Layout

⦁	The page is responsive and adapt to the screen size of the user‘s device.The page should not be larger than 1280px in width and be horizontally centered.

⦁	The page has four sections: a header (yellow), the main content area (green), an area providing context (red) and a footer (purple).

⦁	On small devices,the areas should be vertically stacked

⦁	On larger screens, the context area should be next to the main area on the right side of the page. 


Screen width is larger than or equal to 640px | Screen width is smaller than 640px
------------ | -------------
 <img src="https://github.com/nassimtaghipour/Blog-Reactjs/blob/master/public/img-desktop.png" width="200" height="200">|<img src="https://github.com/nassimtaghipour/Blog-Reactjs/blob/master/public/img-mobile.png" width="200" height="200">
                      
 


Navigation

⦁	The header section should contain a horizontal navigation with 6 top-level items

⦁	Each top-level navigation item should have a list of sub-items which are displayed when hovering the top-level item (see image below).

⦁	On small screens, there won‘t be enough space to fit 6 items next to each other so used sandwitch menu as an solution.

 <img src="https://github.com/nassimtaghipour/Blog-Reactjs/blob/master/public/navigation.png" width="200" height="200">


Posts

⦁	The website consists of two types of pages: an overview page and detail pages for fake blog posts

⦁	The data should come from http://jsonplaceholder.typicode.com/

Overview


The overview page should list the titles of all posts. Each post title should link to a detail page for that post. The data can be found here: http://jsonplaceholder.typicode.com/posts/
Detail page

The detail page should display the post title and post content in the main area. The data for a single post can be found here: http://jsonplaceholder.typicode.com/posts/<postId>

The context area should display the name and website of the post author. The data for that can be fetched based on the userId of the post from here: http://jsonplaceholder.typicode.com/users/<userId>


Project setup:

npm install

npm start

