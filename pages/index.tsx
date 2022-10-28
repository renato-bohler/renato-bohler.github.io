import { Fragment, useState } from 'react';

import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import classNames from 'classnames';

import fetchProjectDetails, {
  RepositoryInfo,
} from '~/api/fetchProjectDetails';
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
        className={classNames(styles['main-container'], {
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

          {/* TODO: move this transition into its own component */}
          <div style={{ height: 'auto' }}>
            <svg
              style={{
                display: 'block',
                width: '100%',
                height: 300,
                transform: 'translateY(5px)',
              }}
              viewBox="50 200 1900 250"
              preserveAspectRatio="xMinYMin slice"
            >
              <path
                d="M0 210L83.3 221.5C166.7 233 333.3 256 500 269.5C666.7 283 833.3 287 1000 272.5C1166.7 258 1333.3 225 1500 217.8C1666.7 210.7 1833.3 229.3 1916.7 238.7L2000 248L2000 501L1916.7 501C1833.3 501 1666.7 501 1500 501C1333.3 501 1166.7 501 1000 501C833.3 501 666.7 501 500 501C333.3 501 166.7 501 83.3 501L0 501Z"
                stroke="var(--theme-primary-dark)"
                fill="none"
              />
              <path
                d="M0 312L83.3 305.7C166.7 299.3 333.3 286.7 500 275.3C666.7 264 833.3 254 1000 263.5C1166.7 273 1333.3 302 1500 305.5C1666.7 309 1833.3 287 1916.7 276L2000 265L2000 501L1916.7 501C1833.3 501 1666.7 501 1500 501C1333.3 501 1166.7 501 1000 501C833.3 501 666.7 501 500 501C333.3 501 166.7 501 83.3 501L0 501Z"
                stroke="var(--theme-secondary-dark)"
                fill="none"
              />
              <path
                d="M0 316L83.3 319.8C166.7 323.7 333.3 331.3 500 327.7C666.7 324 833.3 309 1000 304C1166.7 299 1333.3 304 1500 302.3C1666.7 300.7 1833.3 292.3 1916.7 288.2L2000 284L2000 501L1916.7 501C1833.3 501 1666.7 501 1500 501C1333.3 501 1166.7 501 1000 501C833.3 501 666.7 501 500 501C333.3 501 166.7 501 83.3 501L0 501Z"
                stroke="var(--theme-primary-bright)"
                fill="none"
              />
              <path
                d="M0 337L83.3 342.5C166.7 348 333.3 359 500 363C666.7 367 833.3 364 1000 361.3C1166.7 358.7 1333.3 356.3 1500 352.8C1666.7 349.3 1833.3 344.7 1916.7 342.3L2000 340L2000 501L1916.7 501C1833.3 501 1666.7 501 1500 501C1333.3 501 1166.7 501 1000 501C833.3 501 666.7 501 500 501C333.3 501 166.7 501 83.3 501L0 501Z"
                stroke="var(--theme-secondary-bright)"
                fill="none"
              />
              <path
                d="M0 436L83.3 430C166.7 424 333.3 412 500 405.7C666.7 399.3 833.3 398.7 1000 399.3C1166.7 400 1333.3 402 1500 406C1666.7 410 1833.3 416 1916.7 419L2000 422L2000 501L1916.7 501C1833.3 501 1666.7 501 1500 501C1333.3 501 1166.7 501 1000 501C833.3 501 666.7 501 500 501C333.3 501 166.7 501 83.3 501L0 501Z"
                stroke="var(--theme-primary-bright)"
                opacity={0.5}
                fill="none"
              />
            </svg>
          </div>
        </main>
      </div>

      <Footer
        onProgressChange={setProgress}
        onNavigationHeaderTrigger={setNavigationHeaderHidden}
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
