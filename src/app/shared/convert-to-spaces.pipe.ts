import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@ Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacePipe implements PipeTransform {

    transform(value: String , character: String): String {
        return value.replace('character', ' ');
    }

}

