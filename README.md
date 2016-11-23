# angular-2-pipes

i have created several angular 2 pipes dealing with JSON arrays 

1- filter : which can be used to filter the array by property <br/>
<code>{{posts | filter:'userId':1 json }}</code> <br/>
filter : the pipe   <br/>
first arg is the property name  <br/>
second arg is the value <br/>

2- select filter:  which can be used to select multi proprties from the array object  <br/>
<code>{{posts | select:'userId':'title' | json }}</code> <br/>

to use pipes you need to add those files into your project then import the pipe into your component and declare it in you app module 
https://angular.io/docs/ts/latest/guide/pipes.html
