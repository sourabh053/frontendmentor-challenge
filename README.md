# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

This is my first Frontend Mentor Challenge and i have done this using basic HTML/CSS and JS without using any framworks.Learned a lot of new things during this project and i will do more of these chellenges in the future as i keep learning and improving.

### The challenge

The challenge was building out a results summary component and getting it as close to the given design as possible. The results summary component included 2 parts. Left part for the total score and right part for the individual score in each field. there were 4 types of fileds i.e. reaction,memory,verbal,visual (Check Screenshots for more details).right side also included a button.


### Screenshot

![](./design/Sreenshot%201.png)
![](./design/Screenshot%202.png)

### Links

- Live Site URL: [Live site](https://keen-lebkuchen-329504.netlify.app/)

## My process

firstly i made a rough blueprint of the site a figured out where to use what element and which element should be nested into other and which elements should have classes and ids. after making basic html i stated on css and started to find the colors used in the project and with the help of google also got to learn some new JS concepts.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Basic JavaScript
- Flexbox


### What I learned

I learned many new things during this project in HTML/CSS and JS.

-> In HTML i lerned that the inline css is superier to internal and external css so if a class is applied to the whole section and u want one of its children to be of other color then we can simply apply inline css and it will overright the parent element design. Like in below example boxs class is applied to the h6 tag which has light red color.
```html
 <h6 class="boxs"><span></span></h6>
```
```css
.boxs {
  color: hsl(0, 60%, 57%);
}
```
but we want the span element to be of other color then we can simply apply inline css here like this
```html
<h6 class="boxs" style="color: hsl(39, 85%, 56%);"><span ></span></h6>
```

-> In CSS i learned a lot of new properties like box-sizing,how to apply gradient,about hsl and hsla colors, about rgb and grba colors,min-height etc. But the most intersting thing i leraned is about Media Queries and how to make a site responsive so that it works well with all screen sizes.

-> In JS i learned how to store data from external local JSON file in a JavaScript variable by using fetch API and how to use the local JSON data to dynamically populate the your content. I also leraned about how to give source for a image using JS. 

```js
fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("rxn").innerText = data[0].category;
      document.getElementById("score1").innerText = data[0].score+ "     ";
      document.getElementById("image1").src = data[0].icon;
    })
```

### Useful resources

- [w3schools](https://www.w3schools.com/) - This site helped me a lot in figuring out CSS properties.

## Author

- Frontend Mentor - [@sourabh053](https://www.frontendmentor.io/profile/sourabh053)
- LinkdIn - [Sourabh Thakur](https://www.linkedin.com/in/sourabh-thakur-b71a68250/)

