import React from "react";
import {
  fetchFilters,
  fetchNewSongs,
  fetchSongs,
  fetchTopSongs,
} from "../api/api";
import Section from "./Section/Section";

export default function HomeSectionWrapper() {
  return (
    <div>
      <Section title="Top Albums" dataSource={fetchTopSongs} type="album" />
      <Section title="New Albums" dataSource={fetchNewSongs} type="album" />
      <Section
        title="Songs"
        dataSource={fetchSongs}
        filterSource={fetchFilters}
        type="song"
      />
    </div>
  );
}
