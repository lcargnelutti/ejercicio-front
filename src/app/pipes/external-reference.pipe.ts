import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'externalReference'
})
export class ExternalReferencePipe implements PipeTransform {

  transform(numeroStr: string): number {
    let numeroFormateado = parseInt(numeroStr, 10);
    return numeroFormateado;
  }

}
