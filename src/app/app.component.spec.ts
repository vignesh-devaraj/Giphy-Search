import { SearchService } from './service/search.service';
import { ISearchResponse } from './interface/search.interface';
import { Observable } from 'rxjs';
import { SearchMockData } from './app.component.spec.mock';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const searchServiceStub = {
    getData(searchInput: string, rating: string, limit: number): Observable<ISearchResponse> {
      return of(SearchMockData.SerachResponse)
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        ResultComponent,
        FooterComponent
      ],
      providers: [
        {provide: SearchService, useValue: searchServiceStub}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Gif Search');
  });

  it("should check the updateSearchValue function", () => {
    spyOn(component, "getData");
    component.updateSearchValue({searchValue: "google", limit: 10});
    expect(component.isInitialLoad).toBeFalsy();
    expect(component.isLoading).toBeTruthy();
    expect(component.isError).toBeFalsy();
    expect(component.getData).toHaveBeenCalled();
  })

  it("should check the getData function", () => {
    component.updateSearchValue({searchValue: "google", limit: 10});
    component.getData();
    expect(component.searchResponse.data.length).toBe(5);
  });
});
