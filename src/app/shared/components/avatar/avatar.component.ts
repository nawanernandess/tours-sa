import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-avatar',
  standalone: true,
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
  readonly avatar = input<string | IconDefinition>('');
  readonly size = input<'large' | 'medium' | 'small' | 'profile'>('medium');
}
