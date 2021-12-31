import { useCallback, useEffect, useState } from 'react';

import {
  Section,
  SectionName,
  SECTIONS,
} from '~/consts/sections.const';

type SectionInView = {
  name: SectionName;
  inView: boolean;
};

const useSectionAnchor = (): {
  title: string;
  handleSectionChange: (sectionName: string, inView: boolean) => void;
} => {
  const [activeSection, setActiveSection] = useState<Section>(
    SECTIONS[0],
  );

  const [sections, setSections] = useState<SectionInView[]>(
    SECTIONS.map((section) => ({
      name: section.name,
      inView: false,
    })),
  );

  const handleSectionChange = useCallback(
    (sectionName: string, inView: boolean) => {
      setSections((sections) =>
        sections.map((section) => {
          if (section.name !== sectionName) return section;

          return {
            name: section.name,
            inView,
          };
        }),
      );
    },
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const sectionName = sections.find(
        (section) => section.inView,
      )?.name;
      const section = SECTIONS.find(
        (section) => section.name === sectionName,
      );
      if (!section) return;

      setActiveSection(section);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [sections]);

  useEffect(() => {
    history.replaceState({}, '', activeSection.anchor);
  }, [activeSection]);

  return { title: activeSection.title, handleSectionChange };
};

export default useSectionAnchor;
