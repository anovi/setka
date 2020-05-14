export default {
    cdnLink: 'https://cdn.jsdelivr.net/npm/setka/dist/setka.min.css',
    distLink: 'https://github.com/anovi/setka/releases/download/v0.2.0/setka-0.2.0-dist.zip',
    sourceLink: 'https://github.com/anovi/setka/archive/v0.2.0.zip',
    github: 'https://github.com/anovi/setka/',
    url: 'https://anovi.github.io/setka/'
}

export const classes = {

    grid: {
        title: 'Grid',
        container: [
            {items: ['.container','.container-fluid']}
        ],
        row: [
            {items: ['.grid']},
            {items: [null,'-sm','-md','-lg','-xl'], title: '[breakpoint]'},
            {items: ['-2','-3','-4','-5','-6','-7','-8','-9','-10','-11','-12'], title: '[value]'},
            {items: ['.grid-gap-0'], title:'[additional]'},
        ],
        cols: [
            {items: ['.col']},
            {items: [null,'-sm','-md','-lg','-xl'], title: '[breakpoint]'},
            {items: [null,'-1','-2','-3','-4','-5','-6','-7','-8','-9','-10','-11','-12'], title: '[value]'},
        ],
        start: [
            {items: ['.col-start']},
            {items: [null,'-sm','-md','-lg','-xl']},
            {items: [null,'-1','-2','-3','-4','-5','-6','-7','-8','-9','-10','-11', '-12']}
        ],
        end: [
            {items: ['.col-end']},
            {items: [null,'-sm','-md','-lg','-xl']},
            {items: [null,'-1','-2','-3','-4','-5','-6','-7','-8','-9','-10','-11', '-12']}
        ],
    },

    display: {
        title: 'Display property',
        classes: [
            {items: ['.d']},
            {items: [null, '-sm','-md','-lg','-xl']},
            {items: ['-none','-inline','-inline-block','-block','-table','-table-cell','-table-row','-flex','-inline-flex']}
        ]
    },

    flex: {
        title: 'Flex',
        flexOrder: [
            { items: ['.flex'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-row','-column','-row-reverse','-column-reverse'] }
        ],
        
        flexWrap: [
            { items: ['.flex'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-wrap','-nowrap','-wrap-reverse'] }
        ],
        
        flexFill: [
            { items: ['.flex'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-fill'] }
        ],

        flexGrow: [
            { items: ['.flex'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-grow-0', '-grow-1'] }
        ],

        flexShrink: [
            { items: ['.flex'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-shrink-0', '-shrink-1'] }
        ],

        flexJustify: [
            { items: ['.justify-content'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: [ '-start','-end','-center','-between','-around'] }
        ],

        flexAlign: [
            { items: ['.align-items'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-start','-end','-center','-baseline','-stretch'] }
        ],
        
        flexAlignContent: [
            { items: ['.align-content'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-start','-end','-center','-between','-around','-stretch'] }
        ],

        flexAlignSelf: [
            { items: ['.align-self'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-auto','-start','-end','-center','-baseline','-stretch'] }
        ],

        order: [
            { items: ['.order'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-0','-1','-2','-3','-4','-5','-6','-7','-8','-9','-10','-11','-12'] }
        ]
    },

    float: {
        title: 'Float',
        classes: [
            { items: ['.float'] },
            { items: [ null, '-sm', '-md', '-lg', '-xl'] },
            { items: ['-left','-right','-none'] }
        ],
        clearfix: [
            { items: ['.clearfix'] }
        ]
    },

    sizing: {
        title: 'Sizing',
        widths: [
            {items: ['.w','.h']},
            {items: ['-25','-50','-75','-100','-auto'], title: 'value'}
        ],
        maxWidths: [
            {items: ['.mw-100','.mh-100']}
        ]
    },

    spacing: {
        title: 'Spacing',
        margins: [
            {items: ['.m', '.mt','.mb','.ml','.mr','.mx','.my'], align: 'right'},
            {items: [null,'-sm','-md','-lg','-xl']},
            {items: ['-0','-01','-1','-2','-3','-4','-5','-auto']}
        ],
        paddings: [
            {items: ['.p','.pt','.pb','.pl','.pr','.px','.py'],  align: 'right'},
            {items: [null,'-sm','-md','-lg','-xl']},
            {items: ['-0','-01','-1','-2','-3','-4','-5']}
        ]
    },

    text: {
        title: 'Text',
        text: [
            {items: ['.text-justify', '.text-wrap', '.text-nowrap', '.text-truncate' ]},
        ],
        paddings: [
            {items: ['.text'],  align: 'right'},
            {items: [null,'-sm','-md','-lg','-xl']},
            {items: ['-left','-center','-right']}
        ]
    },

    align: {
        title: 'Vertical align',
        classes: [
            {items: [
                '.align-baseline',
                '.align-top',
                '.align-middle',
                '.align-bottom',
                '.align-text-bottom',
                '.align-text-top',
            ]},
        ]
    },

    visibility: {
        title: 'Visibility',
        classes: [
            { items:['.visible', '.invisible'] }
        ]
    }
}