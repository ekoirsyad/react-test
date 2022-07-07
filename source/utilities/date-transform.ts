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
function dateTransformer(dateString: string) {
  const date = new Date(dateString.replace(' ', 'T'));
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export default dateTransformer;
