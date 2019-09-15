# Minesweeper

When I started thinking about which programming language to use to solve the task, I chose JavaScript because is the one I know the best and I was more comfortable to use.

In the html file you can notice there are two different attempts.
In the first attempt I decided to create a table with already empty fields, using JavaScript .
A random number is generated for each mine, determining its position in the table, and the way it is generated is considering the smallest value between the input values of the number of rows and columns.

Using for..loops I then started looping into the table, which I started finding difficult, and I realized that creating a multidimensional array would be a better option.

So I started from the beginning and this time I also realized that I needed to generate different random numbers for the x and y coordinates of the mines.
For a more visual understanding I decided to use the 0 value for the empty spaces.

Using nested for..loops I then started looping into the multidimensional array, and for each position around the mine space, change the value to the amount of mines in the corresponding surrounding spaces.

At this stage this second attempt looks to work better, the output is correct if the mine is one, if the mines are more than one, and they are next to each other there is a conflict of values in one of the surrounding field.

The next step is going to be solving this bug and then transform the array making it look like a table.
