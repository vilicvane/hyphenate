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
                hyphenated: 'camel-Case-String'
            },
            {
                original: 'standalone',
                hyphenated: 'standalone'
            },
            {
                original: 'CapitalizedCase',
                hyphenated: 'Capitalized-Case'
            },
            {
                original: 'CapitalizedCase',
                hyphenated: 'Capitalized-Case'
            },
            {
                original: 'CapitalizedXCase',
                hyphenated: 'Capitalized-X-Case'
            },
            {
                original: 'JSONFile',
                hyphenated: 'JSON-File'
            },
            {
                original: 'HelloWORLD',
                hyphenated: 'Hello-WORLD'
            },
            {
                original: 'HowAREYou',
                hyphenated: 'How-ARE-You'
            }
        ] 
    },
    {
        name: 'phrase with number',
        cases: [
            {
                original: 'camelCaseString8',
                hyphenated: 'camel-Case-String-8'
            },
            {
                original: '7Days',
                hyphenated: '7-Days'
            },
            {
                original: 'hello2015',
                hyphenated: 'hello-2015'
            },
            {
                original: 'abc123def',
                hyphenated: 'abc-123-def'
            },
            {
                original: 'abc.123.def',
                hyphenated: 'abc-123-def'
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
                hyphenated: 'And-yes-man'
            }
        ] 
    },
    {
        name: 'with given connector',
        cases: [
            {
                original: 'someText',
                hyphenated: 'some_Text'
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
                hyphenate(oneCase.original, {
                    connector: caseGroup.connector
                }).should.equal(oneCase.hyphenated);
                
                hyphenate(oneCase.original, {
                    connector: caseGroup.connector,
                    lowerCase: true
                }).should.equal(oneCase.hyphenated.toLowerCase());
            }
        });
    }
});
