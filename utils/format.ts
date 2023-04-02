export const number = new Intl.NumberFormat('en').format;

export const dateTime = (date: Date) =>
  date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

export const dateTimeUTC = (date: Date) =>
  date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short',
  });

export const relativeTime = (
  date: Date,
  relative: Date = new Date(),
) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const units: { unit: Intl.RelativeTimeFormatUnit; ms: number }[] = [
    { unit: 'year', ms: 31536000000 },
    { unit: 'month', ms: 2628000000 },
    { unit: 'day', ms: 86400000 },
    { unit: 'hour', ms: 3600000 },
    { unit: 'minute', ms: 60000 },
    { unit: 'second', ms: 1000 },
  ];

  const elapsed = date.getTime() - relative.getTime();

  for (const { unit, ms } of units) {
    if (Math.abs(elapsed) >= ms || unit === 'second') {
      return rtf.format(Math.round(elapsed / ms), unit);
    }
  }
  return '';
};
