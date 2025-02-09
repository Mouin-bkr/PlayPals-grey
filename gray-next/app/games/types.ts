export interface Game {
  id: string;
  title: string;
  type: string;
  thumbnail: string;
  media: {
    type: "image" | "video";
    url: string;
  }[];
  description: string;
  technicalDetails: {
    stack: string[];
    features: string[];
  };
  gameplay: {
    mechanics: string[];
    controls: string[];
  };
  developmentInsights: string[];
}
