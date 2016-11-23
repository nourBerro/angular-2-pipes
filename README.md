# angular-2-pipes

i have created several angular 2 pipes dealing with JSON arrays 

1- filter : wich can be used to filter the array by property 
<code>{{posts | filter:'userId':1 json }}</code>
filter : the pipe   
first arg is the property name  
second arg is the value

2- select which can be used to select multi proprties from the array object 
<code>{{posts | select:'userId':'title' | json }}</code>
