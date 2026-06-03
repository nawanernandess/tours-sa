import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [NgClass],
  template: `
    <div>
      <img
        [ngClass]="{
          large: size() === 'large',
          medium: size() === 'medium',
          small: size() === 'small',
          profile: size() === 'profile'
        }"
        [src]="avatar()"
        alt="avatar"
      />
    </div>
  `,
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  readonly avatar = input('');
  readonly size = input<'large' | 'medium' | 'small' | 'profile'>('medium');
}
