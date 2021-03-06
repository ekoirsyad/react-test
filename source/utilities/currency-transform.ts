/**
 * @param value number
 * @returns string
 */
const currencyTransformer = (value: number) => {
  return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default currencyTransformer;
