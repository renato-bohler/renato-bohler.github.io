import { Fragment, useState, type CSSProperties } from 'react';

import { type GetStaticProps, type NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import classNames from 'classnames';
import { useDialogState } from 'reakit/Dialog';

import {
  fetchProjectDetails,
  type RepositoryInfo,
} from '~/api/fetchProjectDetails';
import { EndTransition } from '~/components/EndTransition/EndTransition';
import { KeyboardNavigation } from '~/components/KeyboardNavigation/KeyboardNavigation';
import { SectionAnchor } from '~/components/SectionAnchor/SectionAnchor';
import { useSectionAnchor } from '~/components/SectionAnchor/useSectionAnchor';
import { Footer } from '~/components/sections/Footer/Footer';
import { Header } from '~/components/sections/Header/Header';
import { HEADER, SECTIONS } from '~/consts/sections.const';

import styles from './index.module.css';

const EmailDialog = dynamic(
  () =>
    import('~/components/EmailDialog/EmailDialog').then(
      ({ EmailDialog }) => EmailDialog,
    ),
  { ssr: false },
);

type StaticProps = {
  repositories: RepositoryInfo[];
};

const Index: NextPage<StaticProps> = ({ repositories = [] }) => {
  const { handleSectionChange, title } = useSectionAnchor();

  const [progress, setProgress] = useState(0);
  const isMainContentTransitioning = progress > 0;

  const [isNavigationHeaderHidden, setNavigationHeaderHidden] =
    useState(false);

  const emailDialog = useDialogState();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          content="Computer Engineer, Web Developer. Passionate about anything computer-related."
          name="description"
        />

        {/* Open Graph */}
        <meta content="https://bohler.dev/" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Renato Böhler" property="og:title" />
        <meta
          content="Computer Engineer, Web Developer. Passionate about everything computer-related."
          property="og:description"
        />
        <meta content="/images/social.png" property="og:image" />

        {/* Twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="bohler.dev" property="twitter:domain" />
        <meta content="https://bohler.dev/" property="twitter:url" />
        <meta content="Renato Böhler" name="twitter:title" />
        <meta
          content="Computer Engineer, Web Developer. Passionate about everything computer-related."
          name="twitter:description"
        />
        <meta content="/images/social.png" name="twitter:image" />

        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        />
      </Head>

      <KeyboardNavigation />
      <EmailDialog dialog={emailDialog} />

      <div
        className={classNames(styles.mainContainer, {
          [styles.transitioning]: isMainContentTransitioning,
        })}
        style={{ '--scroll': `${progress}` } as CSSProperties}
      >
        <SectionAnchor
          onChange={handleSectionChange}
          sectionName={HEADER.name}
        />
        <Header
          isNavigationHeaderHidden={isNavigationHeaderHidden}
          onEmailDialogOpen={emailDialog.show}
        />

        <main>
          {SECTIONS.map(({ Component, name }) => (
            <Fragment key={name}>
              <SectionAnchor
                onChange={handleSectionChange}
                sectionName={name}
              />
              <Component
                onEmailDialogOpen={emailDialog.show}
                repositories={repositories}
              />
            </Fragment>
          ))}

          <EndTransition />
        </main>
      </div>

      <Footer
        isNavigationHeaderHidden={isNavigationHeaderHidden}
        onEmailDialogOpen={emailDialog.show}
        onNavigationHeaderTrigger={setNavigationHeaderHidden}
        onProgressChange={setProgress}
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
        packageName: 'redux-form-input-masks',
        repo: 'redux-form-input-masks',
      }),
      await fetchProjectDetails({
        owner: 'renato-bohler',
        repo: 'renato-bohler.github.io',
      }),
    ].filter(Boolean),
  },
});

export default Index;
