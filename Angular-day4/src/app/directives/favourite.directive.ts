import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appFavourite]'
})
export class FavouriteDirective {
  @Input () dataResult : any;
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.dataResult.isToken = !this.dataResult.isToken;
    this.dataResult.isToken ? this.dataResult.amount += 1 : this.dataResult.amount -= 1;
    if(this.dataResult.isToken === true) {
    this.el.nativeElement.style.color = "red";
    }
    else this.el.nativeElement.style.color = "grey";
  }

}
