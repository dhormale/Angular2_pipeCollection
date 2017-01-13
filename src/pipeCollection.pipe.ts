import {Pipe, PipeTransform} from '@angular/core'
import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';


    @Pipe({name: 'pipeCollection'})
    export class PipeCollection implements PipeTransform {
      
      
    transform(value: number, type: string): number {

      switch(type){
        case "currency":
          {
        
                let formattedValue: number = parseFloat(value);
                
                    if (isNaN(formattedValue))
                        return '$0.00';
                    else                    
                        return new CurrencyPipe('USD').transform(formattedValue, 'USD', true, '1.2-2');
          }
          case "percentage":
                {
                    let formattedValue: number = parseFloat(value);
                    if (isNaN(formattedValue))
                        return '0.00%';
                    else
                        return formattedValue.toFixed(2).toString() + '%';
                }
      }
        
    }
      
      
}
