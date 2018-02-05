import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPickerWrapperComponent),
  multi: true
};

@Component({
  selector: 'app-color-picker-wrapper',
  templateUrl: './color-picker-wrapper.component.html',
  providers: [CUSTOM_CONTROL_VALUE_ACCESSOR]
})
export class ColorPickerWrapperComponent implements OnInit, ControlValueAccessor {

  private innerValue: any = '';

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  constructor() { }

  // get accessor
  get color(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set color(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
