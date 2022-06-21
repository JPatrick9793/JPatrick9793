import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JPatrick9793/JPatrick9793.git', // Update to point to your repository
        user: {
            name: 'John Conway', // update to use your name
            email: 'jpatrick9793@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);