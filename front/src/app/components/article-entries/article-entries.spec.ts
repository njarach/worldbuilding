import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEntries } from './article-entries';

describe('ArticleEntries', () => {
  let component: ArticleEntries;
  let fixture: ComponentFixture<ArticleEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEntries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleEntries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
