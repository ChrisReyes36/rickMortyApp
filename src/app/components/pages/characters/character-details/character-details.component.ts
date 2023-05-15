import { Observable, take } from 'rxjs';
import { Component } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@app/shared/services/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  character$: Observable<Character> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.character$ = this.characterSvc.getDetails(id);
      }
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
