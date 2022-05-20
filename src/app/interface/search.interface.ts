export interface ISearchInput {
  searchValue: string;
  limit: number;
}

export interface ISearchResponse {
  data: IGifData[];
  pagination: IPagination;
  meta: IMeta;
}
export interface IMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface IPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface IGifData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user?: IUser;
  analytics_response_payload: string;
  analytics: IAnalytics;
}

export interface IAnalytics {
  onload: IUrl;
  onclick: IUrl;
  onsent: IUrl;
}

export interface IUrl {
  url: string;
}

export interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: true
}

export interface Images {
    original: IOriginal;
    downsized: IFourPropsURL;
    downsized_large: IFourPropsURL;
    downsized_medium: IFourPropsURL;
    downsized_small: IFourPropsMp4;
    downsized_still: IFourPropsURL;
    fixed_height: IFixedHeight;
    fixed_height_downsampled: IFixedHeightDownSample;
    fixed_height_small: IFixedHeight;
    fixed_height_small_still: IFourPropsURL;
    fixed_height_still: IFourPropsURL;
    fixed_width: IFixedHeight;
    fixed_width_downsampled: IFixedHeightDownSample;
    fixed_width_small: IFixedHeight;
    fixed_width_small_still: IFourPropsURL;
    fixed_width_still: IFourPropsURL;
    looping: ILooping;
    original_still: IFourPropsURL;
    original_mp4: IFourPropsMp4;
    preview: IFourPropsMp4;
    preview_gif: IFourPropsURL;
    preview_webp: IFourPropsURL;
    hd?: IFourPropsMp4;
    ["480w_still"]: IFourPropsURL;
}

export interface IOriginal {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface IFourPropsURL {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IFourPropsMp4 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface IFixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface IFixedHeightDownSample {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface ILooping {
  mp4_size: string;
  mp4: string;
}
