import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.indexOf('jpg')>-1) {
      return '../../../assets/file-icons_jpg.png'
    }
    if(value.indexOf('png')>-1) {
      return '../../../assets/file-icons_png.png'
    }
    if(value.indexOf('txt')>-1) {
      return '../../../assets/file-icons_txt.png'
    }
    if(value.indexOf('zip')>-1) {
      return '../../../assets/file-icons_zip.png'
    }
    if(value.indexOf('rar')>-1) {
      return '../../../assets/file-icons_rar.png'
    }
    return '';
  }

}
