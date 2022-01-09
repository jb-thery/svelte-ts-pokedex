import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/jb-thery/svelte-ts-pokedex.git',
    user: {
      name: 'jb-thery',
      email: 'jb.thery@flameapp.fr'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
