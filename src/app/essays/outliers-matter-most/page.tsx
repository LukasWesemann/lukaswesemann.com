import Essay from "@/components/Essay";

export default function StatisticalOutliersMatterMost() {
  return (
    <Essay 
      title="Outliers matter most"
      date="September 2, 2025"
    >
      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        Many important objectives in life are achieved by repeatedly sampling from a partly unknown probability distribution over possible outcomes. We want to find an apartment, so we go to many differet inspections. While we have some feeling for which ones are promising and which ones aren't, the uncertainty is large. So we try repeatedly until we find an apartment that we actually like. The same goes for finding a romantic partner or a great deal for a second hand car and so on.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        Average results are easy to come by. But real success comes from hitting statistical outliers, the rare long-tail opportunities. My strategy has always been to maximise the chance of encountering those outliers.
      </p>

      <p className="text-gray-700 font-serif leading-relaxed text-xl">
        If you want to roll a six, the key is to roll as often as possible. However, we usually have an additional constraint: limited time. So it comes down to focusing on three things. Maximising the time we have available to sample, minimising the cost for sampling and sampling as fast as possible. That's it.
      </p>
    </Essay>
  );
} 