	
Layout

⦁	The page is responsive and adapt to the screen size of the user‘s device .The page should not be larger than 1280px in width and be horizontally centered.
⦁	The page has four sections: a header (yellow), the main content area (green), an area providing context (red) and a footer (purple).
⦁	On small devices (width <640px), the areas should be vertically stacked
⦁	On larger screens, the context area should be next to the main area on the right side of the page. The main area should always be twice as large as the context-providing area.


                           



Navigation

⦁	The header section should contain a horizontal navigation with 6 top-level items
⦁	Each top-level navigation item should have a list of sub-items which are displayed when hovering the top-level item (see image below).
⦁	On small screens, there won‘t be enough space to fit 6 items next to each other. Find a solution that works for that scenario.
⦁	Make sure that your solution works on devices with touch screens, no matter their screen size.
 


Posts

⦁	The website consists of two types of pages: an overview page and detail pages for fake blog posts
⦁	The data should come from http://jsonplaceholder.typicode.com/

Overview


The overview page should list the titles of all posts. Each post title should link to a detail page for that post. The data can be found here: http://jsonplaceholder.typicode.com/posts/
Detail page

The detail page should display the post title and post content in the main area. The data for a single post can be found here: http://jsonplaceholder.typicode.com/posts/<postId>

The context area should display the name and website of the post author. The data for that can be fetched based on the userId of the post from here: http://jsonplaceholder.typicode.com/users/<userId>


