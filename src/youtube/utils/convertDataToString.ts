export const convertDataToString = (
  labelValue: string,
  isSub = false
): string => {
  const absoluteValue = Math.abs(Number(labelValue));
  
  if (absoluteValue >= 1.0e9) {
    return (absoluteValue / 1.0e9).toFixed(0) + "B";
  }

  if (absoluteValue >= 1.0e6) {
    return (absoluteValue / 1.0e6).toFixed(0) + "M"; 
  }

  if (absoluteValue >= 1.0e3) {
    return (absoluteValue / 1.0e3).toFixed(isSub ? 2 : 0) + "K"
  }

  return absoluteValue.toString();
}
