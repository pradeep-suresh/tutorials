Inline -> Add the style attribute to the HTML element (Avoid!)

Internal Style Sheet

External Style Sheet
<link> Attribute rel, href 
<link rel="stylesheet" href="style.css" />


1. element (type) selector
2. universal selector (*)jkl
3. class selector (.)
4. id selector(#) (Targets element that already have some styling attached to it)
5. Advanced selectors ?
6. Reset CSS ?
7. Combinators ?

color, background-color

TimesNewRoman is the default font
font-family, font-style, font-weight, text-decoration, font-size

text-align  - Aligns the text within the container
line-height - Compared to the container 
letter-spacing, word-spacing


Lists: list-style-type, margin, padding

Box Model (!important)
margin border padding content

Cascade
Specificity
inheritance

Table (!border-collapse)

Display (inline, block, none)

Position 

1. Static - Normal flow of the page (default)
2. Relative - Place the component relative to the static position using left, right, top, bottom
3. Fixed - Relative to the viewport
4. Absolute - Relative to the parent element 
5. Sticky - Moves with the scroll

CSS units 

1. em - Font size of the parent
2. rem - multiples of the html body tag (default is 16px)
3. vh, vw

Math functions
max, min