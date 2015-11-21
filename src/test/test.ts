import hyphenate, { hyphenate as theSameHyphenate } from '../index';

interface Case {
    original: string;
    hyphenated: string;
}

interface CaseGroup {
    name: string;
    cases: Case[];
    connector?: string;
}

let caseGroups: CaseGroup[] = [
    {
        name: 'camel case',
        cases: [
            {
                original: 'camelCaseString',
                hyphenated: 'camel-case-string'
            },
            {
                original: 'standalone',
                hyphenated: 'standalone'
            },
            {
                original: 'CapitalizedCase',
                hyphenated: 'capitalized-case'
            },
            {
                original: 'CapitalizedCase',
                hyphenated: 'capitalized-case'
            },
            {
                original: 'CapitalizedXCase',
                hyphenated: 'capitalized-x-case'
            },
            {
                original: 'JSONFile',
                hyphenated: 'json-file'
            },
            {
                original: 'HelloWORLD',
                hyphenated: 'hello-world'
            },
            {
                original: 'HowAREYou',
                hyphenated: 'how-are-you'
            }
        ] 
    },
    {
        name: 'phrase with number',
        cases: [
            {
                original: 'camelCaseString8',
                hyphenated: 'camel-case-string8'
            },
            {
                original: '7Days',
                hyphenated: '7-days'
            }
        ] 
    },
    {
        name: 'splitted',
        cases: [
            {
                original: '-hello,world',
                hyphenated: 'hello-world'
            },
            {
                original: '--hello,world-',
                hyphenated: 'hello-world'
            },
            {
                original: 'already[]splitted_by;;something',
                hyphenated: 'already-splitted-by-something'
            },
            {
                original: '[]And yes, man~',
                hyphenated: 'and-yes-man'
            }
        ] 
    },
    {
        name: 'with given connector',
        cases: [
            {
                original: 'someText',
                hyphenated: 'some_text'
            },
            {
                original: '_hello__world',
                hyphenated: 'hello_world'
            }
        ],
        connector: '_'
    }
];

describe('hyphenate', () => {
    it('should export `default` as well as `hyphenate`', () => {
        hyphenate.should.equal(theSameHyphenate);
    });
    
    for (let caseGroup of caseGroups) {
        it('should hyphenate ' + caseGroup.name, () => {
            for (let oneCase of caseGroup.cases) {
                hyphenate(oneCase.original, caseGroup.connector).should.equal(oneCase.hyphenated);
            }
        });
    }
});
