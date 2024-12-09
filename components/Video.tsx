type VideoProps = {
  url: string;
  width: string;
  height: string;
};

const Video = ({ url, width, height }: VideoProps) => {
  return (
    <video width={width} height={height} controls preload="none">
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default Video;
