$('.chart').segbar([
    {
        palette: [
            '#6C7A89',
            '#ECECEC',
            '#95A5A6',
            '#E67E22',
            '#ABB7B7'
        ],
        data: [
            {  value: 16744 },
            {  value: 6500 },
            {  value: 32750 },
            {  value: 3200 }
        ]
    },
    {
        palette: [
            '#D35400',
            '#F39C12',
            '#F9690E',
            '#F9BF3B',
            '#F27935'
        ],
        data: [
            { title: 'Test 1', value: 6.87 },
            { title: 'Test 2', value: 14.56 },
            { title: 'Test 3', value: 7.82 }
        ]
    },
    {
        data: [
            { title: 'Test 1', value: 10 },
            { title: 'Test 2', value: 10 },
            { title: 'Test 3', value: 20 },
            { title: 'Test 4', value: 5 },
            { title: 'Test 5', value: 30 },
            { title: 'Test 6', value: 5 },
            { title: 'Test 7', value: 20 }
        ]
    }
]).addClass('mb-5');
