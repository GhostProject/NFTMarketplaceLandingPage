import Hello from 'components/hello';
import stylesSmall from 'styles/page.small.module.css';
import stylesMedium from 'styles/page.medium.module.css';
import stylesLarge from 'styles/page.large.module.css';

export const dynamic = 'force-static';

const Home = () => (
  <main className={`${stylesSmall.main} ${stylesMedium.main} ${stylesLarge.main}`}>
    <Hello />
  </main>
);

export default Home;
