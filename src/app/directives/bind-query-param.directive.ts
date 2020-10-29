import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[bindQueryParam]',
})
export class BindQueryParamDirective {
    @Input('bindQueryParam') paramKey: string;

    constructor(private ngControl: NgControl) { }

    public ngOnInit(): void {
        const queryParams: URLSearchParams = new URLSearchParams(location.search);
        if (queryParams.has(this.paramKey)) {
            this.ngControl.control.patchValue(queryParams.get(this.paramKey));
        }
    }
}