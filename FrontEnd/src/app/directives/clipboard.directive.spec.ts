import { ClipboardDirective } from './clipboard.directive';
import { ElementRef } from '@angular/core';

describe('TsiClipboardDirective', () => {
  it('should create an instance', () => {
    const directive = new ClipboardDirective(new ElementRef(document));
    expect(directive).toBeTruthy();
  });
});
