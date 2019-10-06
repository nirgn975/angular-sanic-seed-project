import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'assp-feedback-message',
  templateUrl: './feedback-message.component.html',
  styleUrls: ['./feedback-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackMessageComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
  ) { }

}
