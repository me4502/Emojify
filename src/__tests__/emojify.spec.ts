import { emojify } from '../emojify';

function mockRandom(value: number, fn: Function): (...args: any[]) => any {
    return function (this: unknown, ...args: any[]) {
        jest.spyOn(global.Math, 'random').mockReturnValue(value);
        const returnValue = fn.apply(this, args);
        jest.spyOn(global.Math, 'random').mockRestore();
        return returnValue;
    };
}

const SIMPLE_TEXT = 'he see carrot tree house';

describe('emojify', () => {
    it(
        'should emojify some simple text',
        mockRandom(0.0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 0,
                    replace: false,
                    replaceChance: 0,
                    tripleChance: 0,
                    tripleCooldown: 0
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some simple text with multimoji',
        mockRandom(0.0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 1.0,
                    replace: false,
                    replaceChance: 0,
                    tripleChance: 0,
                    tripleCooldown: 0
                })
            ).toMatchSnapshot();
        })
    );

    it(
        'should emojify some simple text with replace mode',
        mockRandom(0.0, () => {
            expect(
                emojify(SIMPLE_TEXT, {
                    multimojiChance: 0,
                    replace: true,
                    replaceChance: 1.0,
                    tripleChance: 0,
                    tripleCooldown: 0
                })
            ).toMatchSnapshot();
        })
    );
});
