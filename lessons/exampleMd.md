---
title: Example Md File
slug: /template/md
---

You can look at the source markdown file [here](https://github.com/superandybean/learning-the-express-way/blob/master/lessons/exampleMd.md) and clicking on the raw button. Remember to include the frontmatter in the beginning of the file, with the correct title and slug tags! And check that the title is the same as the one you added in the [lessonList.yml](https://github.com/superandybean/learning-the-express-way/blob/master/data/lessonList.yml) file.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

Headings 5 and 6 do work, but the styling may be messed up! Also, the table of contents only works for up to heading 2.

> Blockquote
> 
> > You can nest them if you want as well      
>  
> Wow.

Use brackets and parantheses for [links](). One asterick for *italics*, two for **bold**, and three for ***both***!

Lists are easy too.

Just use numbers

1. Like
2. This
3. For
4. A
5. Numbered
6. List

and dashes 

- For
- A
- Bulleted
- List

Inserting an image is just like a link, except you add an exclamation in front!        
![](../src/images/example_html_tag.png)

To embed youtube videos, use the format with `{{youtube: YOUTUBE_LINK}}` like:
{{youtube: https://www.youtube.com/watch?v=cuQxgzEkKxY}}

Finally, for code blocks, use three ticks

```html
<html>
    <body>
        <h1>This is a code block.</h1>
        <h2>You can change the language of the code block by changing the html 
            after the three ticks to another langauge, like css or js.</h2>
    </body>
</html>
```

For inline code blocks, use a singular tick, like `this!`. If you want to use language highlighting, first add the language, then the character ›, then type your code. Like `js›const wow = "wowowow!"`.

Want a horizontal line? Use three dashes like so:

---

Since this is an md file, not an mdx file, you cannot use the other added textbook elements.     

Don't worry about the preivous lesson button below; it's acting weird because this page isn't an actual lesson.
