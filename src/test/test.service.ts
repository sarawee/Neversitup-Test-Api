import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  generatePermutation(input: string): string[] {
    const result: string[] = [];

    function permute(current: string, remaining: string): void {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }

      for (let i = 0; i < remaining.length; i++) {
        const newCurrent = current + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(newCurrent, newRemaining);
      }
    }

    permute('', input);

    return result;
  }

  findOddOccurrence(arr: number[]): number {
    const occurrenceMap: Map<number, number> = new Map();

    for (const num of arr) {
      occurrenceMap.set(num, (occurrenceMap.get(num) || 0) + 1);
    }

    for (const [num, count] of occurrenceMap) {
      if (count % 2 !== 0) {
        return num;
      }
    }

    return 0;
  }

  countSmiley(arr: string[]): number {
    const validSmileys = arr.filter((smiley) => /^[:;][-~]?[)D]$/.test(smiley));
    return validSmileys.length;
  }
}
