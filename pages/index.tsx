import { CSSProperties, Fragment, useState } from 'react';

import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import classNames from 'classnames';
import { useDialogState } from 'reakit/Dialog';

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

const EmailDialog = dynamic(
  () => import('~/components/EmailDialog/EmailDialog'),
  { ssr: false },
);

type StaticProps = {
  repositories: RepositoryInfo[];
};

const Index: NextPage<StaticProps> = ({ repositories = [] }) => {
  const { title, handleSectionChange } = useSectionAnchor();

  const [isFooterTransitioning, setFooterTransitioning] =
    useState(false);
  const [isNavigationHeaderHidden, setNavigationHeaderHidden] =
    useState(false);

  const emailDialog = useDialogState();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Computer Engineer, Web Developer. Passionate about anything computer-related."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://bohler.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Renato Böhler" />
        <meta
          property="og:description"
          content="Computer Engineer, Web Developer. Passionate about everything computer-related."
        />
        <meta property="og:image" content="/images/social.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bohler.dev" />
        <meta property="twitter:url" content="https://bohler.dev/" />
        <meta name="twitter:title" content="Renato Böhler" />
        <meta
          name="twitter:description"
          content="Computer Engineer, Web Developer. Passionate about everything computer-related."
        />
        <meta name="twitter:image" content="/images/social.png" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

      <KeyboardNavigation />
      <EmailDialog dialog={emailDialog} />

      <div
        className={classNames(styles.mainContainer, {
          [styles.transitioning]: isFooterTransitioning,
        })}
      >
        <SectionAnchor
          sectionName={HEADER.name}
          onChange={handleSectionChange}
        />
        <Header
          isNavigationHeaderHidden={isNavigationHeaderHidden}
          onEmailDialogOpen={emailDialog.show}
        />

        <main>
          {SECTIONS.map(({ name, Component }) => (
            <Fragment key={name}>
              <SectionAnchor
                sectionName={name}
                onChange={handleSectionChange}
              />
              <Component
                repositories={repositories}
                onEmailDialogOpen={emailDialog.show}
              />
            </Fragment>
          ))}

          <EndTransition />
        </main>
      </div>

      <Footer
        onFooterTransitionTrigger={setFooterTransitioning}
        onNavigationHeaderTrigger={setNavigationHeaderHidden}
        isNavigationHeaderHidden={isNavigationHeaderHidden}
        onEmailDialogOpen={emailDialog.show}
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
