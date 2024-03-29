import { useCallback, useEffect, useState } from 'react';

import {
  SECTIONS_WITH_HEADER,
  type Section,
  type SectionName,
} from '~/consts/sections.const';

type SectionInView = {
  inView: boolean;
  name: SectionName;
};

export const useSectionAnchor = (): {
  handleSectionChange: (sectionName: string, inView: boolean) => void;
  title: string;
} => {
  const [activeSection, setActiveSection] = useState<Section>(
    SECTIONS_WITH_HEADER[0],
  );

  const [sections, setSections] = useState<SectionInView[]>(
    SECTIONS_WITH_HEADER.map((section) => ({
      inView: false,
      name: section.name,
    })),
  );

  const handleSectionChange = useCallback(
    (sectionName: string, inView: boolean) => {
      setSections((sections) =>
        sections.map((section) => {
          if (section.name !== sectionName) return section;

          return {
            inView,
            name: section.name,
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
      const section = SECTIONS_WITH_HEADER.find(
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

  return { handleSectionChange, title: activeSection.title };
};
