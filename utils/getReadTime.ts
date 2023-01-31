const getReadTime = (text: string) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  
  return time;
}

export default getReadTime;