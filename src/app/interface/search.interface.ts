export interface SearchResponse {
  data: GipData[];
  pagination:  Pagination;
  meta: Meta;
}
export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface GipData {
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
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Analytics {
  onload: OnLoad;
  onclick: OnClick;
  onsent: OnSent;
}

export interface OnLoad {
  url: string;
}

export interface OnClick {
  url: string;
}

export interface OnSent {
  url: string;
}

export interface Images {
    original: Original;
    downsized: FourPropsURL;
    downsized_large: FourPropsURL;
    downsized_medium: FourPropsURL;
    downsized_small: FourPropsMp4;
    downsized_still: FourPropsURL;
    fixed_height: FixedHeight;
    fixed_height_downsampled: FixedHeightDownSample;
    fixed_height_small: FixedHeight;
    fixed_height_small_still: FourPropsURL;
    fixed_height_still: FourPropsURL;
    fixed_width: FixedHeight;
    fixed_width_downsampled: FixedHeightDownSample;
    fixed_width_small: FixedHeight;
    fixed_width_small_still: FourPropsURL;
    fixed_width_still: FourPropsURL;
    looping: Looping;
    original_still: FourPropsURL;
    original_mp4: FourPropsMp4;
    preview: FourPropsMp4;
    preview_gif: FourPropsURL;
    preview_webp: FourPropsURL;
    ["480w_still"]: FourPropsURL;
}

export interface Original {
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

export interface FourPropsURL {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FourPropsMp4 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightDownSample {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}
