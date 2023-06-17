/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { InheritedCardProps } from "./Card.container";

/** @namespace Youtube/Component/Card/Component */
export class CardComponent extends PureComponent<InheritedCardProps> {
  render() {
    const { data, key } = this.props;
    return (
      <div className="w-full min-w-[300px] max-w-[356px] justify-center">
        <div className="relative border-[1px] border-transparent rounded-[12px]">
          <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
            {data.videoDuration}
          </span>
          <Link to={`/watch/${data.videoId}`}>
            <img
              src={data.videoThumbnail}
              className="w-full h-full border-[1px] border-transparent rounded-[12px]"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="flex gap-2 pt-3">
          <div className="min-w-fit">
            <a href="#">
              <img
                src={data.channelInfo.image}
                alt="channel"
                className="h-9 w-9 rounded-full"
              />
            </a>
          </div>
          <div>
            <h3>
              <a href="#" className="line-clamp-2">
                {data.videoTitle}
              </a>
            </h3>
            <div className="text-sm text-gray-400">
              <div>
                <a href="#" className="hover:text-white">
                  {data.channelInfo.name}
                </a>
              </div>
              <div>
                <span className="after:content-['•'] after:mx-1">
                  {data.videoViews} views
                </span>
                <span>{data.videoAge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
