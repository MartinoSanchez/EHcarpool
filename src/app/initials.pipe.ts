import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(name:string, lastname:string): string {
    return (name.charAt(0) + lastname.charAt(0));
  }

}
