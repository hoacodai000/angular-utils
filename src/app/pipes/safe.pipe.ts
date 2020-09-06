import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) { }
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.domSanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.domSanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.domSanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.domSanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}