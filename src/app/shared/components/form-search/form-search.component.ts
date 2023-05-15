import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `<input
    #inputSeach
    autofocus
    type="text"
    class="form-control-lg"
    placeholder="Search..."
    (keyup)="onSearch(inputSeach.value)"
  />`,
  styles: ['input { width: 100%; }'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch = (value: string) => {
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    } else if (!value) {
      this.router.navigate(['/home']);
    }
  };
}
