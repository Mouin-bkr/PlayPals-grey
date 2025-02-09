export interface Tool {
  id: string;
  title: string;
  category: string;
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
  useCases: string[];
  developmentInsights: string[];
}
