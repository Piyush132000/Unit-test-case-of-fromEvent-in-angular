import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldComponent],
    });
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit input value changes', fakeAsync(() => {
    fixture.detectChanges(); // Detect changes after component creation

    const inputElement = component.inputField.nativeElement;
    const mockValue = 'TestValue';

    inputElement.value = mockValue;
    inputElement.dispatchEvent(new Event('keydown'));
    fixture.detectChanges();

    tick(1001); // Wait for debounceTime (300ms + 1ms buffer)
    fixture.detectChanges();

    expect(component.inputValue).toBe(mockValue);

    // Add additional assertions based on your logic for handling value changes
  }));
});
