# Blog custom components guide


(slim.ai internal document - not part of the site)

[The original markdown](https://daringfireball.net/projects/markdown/syntax)

[Blog Help](/guide)


Each page can be made of combination of markdown text and Slim.ai extensions as seen below:

## Slim.ai extensions

<br />
<br />


### Sample
---

Add this extension markdown :


```

  <SectionVisualRight 
    title="Developer tools to help create production-ready containers quickly" 
    imageUrl="/img/hero.svg"
    imageHeight="50vh"
    subtitle="Because it sucks to go slow at building the apps that power every business."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    />

```
Yields:


  <SectionVisualRight 
    title="Developer tools to help create production-ready containers quickly" 
    imageUrl="/img/hero.svg"
    imageHeight="50vh"
    backgroundBlue="true"
    subtitle="Because it sucks to go slow at building the apps that power every business."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    />


### Sample
---

Add this extension markdown :



```
   <SectionVisualLeft 
    title="Developer tools to help create production-ready containers quickly" 
    imageUrl="/img/hero.svg"
    imageHeight="50vh"
    subtitle="Because it sucks to go slow at building the apps that power every business."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    />
```
Yields:

   <SectionVisualLeft 
    title="Developer tools to help create production-ready containers quickly" 
    imageUrl="/img/hero.svg"
    imageHeight="50vh"
    subtitle="Because it sucks to go slow at building the apps that power every business."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    />
### Sample
---

Add this extension markdown :


```
  <SectionVisualRight
    headline="DEVELOPER & COMMUNITY FIRST"
    title="Learn & Contribute" 
    imageUrl="/img/image_-02-1.svg"
    subtitle="Because it sucks to go slow."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'We are dedicated to making developers’ lives easier through open source software, content, and community',
      'Join our community to collaborate as we share what we learn and create products that are meant to improve the lives of developers around the world',
      'Bullet # 3 - Lorem ipsum dolor sit amet',
      'Bullet # 4 - Lorem ipsum dolor sit amet'
      ]"
    />
```
Yields:

  <SectionVisualRight
    headline="DEVELOPER & COMMUNITY FIRST"
    title="Learn & Contribute" 
    imageUrl="/img/image_-02-1.svg"
    subtitle="Because it sucks to go slow."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'We are dedicated to making developers’ lives easier through open source software, content, and community',
      'Join our community to collaborate as we share what we learn and create products that are meant to improve the lives of developers around the world',
      'Bullet # 3 - Lorem ipsum dolor sit amet',
      'Bullet # 4 - Lorem ipsum dolor sit amet'
      ]"
    />
### Sample
---

Add this extension markdown :


```
  <SectionVisualCenter
    topline = "Heavy Metal Codi"
    headline="DEVELOPER & COMMUNITY FIRST"
    title="Learn & Contribute" 
    imageUrl="/blog/codi-logo-metal-on-grey-texture.png"
    subtitle="Because it sucks to go slow."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'We are dedicated to making developers’ lives easier through open source software, content, and community',
      'Join our community to collaborate as we share what we learn and create products that are meant to improve the lives of developers around the world'
      ]"
    />  
```
Yields:

  <SectionVisualCenter
    topline = "Heavy Metal Codi"
    headline="DEVELOPER & COMMUNITY FIRST"
    title="Learn & Contribute" 
    imageUrl="/blog/codi-logo-metal-on-grey-texture.png"
    subtitle="Because it sucks to go slow."
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'We are dedicated to making developers’ lives easier through open source software, content, and community',
      'Join our community to collaborate as we share what we learn and create products that are meant to improve the lives of developers around the world'
      ]"
    />    
### Sample
---

Add this extension markdown :


```
  <SectionVisualLeft 
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />
```
Yields:

  <SectionVisualLeft 
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />
### Sample
---

Add this extension markdown :


```
  <SectionVisualRight 
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />
```
Yields:

  <SectionVisualRight 
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />

### Sample
---

Add this extension markdown :


  ```
  <SectionVisualCenter
    topline = "topline  - Lorem ipsum dolor sit amet"
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
  />
```
Yields:

  <SectionVisualCenter 
    topline = "topline  - Lorem ipsum dolor sit amet"
    videoUrl="https://www.youtube.com/embed/zT2ce3G-bU0" 
  />

### Sample
---

Add this extension markdown :


```
  <SectionVisualCenter
    topline = "topline  - Bouncy Codi"
    videoUrl="/blog/Logo-sun-codi-black-text-blue-bg.mp4"  
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />
```
Yields:

  <SectionVisualCenter 
    topline = "topline  - Bouncy Codi"
    videoUrl="/blog/Logo-sun-codi-black-text-blue-bg.mp4" 
    headline="headline - Lorem ipsum dolor sit amet"
    title="title - Lorem ipsum dolor sit amet" 
    subtitle="subtitle - Lorem ipsum dolor sit amet"
    button1Text="Button 1"
    button1Link="/#mc_signup"
    button2Text="Button 2"
    button2Link="https://github.com/docker-slim/docker-slim"
    :bullets = "[
      'Bullet # 1 - Lorem ipsum dolor sit amet',
      'Bullet # 2 - Lorem ipsum dolor sit amet'
    ]"
  />
