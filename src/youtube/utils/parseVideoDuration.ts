export const parseVideoDuration = (duration: string): string => {
  const durationParts: string[] = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  return durationParts.length === 3
    ? `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9
          ? `0${durationParts[1]}`
          : durationParts[1]
      }:${
        parseInt(durationParts[2]) < 9
          ? `0${durationParts[2]}`
          : durationParts[2]
      }`
    : durationParts.length === 2
    ? `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9
          ? `0${durationParts[1]}`
          : durationParts[1]
      }`
    : durationParts.length === 1
    ? `0:${
        parseInt(durationParts[0]) < 9
          ? `0${durationParts[0]}`
          : durationParts[0]
      }`
    : "";
};
