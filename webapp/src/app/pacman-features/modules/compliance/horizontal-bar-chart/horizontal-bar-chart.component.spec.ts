import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HorizontalBarChartComponent } from "./horizontal-bar-chart.component";

describe("HorizontalBarChartComponent", () => {
  let component: HorizontalBarChartComponent;
  let fixture: ComponentFixture<HorizontalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalBarChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
