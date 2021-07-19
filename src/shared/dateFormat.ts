export function dateFormat(date: Date): string {
  const transformInDate = new Date(date);

  const day =
    transformInDate.getDate() <= 9
      ? `0${transformInDate.getDate()}`
      : transformInDate.getDate();

  const month =
    transformInDate.getMonth() <= 9
      ? `0${transformInDate.getMonth()}`
      : transformInDate.getMonth();

  const year =
    transformInDate.getFullYear() <= 9
      ? `0${transformInDate.getFullYear()}`
      : transformInDate.getFullYear();

  return `${day}/${month}/${year}`;
}
