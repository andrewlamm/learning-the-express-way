# Contributing to Learning the Expressway

Hello! Thanks for contributing to this project! Whether it's a bug report or a new lesson, all improvements are welcome. The following will walk you through the contributing process and ensure that your contribution will be sucessful.      

## Reporting Bugs

This section guides you through the process of submitting a bug report.     
Firstly, please check out [this list](https://github.com/superandybean/learning-the-express-way/issues) and make sure that your bug has not already been reported. When reporting your bug, please be as specific as possible, such as including steps to reproduce the bug, screenshots, device and browser, etc. In addition, add screenshots if necessary. A [recommended template](asdf) is provided to help ensure that all information is provided and to help us resolve the bug quicker. When submitting the report, please use a clear and concise title, and also tag the issue with the "bug" tag.

## Suggesting Enhancements

Have any suggestions? This is the guide for you.       
Similarly to submitting a bug report, check out [this list](https://github.com/superandybean/learning-the-express-way/labels/enhancement) to see if your suggestion has already been suggested. When creating the enhancement post, please be as precise and clear as possible, including images if necessary. Additionally, use a clear title and tag the issue with the "enhancement" tag.

## Contributing Code

Want to take it to your own hands and fix the bug or implement your suggestion? This step-by-step guide will help aid you through this process.      
Firstly, create a [fork](https://github.com/superandybean/learning-the-express-way/fork) of this repository to access and edit the code. After you're finished, create a pull request [here](https://github.com/superandybean/learning-the-express-way/compare). In the pull request, please add specific details of what you changed/fixed, such as documentation changes, bug fixes, or enhancements, and also provide screenshots if necessary. A [template]() is provided to help guide you through this and will ensure that your pull request will be as specific as possible. Additionally, when creating your request, be sure to tag it under the appropriate tag.

## Submitting a Lesson

You wanna make your own lesson? It's simple!      
Firstly, [fork](https://github.com/superandybean/learning-the-express-way/fork) this repository and then create a markdown (.md or .mdx) file with an appropriate name in the [lessons folder](https://github.com/superandybean/learning-the-express-way/tree/master/lessons). An mdx file is recommended as it allows you to use textbook elements. In the heading of the file, please add the code
```
---
title: 'EXAMPLE TITLE'
slug: /lesson/EXAMPLE_LINK
---
```
where the slug is an appropriate link to your lesson. Example [.md](https://github.com/superandybean/learning-the-express-way/blob/master/lessons/exampleMd.md) and [.mdx](https://github.com/superandybean/learning-the-express-way/blob/master/lessons/exampleMdx.mdx) files are provided, and their results are shown [here](https://lew.sites.tjhsst.edu/template/md) and [here](https://lew.sites.tjhsst.edu/template/mdx) respectively. After that, please update the [lessonList.yml](https://github.com/superandybean/learning-the-express-way/blob/master/data/lessonList.yml) file and add your lesson in the appropriate order. Use the format
```
- title: 'EXAMPLE TITLE'
  description: 'Example description.'
  extraLesson: bool
```
where the title name matches exactly with the one found in your markdown file. Additionally, provide a short 1-2 sentence summary of your lesson with the description argument. The extraLesson argument is optional; only use it if your lesson is not part of the curriculum and is considered an extra one. After that, submit a pull request mentioning what you added in your lesson and tag your pull request with the "new lesson" tag.
