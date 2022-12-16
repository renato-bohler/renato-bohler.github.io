import { Fragment, useState } from 'react';

import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import classNames from 'classnames';

import fetchProjectDetails, {
  RepositoryInfo,
} from '~/api/fetchProjectDetails';
import EndTransition from '~/components/EndTransition/EndTransition';
import KeyboardNavigation from '~/components/KeyboardNavigation/KeyboardNavigation';
import SectionAnchor from '~/components/SectionAnchor/SectionAnchor';
import useSectionAnchor from '~/components/SectionAnchor/useSectionAnchor';
import Footer from '~/components/sections/Footer/Footer';
import Header from '~/components/sections/Header/Header';
import { HEADER, SECTIONS } from '~/consts/sections.const';

import styles from './index.module.css';

type StaticProps = {
  repositories: RepositoryInfo[];
};

const Index: NextPage<StaticProps> = ({ repositories = [] }) => {
  const { title, handleSectionChange } = useSectionAnchor();

  const [progress, setProgress] = useState(0);
  const isMainContentTransitioning = progress > 0;

  const [isNavigationHeaderHidden, setNavigationHeaderHidden] =
    useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Renato Böhler: frontend developer"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

      <KeyboardNavigation />

      <div
        className={classNames(styles.mainContainer, {
          [styles.transitioning]: isMainContentTransitioning,
        })}
        style={
          isMainContentTransitioning
            ? {
                transform: `scale(${1 - progress * 0.1}) translateY(${
                  progress * 1000
                }px)`,
                borderRadius: progress * 50,
              }
            : {}
        }
      >
        <SectionAnchor
          sectionName={HEADER.name}
          onChange={handleSectionChange}
        />
        <Header isNavigationHeaderHidden={isNavigationHeaderHidden} />

        <main>
          {SECTIONS.map(({ name, Component }) => (
            <Fragment key={name}>
              <SectionAnchor
                sectionName={name}
                onChange={handleSectionChange}
              />
              <Component repositories={repositories} />
            </Fragment>
          ))}

          <EndTransition />
        </main>
      </div>

      <Footer
        onProgressChange={setProgress}
        onNavigationHeaderTrigger={setNavigationHeaderHidden}
        isNavigationHeaderHidden={isNavigationHeaderHidden}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    repositories: [
      await fetchProjectDetails({
        owner: 'renato-bohler',
        repo: 'logossim',
      }),
      await fetchProjectDetails({
        owner: 'renato-bohler',
        repo: 'what-the-filter',
      }),
      await fetchProjectDetails({
        owner: 'renato-bohler',
        repo: 'redux-form-input-masks',
        packageName: 'redux-form-input-masks',
      }),
      await fetchProjectDetails({
        owner: 'renato-bohler',
        repo: 'renato-bohler.github.io',
      }),
    ].filter(Boolean),
  },
});

export default Index;
