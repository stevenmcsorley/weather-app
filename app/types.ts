export interface PostData {
  id?: number;
  title: string;
  subtitle?: string;
  content: string;
  author?: string;
  date?: string;
  slug: string;
  userid?: string;
}

export type WeatherData = {
  location?: {
    name: string;
    country?: string;
  };
  current?: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    precip_mm: number;
    wind_kph: number;
  };
  error?: {
    message: string;
  };
};
