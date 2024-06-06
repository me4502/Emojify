import { emojify } from '../emojify.js';
import { vi, describe, it, expect } from 'vitest';

function mockRandom(
    value: number,
    fn: Function
): (...args: unknown[]) => unknown {
    return function (this: unknown, ...args: unknown[]) {
        vi.spyOn(Math, 'random').mockReturnValue(value);
        const returnValue = fn.apply(this, args);
        vi.spyOn(Math, 'random').mockRestore();
        return returnValue;
    };
}

const SIMPLE_TEXT = 'he see carrot tree house is nice relieve relief';

describe('emojify', () => {
    it(
        'should emojify some simple text',
        mockRandom(0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 0,
                    replace: false,
                    replaceChance: 0,
                    tripleChance: 0,
                    tripleCooldown: 0,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some simple text with multimoji',
        mockRandom(0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 1,
                    replace: false,
                    replaceChance: 0,
                    tripleChance: 0,
                    tripleCooldown: 0,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some simple text with replace mode',
        mockRandom(0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 0,
                    replace: true,
                    replaceChance: 1,
                    tripleChance: 0,
                    tripleCooldown: 0,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some simple text with triple mode',
        mockRandom(0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 0,
                    replace: false,
                    replaceChance: 0,
                    tripleChance: 1,
                    tripleCooldown: 0,
                })
            ).toMatchSnapshot();
        })
    );
});
