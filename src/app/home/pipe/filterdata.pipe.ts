import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText || searchText.trim() === '') {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item[searchKey].toLowerCase().includes(searchText);
    });
  }
}
