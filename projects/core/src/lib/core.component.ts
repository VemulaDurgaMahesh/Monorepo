import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      Welcome to Monorepo project!!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
