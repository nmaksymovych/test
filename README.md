## Starter learning project informally named "__formax__"
------

![alt text](https://raw.githubusercontent.com/nmaksymovych/test/master/img/Minions-Crowd.jpg "Logo Title Text 1")

------

__Project contains:__

1. PART-0
   Was to — init this repo :bowtie:
2. PART-1
  * Gotta gulp
  * Read introduction - https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
  * Configure gulp file Use browsync to setup serve - https://browsersync.io/docs/gulp
3. PART-2
  * Install Sass
  * Install Scss
  * Configure gulpfile to compile sass/scss to /styles folder
  * Connect reset/normilize.scss via scss file
  * Create dummy page, with any logo & simple content any styles for page would be a plus 
  https://lh6.googleusercontent.com/auiY5urhMuTvgVeyuy3PN5DS1NexXCfcwXulvgRQFI5GSYm6tDU1a_-6wPYLpxEH2YeK6KXQ2C0o7dGuSMyhlmXoE_5yzF878wf4scsogf07jKGNvPk
4. PART-3
  * Read about variables http://sass-lang.com/guide#topic-2
  * Found how to organize variables in big project http://thesassway.com/beginner/how-to-structure-a-sass-project https://www.sitepoint.com/architecture-sass-project/
  * Read about mixins http://sass-lang.com/guide#topic-6
  * Create few simple mixins ( box-shadow, border-top + border-bottom, background-color)
5. PART-4
  * Configure gulp with autoprefixing - (for scss last safari, chrome, mozilla, ie from v9)
  * Configure gulp with img/svg/jpg/png optimizer - discover difference in image rendering types - http://www.webperformancetoday.com/2014/07/16/eight-tricks-improve-perceived-web-performance/
  * Configure server to share it over network with custom port :****
  * Update gulp file to use variables instead of plain text paths
  * Update gulp file to use autoprefixing, image optimization, serever options as variable objects
6. PART-5 (NEW ❗️❗️❗️)
  * Update project structure to contain to folders
    * dev (folder should contain sass/less, uncompressed images, unbundled js)
    * public (folder should contain css in uncompressed and unbundled format, compressed images, unbundled & uncompressed js)
    * build (folder should contain css in compressed & bundled format, compressed images, compressed & bundled js)
  * Connect injectCss module for gulp
  * Connect SCSS linter
    * Read about linting https://css-tricks.com/stylelint/


###To use project###
__Clone current repository:__
```javascript
  git clone https://github.com/nmaksymovych/test.git
```
__Install all necessary stuff with:__
```javascript
  npm i && bower i
```

__Run it with:__
```javascript
  gulp runMyProject
```