---
title: Blog Help
date: 2021-02-3
bannerimage: '/blog/cloud-312652_640.png'
summary: Construction of a slim.ai blog markdown file including the frontmatter.
author: Len Krasinski
jobtitle: Third one in
company: slim.ai
---
<BlogHeader 
  :frontmatter="$frontmatter"
/>

**Other help:**

[Blog Components Help](/guide/blog-components)

[The original markdown](https://daringfireball.net/projects/markdown/syntax)



# A slim.ai blog page markdown(md) file is made of 4 required sections:

- Frontmatter
- Header
- Content
- Footer

# The basic blog page template:

```
---
title: Your Title
date: Your Date  as 2021-01-29
tags: 
  - Your Tag 1
  - Your Tag 2
  - Your Tag 3
bannerimage: '/PATH to your banner image'
summary: Your summary.
author: Your Name
jobtitle: Your title
company: slim.ai
authorlink: Link to something to send them to
authorlinktext: Your text for the link
authorimage: 'PATH to your image'
---

<BlogHeader 
  :frontmatter="$frontmatter"
/>

<!-- Your blog markdown content goes here (remove this line) -->

<BlogFooter 
  :frontmatter="$frontmatter"
/>

```
The BlogHeader and BlogFooter elements should be copied and pasted (as is) into your blog md file at the appropriate location.   
Therefore, the two sections that require your attention are the frontmatter and the content.  
- The frontmatter is the meta-information about the blog.  
- The content is your article's content :)    
<br />   

**The frontmatter is also used by the system to show the list of "cards" representing blog articles. Example:**

![Mycard](/blog/card.jpg)


# A completed sample blog page:

```
---
title: Hello, World
date: 2021-01-29
tags: 
  - theme
  - blog
  - vuepress
bannerimage: '/blog/cloud-312652_640.png'
summary: Sample construction of blog markdown file including the frontmatter.
author: Len Krasinski
jobtitle: Third one in
company: slim.ai
authorlink: https://www.rockhall.com/
authorlinktext: Rock n Roll
authorimage: '/blog/default-avatar.png'
---

<!--  Use the standard header and footer: -->

<!-- You add a slim.ai standard blog header copy and paste this: -->

<BlogHeader 
  :frontmatter="$frontmatter"
/>


# Blog markdown content goes here

#### To use a frontmatter variable in your blog content.
#### Let's show the title as a header:
   
    

# {{ $frontmatter.title }}
    
#### Let's use the author in text:
   
<br>
   
   
#### This blog post is written by {{ $frontmatter.author }}.
<br>  
   


<!-- You can also add a slim.ai standard blog footer copy and paste this: -->

<BlogFooter 
  :frontmatter="$frontmatter"
/>

```
[ See the above example code in action](/guide/blog-sample.md)

The frontmatter must very first in the blog md file. This frontmatter is used to create the cards shown in blog list. The frontmatter is between the triple-dashed lines, you must set the frontmatter predefined variables (see [above](#) for a reference).
    
A blog page is made of
  - Frontmatter
  - BlogHeader
  - Markdown content containing:
     - Standard markdown
     - Frontmatter variables
     - [Custom blog components](/guide/blog-components)
  - BlogFooter
    
   
The frontmatter variables will also be available for you to access using <code>[$frontmatter](#)</code> in the page content, along with standard markdown, all custom and theming components.


::: tip
Front matter variables tags, authorlinktext and authorlink are **optional**. All other Front matter variables are **not optional** in this blog.
:::

***Do not exceed 3 tags or one screen line. Tags should be only one or two words each.***   


# File management

VuePress has a convention about it's file and folder structure and will not function if altered.

**Do not modify, move or delete any file or folder that is not in a "blog" folder**

 There are two blog folders:
 - blog folder for the md files
 - blog folder for the assets (images, videos, etc )

 The blog md file folder is found at:   
 **ROOT_DIR/LandingPage/docs/blog**

The blog asset file folder is found at:   
**ROOT_DIR/LandingPage/docs/.vuepress/public/blog**

All blog work **must** be in those two folders.

All images should be .jpg or .png   

Image for author is 100x100px   

Image for card banner is 375x250px   

The author and banner images will be scaled to the above dimensions when used in the card or BlogHeader.

To use an image in your frontmatter, put it in the blog asset folder, then reference it like:

bannerimage: '/blog/your-image.png'


To use an image in your markdown, put it in the blog asset folder, then reference it like:
```
![Mycloud](/blog/cloud-312652_640.png)
```

yields:

![Mycloud](/blog/cloud-312652_640.png)


<BlogFooter 
  :frontmatter="$frontmatter"
/>