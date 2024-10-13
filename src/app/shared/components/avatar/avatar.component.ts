import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-avatar',
  template: `
    <div>
      <img
        [ngClass]="{
          large: size == 'large',
          medium: size == 'medium',
          small: size == 'small',
          profile: size == 'profile'
        }"
        [src]="avatar"
        alt="avatar"
      />
    </div>
  `,
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @Input() avatar: string | IconDefinition;

  @Input() size: 'large' | 'medium' | 'small' | 'profile' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
