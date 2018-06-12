import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToArray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: string, args?: any): string[] {
    return (null !== value) ? value.split('\\n') : [];
  }

}
