module.exports = {
    type: 'react-component',
    build: {
        externals: {
            'react': 'React'
        },
        global: 'y',
        jsNext: true,
        umd: true
    },
    babel: {
        stage: 0,
        optional: ['runtime']
    }
};
