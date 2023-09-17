import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements AfterViewInit {
  @ViewChild('inputField', { static: true }) inputField!: ElementRef;
  inputValue: string = '';

  ngAfterViewInit() {
    fromEvent(this.inputField?.nativeElement, 'keydown').pipe(
      map((event:any)=> event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.inputValue = value
      console.log(`Input value changed to: ${this.inputValue}`);
    });
  }
}
