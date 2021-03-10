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
authorimage: '/blog/default-avatar.png'
---

<!--  Use the standard header and footer: -->

<!-- You add a slim.ai standard blog header copy and paste this: -->

<BlogHeader 
  :frontmatter="$frontmatter"
/>


# Blog markdown content goes here

#### To use a frontmatter variable in your blog content.   
<br />

#### Let's show the title as a header:  

<br />  


# {{ $frontmatter.title }}  
    
#### Let's use the author in text:  
   
<br>
   
   
#### This blog post is written by {{ $frontmatter.author }}.  
<br>  
   


<!-- You can also add a slim.ai standard blog footer copy and paste this: -->

<BlogFooter 
  :frontmatter="$frontmatter"
/>
