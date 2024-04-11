import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkfy'
})
export class LinkfyPipe implements PipeTransform {

  transform(text: string): string {
    if(!text){
      return text
    }
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    return text.replace(urlRegex, (url)=>{
      return `<a href="${url}" target="_blank">${url}</a>`;
    })
  }

}
