import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Component({
  selector: 'app-character',
  template: `<div class="card">
    <div class="image">
      <a [routerLink]="['/character-details', character.id]">
        <img
          [src]="character.image"
          [alt]="character.name"
          class="card-img-top"
        />
      </a>
    </div>
    <div class="card-inner">
      <div class="header">
        <a [routerLink]="['/character-details', character.id]">
          <h2>{{ character.name | slice : 0 : 15 }}</h2>
        </a>
        <h4 class="text-muted">{{ character.gender }}</h4>
        <small class="text-muted">{{ character.created | date }}</small
        >&nbsp;
        <spam [ngClass]="status()" class="badge rounded-pill">{{
          character.status
        }}</spam>
      </div>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: Character = {} as Character;

  private _status: string = '';

  status(): string {
    if (this.character.status === 'Alive') {
      this._status = 'bg-success';
    } else if (this.character.status === 'Dead') {
      this._status = 'bg-danger';
    } else {
      this._status = 'bg-dark';
    }
    return this._status;
  }
}
