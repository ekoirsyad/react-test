const MONTHS = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

/**
 * @param dateString string to transform to correct format date
 * @returns string with date transformed
 */
const dateTransformer = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'));
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const getTime = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'));
  return date.getTime();
};

export default dateTransformer;
