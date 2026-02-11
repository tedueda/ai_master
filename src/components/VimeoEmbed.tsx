interface VimeoEmbedProps {
  videoUrl: string;
  title: string;
}

export default function VimeoEmbed({ videoUrl, title }: VimeoEmbedProps) {
  // Extract video ID and hash from Vimeo URL
  // Format: https://vimeo.com/1162980629/0f6829d721
  const urlParts = videoUrl.split('/');
  const videoId = urlParts[3];
  const hash = urlParts[4];

  return (
    <div className="mb-8">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=${hash}`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
}
