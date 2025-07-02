import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendarSection() {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-4">Kontribusi Github</h2>
      <GitHubCalendar
        username="hikam074"
        blockSize={14}
        blockMargin={5}
        fontSize={14}
        transformData={(contributions) => contributions.slice(-180)}
        colorScheme="light"
      />
    </section>
  );
}
