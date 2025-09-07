import Essay, { generateEssayMetadata } from "@/components/Essay";

export const metadata = generateEssayMetadata({
  title: "What MLAI is to me",
  description: "Reflecting on the mission, values, and future of MLAI as a not-for-profit organization bringing together the Australian AI scene.",
  date: "2025-09-06",
});

export default function WhatMLAIIsForMe() {
  return (
    <Essay 
      title="What MLAI is to me"
      date="September 6, 2025"
    >
      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        MLAI has grown spectacularly fast, and it prompted me to pause and reflect. Looking at what we've all built together over the last three years makes me extremely proud. I see MLAI as the cumulative donation of time and effort of all the volunteers that have contributed. With the recent growth have come challenges too and difficult decisions had to be made by the committee. I strongly believe that the best way to make difficult decisions is to go back to your values. Every good decision is aligned with your values, and every compromise on values leads down a slippery slope.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        We founded MLAI with one mission in mind: to bring together the Australian AI scene.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        And while there is an altruistic element to it, we were very aware that the network we are building in doing so would be immensely valuable to us. Making money was recognised as merely a necessity to achieve the actual mission at best, and a point of friction and divide at worst.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        MLAI was founded as a not-for-profit organisation for two main reasons. Both are practical.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        The first one is that it is the nature of a community that it owns itself. And that must be reflected in the legal structure that governs it. A registered not-for-profit organisation in Australia has no shareholders. No person owns it, the organisation owns itself if you will. Decisions are made by the people that are on the committee at any given time.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        And no individual can extract value from the organisation. There can be compensation but any contribution should be a net donation, not a net plus. The value we are all gaining from this is the network.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        The second reason is that the not-for-profit framework allows us to bring in volunteers. A privately owned organisation can not legally have people donate their time. That would be strictly illegal in Australia. The reason that MLAI has grown so fast is because of the large number of volunteers that have contributed.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        I see MLAI as a growing family. A family of techies and builders. And when I think about what family means to me, I find it easy to define our values. Growing the family as large as possible, making everyone feel part of something larger than themselves and going the extra mile for each other. Not making as much money as we can.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        I never want to compromise on our mission or values. I'd rather miss out on people and profit if that means we can stay laser focused on what we initially set out to achieve. And I'm convinced that this will lead the organisation to a place where everyone involved would laugh at the thought of having given that up for money.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        These are my opinions and beliefs and, as always, the committee decides where we're going next.
      </p>
    </Essay>
  );
} 