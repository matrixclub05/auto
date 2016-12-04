import { Injectable } from '@angular/core';

function _window() : any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class NativeWindowTools
{
    public get nativeWindow() : any {
        return _window();
    }

    public isElementInViewPort(nativeElement:any)
    {
        var rect = nativeElement.getBoundingClientRect();
        var html = this.nativeWindow.document.documentElement;

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    }
}