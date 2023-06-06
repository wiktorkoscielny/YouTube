export const parseVideoDuration = (duration: string): void => {
  const durationSlices: string[] = duration
  .replace("PT", "")
  .replace("H", ":")
  .replace("M", ":")
  .replace("S", "")
  .split(":");

  return _durationSwitcher(durationSlices);
}

const _durationSwitcher = (slices: string[]) => {
  const slicesLength = slices.length;

  switch (slicesLength) {
    case 1:
      `0:${
        parseInt(slices[0]) < 9
          ? `0${slices[0]}`
          : slices[0]
      }`;
      break;

    case 2:
      `${slices[0]}:${
        parseInt(slices[1]) < 9
          ? `0${slices[1]}`
          : slices[1]
      }`;
      break;

    case 3:
      `${slices[0]}:${
        parseInt(slices[1]) < 9
          ? `0${slices[1]}`
          : slices[1]
      }:${
        parseInt(slices[2]) < 9
          ? `0${slices[2]}`
          : slices[2]
      }`
      break;

    default:
      "";
  }
}
