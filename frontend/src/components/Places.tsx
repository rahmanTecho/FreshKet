import React from "react";
import useFetch from "../hooks/useFetch";
import { Place, Tag } from "../types";
import { placesUrl, tagsUrl } from "../constans";

const Places: React.FC = () => {
  const { data: places, loading: loadingPlaces } = useFetch<Place>(placesUrl);
  const { data: tags, loading: loadingTags } = useFetch<Tag>(tagsUrl);

  if (loadingPlaces || loadingTags) return <p>Loading...</p>;

  const getTagNames = (tagIds: number[]): string[] => {
    return tags.filter((tag) => tagIds.includes(tag.id)).map((tag) => tag.name);
  };

  return (
    <div className="places-container">
      {places.map((place) => (
        <div key={place.id} className="place-card">
          <img src={place.img_url} alt={place.name} className="place-image" />
          <div className="place-details">
            <h3 className="place-name">{place.name}</h3>
            <p className="place-description">{place.body}</p>
            <div className="tags">
              {getTagNames(place.tags).map((tagName) => (
                <span key={tagName} className="tag">
                  {tagName}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
