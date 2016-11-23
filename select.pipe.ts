import {Pipe,PipeTransform } from '@angular/core'
@Pipe({
name:"select"
})
export class SelectPipe implements PipeTransform  {
 transform(value: Array<any>,...args:any[]): any{
     if(value != undefined)
         return value.map(x=>{
             let o:any = {};
             args.forEach(element => {
                  o[element] = x[element];
             
             });
            
             return o
         });
          
 }
}