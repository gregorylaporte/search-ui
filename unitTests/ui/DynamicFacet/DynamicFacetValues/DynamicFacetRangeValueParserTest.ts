import { DynamicFacetRangeValueParser } from '../../../../src/ui/DynamicFacet/DynamicFacetValues/DynamicFacetRangeValueParser';
import { DynamicFacetRangeValueFormat } from '../../../../src/ui/DynamicFacet/DynamicFacetRange';
import { DynamicFacetRangeTestUtils } from '../DynamicFacetRangeTestUtils';

export function DynamicFacetRangeValueParserTest() {
  describe('DynamicFacetRangeValueParser', () => {
    let parser: DynamicFacetRangeValueParser;

    describe('testing with the number format', () => {
      beforeEach(() => {
        const facet = DynamicFacetRangeTestUtils.createFakeFacet({
          valueFormat: DynamicFacetRangeValueFormat.number,
          valueSeparator: 'to'
        });
        parser = new DynamicFacetRangeValueParser(facet);
      });

      describe('testing formatDisplayValue', () => {
        it(`when the value is a integer
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: 10, end: 20 });
          expect(value).toBe('10 to 20');
        });

        it(`when the value is a big integer
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: 1000, end: 100000 });
          expect(value).toBe('1,000 to 100,000');
        });

        it(`when the value is a float
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: 0.99, end: 1.001 });
          expect(value).toBe('0.99 to 1.001');
        });
      });

      describe(`testing validate`, () => {
        it(`when sending a valid range
        should return it correctly validated`, () => {
          const validatedRange = parser.validate({
            start: '0.1',
            end: 10,
            endInclusive: true
          });

          expect(validatedRange).toEqual({
            start: 0.1,
            end: 10,
            endInclusive: true
          });
        });

        it(`when sending a invalid range
        should return null`, () => {
          const validatedRange = parser.validate({
            start: 'yes',
            end: 10,
            endInclusive: true
          });

          expect(validatedRange).toBeNull();
        });
      });

      it('should formatValue correctly', () => {
        const value = parser.formatValue({ start: 0.0191, end: 100000, endInclusive: true });
        expect(value).toBe('0.0191..100000inc');
      });

      describe(`testing parse`, () => {
        it(`when sending a valid value
        should return the range correctly`, () => {
          const range = parser.parse('0.1..10exc');

          expect(range).toEqual({
            start: 0.1,
            end: 10,
            endInclusive: false
          });
        });

        it(`when sending a value with a wrong range
        should return null`, () => {
          const range = parser.parse('hello..10inc');
          expect(range).toBeNull();
        });

        it(`when sending a value with an unknown endInclusive value
        should return null`, () => {
          const range = parser.parse('1..100ish');
          expect(range).toBeNull();
        });
      });
    });

    describe('testing with the date format', () => {
      beforeEach(() => {
        const facet = DynamicFacetRangeTestUtils.createFakeFacet({ valueFormat: DynamicFacetRangeValueFormat.date, valueSeparator: 'to' });
        parser = new DynamicFacetRangeValueParser(facet);
      });

      describe('testing formatDisplayValue', () => {
        it(`when the value is a Date object
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: new Date('April 17 1999'), end: new Date('6/23/2016') });
          expect(value).toBe('4/17/1999 to 6/23/2016');
        });

        it(`when the value is a integer
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: 924321600000, end: 1466662921705 });
          expect(value).toBe('4/17/1999 to 6/23/2016');
        });

        it(`when the value is a string
          should return the format correctly`, () => {
          const value = parser.formatDisplayValue({ start: 'April 17 1999', end: '6/23/2016' });
          expect(value).toBe('4/17/1999 to 6/23/2016');
        });
      });

      describe(`testing validate`, () => {
        it(`when sending a valid range
        should return it correctly validated`, () => {
          const validatedRange = parser.validate({
            start: '4/17/1999',
            end: '6/23/2016',
            endInclusive: true
          });

          expect(validatedRange).toEqual({
            start: '1999/04/17@00:00:00',
            end: '2016/06/23@00:00:00',
            endInclusive: true
          });
        });

        it(`when sending a invalid range
        should return null`, () => {
          const validatedRange = parser.validate({
            start: 'yes',
            end: 'no',
            endInclusive: true
          });

          expect(validatedRange).toBeNull();
        });
      });

      describe(`testing parse`, () => {
        it(`when sending a valid value
        should return the range correctly`, () => {
          const range = parser.parse('1999/04/17@00:00:00..2016/06/23@00:00:00inc');

          expect(range).toEqual({
            start: '1999/04/17@00:00:00',
            end: '2016/06/23@00:00:00',
            endInclusive: true
          });
        });

        it(`when sending a value with a wrong range
        should return null`, () => {
          const range = parser.parse('1999/19/17@00:00:00..2016/06/23@00:00:00inc');
          expect(range).toBeNull();
        });

        it(`when sending a value with an unknown endInclusive value
        should return null`, () => {
          const range = parser.parse('1999/04/17@00:00:00..2016/06/23@00:00:00ish');
          expect(range).toBeNull();
        });
      });

      it('should formatValue correctly', () => {
        const value = parser.formatValue({
          start: '1999/04/17@00:00:00',
          end: '2016/06/23@00:00:00',
          endInclusive: true
        });

        expect(value).toBe('1999/04/17@00:00:00..2016/06/23@00:00:00inc');
      });
    });
  });
}
