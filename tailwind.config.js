// tailwind.config.js
module.exports = {
    theme: {
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            '200px': '200px',
            'unset': 'unset'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'facebook': '#3b5998'
        }),
        fontFamily: {
            'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
            'sans': ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif'],
            'mono': ['Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
        }
    }
}