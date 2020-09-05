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
  public transform(val: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.domSanitizer.bypassSecurityTrustHtml(val);
      case 'style':
        return this.domSanitizer.bypassSecurityTrustStyle(val);
      case 'script':
        return this.domSanitizer.bypassSecurityTrustScript(val);
      case 'url':
        return this.domSanitizer.bypassSecurityTrustUrl(val);
      case 'resourceUrl':
        return this.domSanitizer.bypassSecurityTrustResourceUrl(val);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}