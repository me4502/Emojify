import { emojify, type EmojifyOptions } from '../emojify.js';
import { vi, describe, it, expect } from 'vitest';

function mockRandom(
    value: number,
    fn: (...args: unknown[]) => unknown
): (...args: unknown[]) => unknown {
    return function (this: unknown, ...args: unknown[]) {
        vi.spyOn(Math, 'random').mockReturnValue(value);
        const returnValue = fn.apply(this, args);
        vi.spyOn(Math, 'random').mockRestore();
        return returnValue;
    };
}

const SIMPLE_TEXT = 'he see carrot tree house is nice relieve relief';

const COMPLEX_TEXT = `
There is a house in New Orleans
They call the Rising Sun
And it's been the ruin of many a poor boy
And God, I know I'm one

My mother was a tailor
She sewed my new blue jeans
My father was a gamblin' man
Down in New Orleans

Now the only thing a gambler needs
Is a suitcase and trunk
And the only time he'll be satisfied
Is when he's all drunk
`.trim();

const EMPTY_SETTINGS = {
    multimojiChance: 0,
    replace: false,
    replaceChance: 0,
    tripleChance: 0,
    tripleCooldown: 0,
    allowFlags: true,
} satisfies EmojifyOptions;

describe.each([
    ['simple', SIMPLE_TEXT],
    ['complex', COMPLEX_TEXT],
])('emojify %s', (_, text) => {
    it(
        'should emojify some text',
        mockRandom(0, () => {
            expect(emojify(text, EMPTY_SETTINGS)).toMatchSnapshot();
        })
    );

    it(
        'should emojify some text with multimoji',
        mockRandom(0, () => {
            expect(
                emojify(text, {
                    ...EMPTY_SETTINGS,
                    multimojiChance: 1,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some text with replace mode',
        mockRandom(0, () => {
            expect(
                emojify(text, {
                    ...EMPTY_SETTINGS,
                    replace: true,
                    replaceChance: 1,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some text with triple mode',
        mockRandom(0, () => {
            expect(
                emojify(text, {
                    ...EMPTY_SETTINGS,
                    tripleChance: 1,
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some text without flags',
        mockRandom(0, () => {
            expect(
                emojify(text, {
                    ...EMPTY_SETTINGS,
                    allowFlags: false,
                })
            ).toMatchSnapshot();
        })
    );
});
