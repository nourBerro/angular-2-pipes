import {Pipe,PipeTransform } from '@angular/core'
@Pipe({
name:"filter"
})
export class FilterPipe implements PipeTransform  {
 transform(value: Array<any>,...arg:any[]): any{
     if(value != undefined)
         return value.filter(x=>{
             return x[arg[0]]==arg[1];
         });
 }
}