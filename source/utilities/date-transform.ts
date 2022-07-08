/**
 * List of months in Bahasa Indonesia
 */
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
 * Replace all spaces with T in date string
 * @param dateString  string
 * @returns Date object
 */
export const getTime = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'));
  return date.getTime();
};

/**
 * @param dateString string to transform to correct format date
 * @returns string with date transformed
 */
const dateTransformer = (dateString: string) => {
  const date = new Date(dateString.replace(' ', 'T'));
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export default dateTransformer;
