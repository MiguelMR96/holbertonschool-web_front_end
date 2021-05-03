![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2018/5/9936ba361a3962278900.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210503T214852Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=855c15363baf4e027538b65df16a05791667d5375048b116eddd02158d98bc4d)
Resources
Read or watch:

Sass Basics
Sass control directives: @if, @for, @each and @while
Sass references
The Sass Way
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

General
What Sass means
How to write Sass & Scss file
What is the difference between Sass and Scss
What is the Sass preprocessing
How to declare a variable
How to use nested definition
How to import a Sass file
How to use mixins
How to declare extend/inheritance styles
How to manipulate operators
Requirements
General
Allowed editors: vi, vim, emacs
All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
All your files should end with a new line
All your Scss files should have a comment at the beginning (i.e. syntax above)
All your files should start by a comment describing the task
A README.md file, at the root of the folder of the project, is mandatory
The length of your files will be tested using wc
More Info
Comments for your Scss file:
All your Scss file must start with a comment block

$ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
Install Sass/Scss on Ubuntu 18.04 LTS
$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
