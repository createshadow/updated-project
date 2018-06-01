import {Injectable} from "@angular/core";

@Injectable()
export class PromoGradesService {

  public irGrades = [
    {
      term: 12,
      ranges: [
        {from: 400, to: 799, ir: 0.45},
        {from: 800, to: 1199, ir: 0.45},
        {from: 1200, to: 1999, ir: 0.45},
        {from: 2000, to: 2999, ir: 0.45},
        {from: 3000, to: 4000, ir: 0.45},
      ]
    }, {
      term: 8,
      ranges: [
        {from: 400, to: 799, ir: 0.8},
        {from: 800, to: 1199, ir: 0.8},
        {from: 1200, to: 1999, ir: 0.8},
        {from: 2000, to: 2999, ir: 0.8},
        {from: 3000, to: 4000, ir: 0.76},
      ]
    },
    {
      term: 7,
      ranges: [
        {from: 400, to: 799, ir: 0.85},
        {from: 800, to: 1199, ir: 0.85},
        {from: 1200, to: 1999, ir: 0.85},
        {from: 2000, to: 2999, ir: 0.82},
        {from: 3000, to: 4000, ir: 0.77},
      ]
    },
    {
      term: 6,
      ranges: [
        {from: 400, to: 799, ir: 0.95},
        {from: 800, to: 1199, ir: 0.93},
        {from: 1200, to: 1999, ir: 0.88},
        {from: 2000, to: 2999, ir: 0.83},
        {from: 3000, to: 4000, ir: 0.78},
      ]
    },
    {
      term: 5,
      ranges: [
        {from: 400, to: 799, ir: 0.99},
        {from: 800, to: 1199, ir: 0.94},
        {from: 1200, to: 1999, ir: 0.89},
        {from: 2000, to: 2999, ir: 0.84},
        {from: 3000, to: 4000, ir: 0.79},
      ]
    },
    {
      term: 4,
      ranges: [
        {from: 400, to: 799, ir: 0.86},
        {from: 800, to: 1199, ir: 0.83},
        {from: 1200, to: 1999, ir: 0.8},
        {from: 2000, to: 2999, ir: 0.77},
        {from: 3000, to: 4000, ir: 0.74},
      ]
    },
    {
      term: 3,
      ranges: [
        {from: 400, to: 799, ir: 0.86},
        {from: 800, to: 1199, ir: 0.83},
        {from: 1200, to: 1999, ir: 0.8},
        {from: 2000, to: 2999, ir: 0.77},
        {from: 3000, to: 4000, ir: 0.74},
      ]
    },
    {
      term: 2,
      ranges: [
        {from: 400, to: 799, ir: 0.86},
        {from: 800, to: 1199, ir: 0.83},
        {from: 1200, to: 1999, ir: 0.8},
        {from: 2000, to: 2999, ir: 0.77},
        {from: 3000, to: 4000, ir: 0.74},
      ]
    },
    {
      term: 1,
      ranges: [
        {from: 400, to: 799, ir: 0.86},
        {from: 800, to: 1199, ir: 0.83},
        {from: 1200, to: 1999, ir: 0.8},
        {from: 2000, to: 2999, ir: 0.77},
        {from: 3000, to: 4000, ir: 0.74},
      ]
    }
  ]

}
