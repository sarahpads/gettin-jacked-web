import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(weight: number, equipment: string): unknown {
    let unit = 'lbs';

    switch (equipment) {
      case 'smith':
        unit = 'plates'
        break;
    }

    return `${weight} ${unit}`;
  }

}
