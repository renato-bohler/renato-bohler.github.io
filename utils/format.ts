export const number = (value: number) =>
  new Intl.NumberFormat('en').format(value);

export const dateTime = (date: Date) =>
  date.toLocaleDateString('en', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const dateTimeUTC = (date: Date) =>
  date.toLocaleDateString('en', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    timeZoneName: 'short',
    year: 'numeric',
  });

export const relativeTime = (
  date: Date,
  relative: Date = new Date(),
) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const units: { ms: number; unit: Intl.RelativeTimeFormatUnit }[] = [
    { ms: 31536000000, unit: 'year' },
    { ms: 2628000000, unit: 'month' },
    { ms: 86400000, unit: 'day' },
    { ms: 3600000, unit: 'hour' },
    { ms: 60000, unit: 'minute' },
    { ms: 1000, unit: 'second' },
  ];

  const elapsed = date.getTime() - relative.getTime();

  for (const { ms, unit } of units) {
    if (Math.abs(elapsed) >= ms || unit === 'second')
      return rtf.format(Math.round(elapsed / ms), unit);
  }
  return '';
};
