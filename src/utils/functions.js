export const convertTime24to12 = (time) => {
  if (time) {
    let [hours, minutes] = time.split(":");

    if (Number(hours) > 12) {
      return `${Number(hours - 12)}:${minutes} p.m.`;
    } else if (Number(hours) === 12) {
      return `${hours}:${minutes} p.m.`;
    } else return `${hours}:${minutes} a.m.`;
  }
};
